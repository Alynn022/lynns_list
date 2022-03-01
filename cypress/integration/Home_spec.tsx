describe('Home Page user flows', () => {

  it('On load, a user should see a restaurant card', () => {
    cy.intercept('GET', 'https://fe-cors-proxy.herokuapp.com', { fixture: 'sampleRestaurant.json' })
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
    cy.intercept('GET', 'https://fe-cors-proxy.herokuapp.com', { fixture: 'sampleRestaurant.json' })
    .visit('http://localhost:3000')
      .get('.home-card').should('exist')
      .get('.load-more').click()
      .get('.home-card').should('have.length', 2)
  });
});


