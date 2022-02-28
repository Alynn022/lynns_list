describe('Home Page user flows', () => {

  const restaurantData = () => {
    return { 
      businesses: [{
        id: "LXlVCu6G-buaxC8GlDjmLA",
        alias: "little-man-ice-cream-denver",
        name: "Little Man Ice Cream",
        image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/M9JjCgC5u_zoH2_1vG1jTQ/o.jpg",
        is_closed: false,
        url: "https://www.yelp.com/biz/little-man-ice-cream-denver?adjust_creative=E6U6G8Kpna_RIMndHiaPpw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=E6U6G8Kpna_RIMndHiaPpw",
        review_count: 2444,
        categories: [
            {
                alias: "icecream",
                title: "Ice Cream & Frozen Yogurt"
            }
        ],
        rating: 4.5,
        coordinates: {
            latitude: 39.7595,
            longitude: -105.01104
        },
        transactions: [
            "delivery"
        ],
        price: "$$",
        location: {
            address1: "2620 16th St",
            address2: "",
            address3: "",
            city: "Denver",
            zip_code: "80211",
            country: "US",
            state: "CO",
            display_address: [
                "2620 16th St",
                "Denver, CO 80211"
            ]
        },
        phone: "+13034553811",
        display_phone: "(303) 455-3811",
        distance: 4391.371861946149
      }
    ]
  }
} 


  it('On load, a user should see a restaurant card', () => {
    cy.intercept('GET', 'https://fe-cors-proxy.herokuapp.com',
      {
        ok: true, 
        statusCode: 200, 
        body: restaurantData() 
      }
    )
    .visit('http://localhost:3000')
      .get('header').should('exist')
      .get('footer').should('exist')
      .get('h1').should('have.text', 'Lynn\'s List')
      .get('.home-card').should('exist')
      .get('.thumbnail').should('exist')
      .get('.restaurant-info').should('exist')
      .get('h2').should('have.text', 'Little Man Ice Cream')
      .get('.rating').should('have.text', 'Rating: 4.5')
      .get('.phone-number').should('have.text', '(303) 455-3811')
      .get('.phone-link').should('have.attr', 'href', 'tel:(303) 455-3811') 
      .get('.address').should('have.text', '2620 16th StDenver, CO 80211')
      .get('.dropdown-btn').click()
      .get('.dropdown-item').should('have.text', 'Gotta GoLoved ItCreate A New List')
      .get('.more-info').should('exist')
      .get('.yelp-link').should('have.attr', 'href', 'https://www.yelp.com/biz/little-man-ice-cream-denver?adjust_creative=E6U6G8Kpna_RIMndHiaPpw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=E6U6G8Kpna_RIMndHiaPpw')
  });

  it('A user should be able to load more restaurants', () => {
    cy.intercept('GET', 'https://fe-cors-proxy.herokuapp.com',
      {
        ok: true, 
        statusCode: 200, 
        body: restaurantData() 
      }
    )
    .visit('http://localhost:3000')
      .get('.home-card').should('exist')
      .get('.load-more').click()
      .get('.home-card').should('have.length', 2)
      
  });
});


