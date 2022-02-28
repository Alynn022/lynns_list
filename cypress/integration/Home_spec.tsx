describe('Home Page user flows', () => {

  it('On load, a user should see a restaurant card', () => {
    cy.intercept('GET', 'https://fe-cors-proxy.herokuapp.com', { fixture: 'sampleRestaurant.json' })
    .visit('http://localhost:3000')
      .get('.home-card').should('exist')
      .get('.thumbnail').should('exist')
      .get('.restaurant-info').should('exist')
      .get('h2').should('have.text', 'Little Man Ice Cream')
      .get('.rating').should('have.text', 'Rating: 4.5')
      .get('.phone-number').should('have.text', '(303) 455-3811') 
      .get('.address').should('have.text', '2620 16th StDenver, CO 80211')
      .get('.more-info').should('exist')
      .get('.gotta-go').should('exist')
      .get('.loved-it').should('exist') //if className is changed to lovedIt, change test
      // .get('.more-info').should('exist') // bring back if we bring back button
  });
});


