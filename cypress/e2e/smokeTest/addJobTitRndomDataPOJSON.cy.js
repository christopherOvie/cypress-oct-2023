import data from "../../fixtures/addJobTitle.json";
import jobTitle from "../../pages/jobTitle.po";
import dashboard from "../../pages/dashboardPage.po";
import logindata from "../../fixtures/loginData.json"
describe("verify Add Job title functionality", () => {
  it("verify add job title with valid input details", () => {
    cy.login(logindata.username,logindata.password);
    cy.contains(dashboard.adminMenu()).click();
    jobTitle.createJobTitle(data.jobTitle, data.jobDescription);
  });
});
