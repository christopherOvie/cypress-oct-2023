//import data from "../../fixtures/addJobTitle.json";
import jobTitle from "../../pages/jobTitle.po";
import dashboard from "../../pages/dashboardPage.po";
describe("verify Add Job title functionality", function(){
  before(function() {
    cy.fixture('addJobTitle').then(function(data) {
      this.data=data;
  });
});
  it("verify add job title with valid input details", function() {
    cy.login("Admin", "admin123");
    cy.contains(dashboard.adminMenu()).click();
    jobTitle.createJobTitle(this.data.jobTitle,this.data.jobDescription);
  });
});
