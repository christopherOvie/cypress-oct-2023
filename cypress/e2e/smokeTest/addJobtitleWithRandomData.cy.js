import data from "../../fixtures/addJobTitle.json";
describe("verify Add Job title functionality", () => {
  it("verify add job title with valid input details", () => {
    cy.visit(Cypress.env("loginUrl"));
    cy.get("input[placeholder='Username']").type(Cypress.env("username"));
    cy.get("input[placeholder='Password']").type(Cypress.env("password"));
    cy.get("button[type='submit']").click();
    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    );
    cy.contains("Dashboard").should("be.visible");
    cy.contains("Admin").click();
    //cy.get(".oxd-main-menu-item.active").click();
    cy.get(
      "li:nth-of-type(2) > .oxd-topbar-body-nav-tab-item > .bi-chevron-down.oxd-icon"
    ).click();
    cy.contains("Job Titles").click();

    cy.get(
      "button[class='oxd-button oxd-button--medium oxd-button--secondary']"
    ).click();

    const randomText = Math.random().toString(36).substr(2, 10);   
//const randomText = Math.random().toString(36).substring(2,7);
//console.log(result);
    cy.get(".oxd-form .oxd-input").type(data.jobTitle + randomText);
    cy.get("textarea[placeholder='Type description here']").type(
      data.jobDescription
    );
    cy.get("button[type='submit']").click();
    cy.contains("Successfully Saved").should("be.visible");
  });
});
