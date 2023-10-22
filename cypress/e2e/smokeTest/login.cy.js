describe("verify login functionality", () => {
  it("verify login with valid username and valid password", () => {
    cy.visit(Cypress.env("loginUrl"));
    cy.get("input[placeholder='Username']").type(Cypress.env("username"));
    cy.get("input[placeholder='Password']").type(Cypress.env("password"));
    cy.get("button[type='submit']").click();
    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    );
    cy.contains('Dashboard').should('be.visible')
  });
  it("verify login with invalid username and valid password", () => {
    cy.visit(Cypress.env("loginUrl"));
    cy.get("input[placeholder='Username']").type("aaaaa");
    //cy.get("input[placeholder='Password']").type('admin123')
    cy.get("input[placeholder='Password']").type(Cypress.env("password"));
    cy.get("button[type='submit']").click();
    // cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text').should('eq','Invalid credentials')
    cy.contains("Invalid credentials").should("be.visible");
  });
  it("verify login with valid username and invalid password", () => {
    cy.visit(Cypress.env("loginUrl"));
    //cy.get("input[placeholder='Username']").type('Admin')
    cy.get("input[placeholder='Username']").type(Cypress.env("username"));
    cy.get("input[placeholder='Password']").type("vvvvvv");
    cy.get("button[type='submit']").click();
    cy.contains("Invalid credentials").should("be.visible");
  });
  it("verify login with invalid username and invalid password", () => {
   // cy.viewport("ipad-2", "landscape");
    cy.visit(Cypress.env("loginUrl"));
    cy.get("input[placeholder='Username']").type("xxx");
    cy.get("input[placeholder='Password']").type("admin123xxxx");
    cy.get("button[type='submit']").click();
    cy.contains("Invalid credentials").should("be.visible");
  });
});
