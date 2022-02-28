import { createYield } from "typescript"

describe('MyLists component user flows', () => {
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
  it('A user should be able to add a restaurant to either "Wanna try?" or "Loved It"', () => {
    cy.intercept('GET', 'https://fe-cors-proxy.herokuapp.com',
      {
        ok: true, 
        statusCode: 200, 
        body: restaurantData() 
      }
    )
    .visit('http://localhost:3000')
      .get('#my-lists-nav').click()
      .get('.list-card').should('not.exist') 
      .get('.selected-list').should('have.text', 'Your "Gotta Go" List')
      .get('.no-restaurants-yet').should('have.text', 'You currently have no restaurants saved to this list, please return home and make some selections.')
      .get('#home-nav-button').click()
      .get('.dropdown-btn').click()
      .get('.dropdown-item').first().click({force: true})
      .get('#my-lists-nav').click()
      .get('.list-card').should('exist')
      .get('.delete-button').should('exist')
      .get('.thumbnail').should('exist')
      .get('.name').should('have.text', 'Little Man Ice Cream')
      .get('.rating').should('have.text', 'Rating: 4.5')
      .get('.phone-number').should('have.text', '(303) 455-3811')
      .get('.phone-link').should('have.attr', 'href', 'tel:(303) 455-3811')  
      .get('.address').should('have.text', '2620 16th StDenver, CO 80211')
      .get('.more-info').should('exist')
      .get('.yelp-link').should('have.attr', 'href', 'https://www.yelp.com/biz/little-man-ice-cream-denver?adjust_creative=E6U6G8Kpna_RIMndHiaPpw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=E6U6G8Kpna_RIMndHiaPpw')
      .get('#home-nav-button').click()
      .get('.dropdown-btn').click()
      .get('.dropdown-item').first().next().click({force: true})
      .get('#my-lists-nav').click()
      .get('#lovedit-list-button').click()
      .get('.list-card').should('exist')
      .get('.thumbnail').should('exist')
      .get('.delete-button').should('exist')
      .get('.name').should('have.text', 'Little Man Ice Cream')
      .get('.rating').should('have.text', 'Rating: 4.5')
      .get('.phone-number').should('have.text', '(303) 455-3811')
      .get('.phone-link').should('have.attr', 'href', 'tel:(303) 455-3811')  
      .get('.address').should('have.text', '2620 16th StDenver, CO 80211')
      .get('.more-info').should('exist') 
      .get('.yelp-link').should('have.attr', 'href', 'https://www.yelp.com/biz/little-man-ice-cream-denver?adjust_creative=E6U6G8Kpna_RIMndHiaPpw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=E6U6G8Kpna_RIMndHiaPpw')

  })

  it('should be able to delete a restaurant from a user\'s lists', () => {
    cy.intercept('GET', 'https://fe-cors-proxy.herokuapp.com',
      {
        ok: true, 
        statusCode: 200, 
        body: restaurantData() 
      }
    )
      .visit('http://localhost:3000') 
        .get('.dropdown-btn').click()
        .get('.dropdown-item').first().next().click({force: true})
        .get('#my-lists-nav').click()
        .get('#lovedit-list-button').click()
        .get('.list-card').should('exist')
        .get('.delete-button').click()
        .get('.list-card').should('not.exist')
        .get('#home-nav-button').click()
        .get('.dropdown-btn').click()
        .get('.dropdown-item').first().click({force: true})
        .get('#my-lists-nav').click()
        .get('.list-card').should('exist')
        .get('.delete-button').click()
        .get('.list-card').should('not.exist')
  })

  it('A user should be able to add their own new list', () => {

    cy.visit('http://localhost:3000')
      .get('#my-lists-nav').click()
      .get('.new-list-button').click()
      .get('.list-input').type('A New List')
      .get('.submit').click()
      .get('.list-button').eq(2).should('have.text', 'A New List')
  })
})