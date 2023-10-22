describe("verify add employee functionality", () => {
  it("verify login with valid username and valid password", () => {
    cy.visit(Cypress.env("loginUrl"));
    cy.get("input[placeholder='Username']").type(Cypress.env("username"));
    cy.get("input[placeholder='Password']").type(Cypress.env("password"));
    cy.get("button[type='submit']").click();
    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    );
    //cy.contains('Dashboard').should('be.visible')
    cy.contains("PIM").click({force: true});
    cy.contains("Add Employee").click();
    cy.get("input[placeholder='First Name']").type("christo");
    cy.get("input[name='lastName']").type("king");
    cy.get("button[type='submit']").click();
    cy.contains("Successfully Saved").should("be.visible");
  });
  it("verify mandatory details in add employee", () => {
    cy.visit(Cypress.env("loginUrl"));
    cy.get("input[placeholder='Username']").type(Cypress.env("username"));
    cy.get("input[placeholder='Password']").type(Cypress.env("password"));
    cy.get("button[type='submit']").click();
    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    );
    cy.contains('Dashboard').should('be.visible')
    cy.contains("PIM").click({force: true});
    cy.contains("Add Employee").click();
    cy.get("button[type='submit']").click();
    cy.contains("Required").should("be.visible");
  });
  it("verify charcter limit for first name field", () => {
    cy.visit(Cypress.env("loginUrl"));
    cy.get("input[placeholder='Username']").type(Cypress.env("username"));
    cy.get("input[placeholder='Password']").type(Cypress.env("password"));
    cy.get("button[type='submit']").click();
    //cy.url().should("eq","https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    cy.contains("Dashboard").should("be.visible");
    cy.contains("PIM").click();
    cy.contains("Add Employee").click();
    cy.get("button[type='submit']").click();
    cy.get("input[placeholder='First Name']").type(
      "xxxxrrrrrrrrrrrrrrrrrhhhhhhhhhhhhkkkkkkkkkkkkkkkkkkkkkk"
    );
    cy.contains("Should not exceed 30 characters").should("be.visible");
  });
});
