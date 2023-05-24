Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
  cy.get('#firstName').type('Ricardo')
  cy.get('#lastName').type('Ferraz')
  cy.get('#email').type('ricardo@gmail.com')
  cy.get('#open-text-area').type('Teste')
 // cy.get('button[type="submit"]').click()
}) 