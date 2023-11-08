import data from "../../fixtures/addJobTitle.json";
import dashboard from "../../pages/dashboardPage.po";
describe("verify Add Job title functionality", () => {
  it("verify add job title with valid input details", () => {
    cy.login("Admin","admin123");

    cy.contains(dashboard.adminMenu()).click();
    cy.get(".oxd-main-menu-item.active").click();
    cy.get(
      "li:nth-of-type(2) > .oxd-topbar-body-nav-tab-item > .bi-chevron-down.oxd-icon"
    ).click();
    cy.contains("Job Titles").click();

    cy.get(
      "button[class='oxd-button oxd-button--medium oxd-button--secondary']"
    ).click();
    cy.get(".oxd-form .oxd-input").type(data.jobTitle);
    cy.get("textarea[placeholder='Type description here']").type(
      data.jobDescription
    );
    cy.get("button[type='submit']").click();
    cy.contains("Successfully Saved").should("be.visible");
  });
});
