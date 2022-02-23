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


  it('On load, a user should be able to see a list of Denver restaurants', () => {
    cy.intercept('GET', 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=Denver&categories=food&limit=50&offset=0',
      {
        ok: true, 
        statusCode: 200, 
        body: restaurantData() 
      }
    )
    .visit('http://localhost:3000')
      .get('.home-card').should('exist')
      .get('.thumbnail').should('exist')
      .get('.restaurant-info').should('exist')
      .get('h2').should('have.text', 'Little Man Ice Cream')
      .get('.rating').should('have.text', 'Rating: 4.5')
      .get('.phone').should('have.text', '+13034553811')
      .get('.address').should('have.text', '2620 16th StDenver, CO 80211')
      .get('.yelp-link').should('have.text', 'Yelp Link') //Need to edit this test based on what we end up doing with yelp link
      .get('.gotta-go').should('exist')
      .get('.been-there').should('exist') //if className is changed to lovedIt, change test
      .get('.more-info').should('exist')
  });
});


