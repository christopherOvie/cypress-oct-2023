describe("verify add employee functionality", () => {
              beforeEach("before each test",() => {
                cy.login(Cypress.env("username"), Cypress.env("password"));
                cy.contains("PIM").click({ force: true });
                cy.contains("Add Employee").click();
              });
  it("verify login with valid username and valid password", () => {
    // cy.login(Cypress.env("username"), Cypress.env("password"));
    // cy.contains("PIM").click({ force: true });
    // cy.contains("Add Employee").click();
    cy.get("input[placeholder='First Name']").type("christo");
    cy.get("input[name='lastName']").type("king");
    cy.get("button[type='submit']").click();
    cy.contains("Successfully Saved").should("be.visible");
  });
  it("verify mandatory details in add employee", () => {
    // cy.login(Cypress.env("username"), Cypress.env("password"));
    // cy.contains("PIM").click({ force: true });
    // cy.contains("Add Employee").click();
    cy.get("button[type='submit']").click();
    cy.contains("Required").should("be.visible");
  });
  it("verify charcter limit for first name field", () => {
    // cy.login("Admin", "admin123");
    // cy.contains("PIM").click();
    // cy.contains("Add Employee").click();
    cy.get("button[type='submit']").click();
    cy.get("input[placeholder='First Name']").type(
      "xxxxrrrrrrrrrrrrrrrrrhhhhhhhhhhhhkkkkkkkkkkkkkkkkkkkkkk"
    );
    cy.contains("Should not exceed 30 characters").should("be.visible");
  });
});
