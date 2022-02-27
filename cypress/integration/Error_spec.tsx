import { createYield } from "typescript"

describe('User Error Flows', () => {
  it('should have an error page for 400 errors', () => {
    cy.intercept('GET', 'https://fe-cors-proxy.herokuapp.com',
      {
        ok: false, 
        statusCode: 404,  
      }
    )
      .visit('http://localhost:3000')
      .get('.error-container').should('exist')
      .get('.sad-ice-cream-boy').should('exist')
      .get('.error-message').should('have.text', '404 Error. Sorry, the page you\'re looking for doesn\'t exist.')
      .get('.nav-back-home-error').should('exist')
  })

  it('should have an error page for 500 errors', () => {
    cy.intercept('GET', 'https://fe-cors-proxy.herokuapp.com',
      {
        ok: false, 
        statusCode: 500,  
      }
    )
      .visit('http://localhost:3000')
      .get('.error-container').should('exist')
      .get('.sad-ice-cream-boy').should('exist')
      .get('.error-message').should('have.text', '500 Error. Something went wrong. Please try again!')
      
  })
})