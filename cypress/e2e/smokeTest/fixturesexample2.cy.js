
describe("verify Add Job title functionality", function(){
  before(function() {
    cy.fixture('register').then(function(data) {
      this.data=data;
  });
});
  it("verify register flow", function() {
    cy.visit('https://shop.demoqa.com/my-account/')
 cy.get("#reg_username").type(this.data.username)
 cy.get("#reg_email").type(this.data.emailAddress)
 cy.get("#reg_password").type(this.data.weakPassword)
 cy.get("button[disabled='disabled']").should("be.disabled")
 cy.wait(3000)
 cy.get("button[disabled='disabled']").should('have.attr','disabled','disabled')
 cy.get("#reg_password").clear().type(this.data.strongPassword)
 
  });
});
