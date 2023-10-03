Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Sayonara')
    cy.get('#lastName').type('Aguiar')
    cy.get('#email').type('sayonarateste@gmail.com')
    cy.get('#open-text-area').type('teste')
    cy.contains('button','Enviar').click()
})