import addemployee from "../../pages/addEmployee.po";
import dashboard from "../../pages/dashboardPage.po";
describe("verify add employee functionality", () => {
              beforeEach("before each test",() => {
                //cy.login("Admin","admin123")
                cy.login(Cypress.env("username"), Cypress.env("password"));
                cy.contains(dashboard.pimMenu()).click({ force: true });
                cy.contains(addemployee.addEmployeeSubmenu()).click();
              });
  it.skip("verify login with valid details", () => {
    cy.get(addemployee.firstnameInput()).type("christo");
    cy.get(addemployee.lastnameInput()).type("king");
    cy.get(addemployee.saveButton()).click();
    cy.contains(addemployee.successMessage()).should("be.visible");
  });
  it("verify mandatory details in add employee", () => {
    // cy.login(Cypress.env("username"), Cypress.env("password"));
    // cy.contains("PIM").click({ force: true });
    // cy.contains("Add Employee").click();
    //cy.get("button[type='submit']").click();
    cy.get(addemployee.saveButton()).click();
    cy.contains(addemployee.firstNameErrorMessage()).should("be.visible");
  });
  it("verify charcter limit for first name field", () => {
    // cy.login("Admin", "admin123");
    // cy.contains("PIM").click();
    // cy.contains("Add Employee").click();
    //cy.get("button[type='submit']").click();
    cy.get(addemployee.saveButton()).click();
    cy.get(addemployee.firstnameInput()).type(
      "xxxxrrrrrrrrrrrrrrrrrhhhhhhhhhhhhkkkkkkk"
    );
    cy.contains(addemployee.exceededLimitErrorMessage()).should("be.visible");
  });
});
