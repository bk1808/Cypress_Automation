// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//this command will perform the login action on the spec file like a 'generic method/pre-requisite' for login

Cypress.Commands.add('loginPg', (email, password) => { 
    cy.visit('')//this is a baseUrl coming from //cypress.config.js file
    cy.get('#input-email').type(email)
    cy.get('#input-password').type(password)
    cy.get('input.btn.btn-primary').click() 
});
