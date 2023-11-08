import data from "../../fixtures/addJobTitle.json";
import jobTitle from "../../pages/jobTitle.po";
import dashboard from "../../pages/dashboardPage.po";
describe("verify Add Job title functionality", () => {
  it("verify add job title with valid input details", () => {
    cy.login("Admin", "admin123");
    cy.contains(dashboard.adminMenu()).click();
  });
});
