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

Cypress.Commands.add('login',(username, password) => { 
const menuItems={
  
}
});
Cypress.Commands.add('login',(username, password) => { 
    cy.visit(Cypress.env("loginUrl"));
    cy.get("input[placeholder='Username']").type(username);
    cy.get("input[placeholder='Password']").type(password);
    cy.get("button[type='submit']").click();
    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    );
    cy.contains('Dashboard').should('be.visible')
  });

  Cypress.Commands.add('login1',(value1, value2) => { 
    const menuItems={

    value1 : "Admin",
    value2 : "PIM",
    value3 : "Leave",
    value4 : "Time",
    value2 : "Recruitment",
    value2 : "My Info",

    }
  });
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