class JobTitlePage{


jobSubMenu ="Job"
jobtitleOption="Job Titles"
addButton="button[class='oxd-button oxd-button--medium oxd-button--secondary']"
jobTitleInput()
{
    return ".oxd-form .oxd-input"

}
jobDescriptionInput(){
  return  "textarea[placeholder='Type description here']"

}
  saveButton(){
    return "button[type='submit']"
  }

  successMessaage(){
    return "Successfully Saved"
  }
  createJobTitle(jobTitle,jobDescription){
    cy.contains(this.jobSubMenu).click();
    cy.contains(this.jobtitleOption).click();

    cy.get(this.addButton).click();

    const randomText = Math.random().toString(36).substr(2, 10);

    cy.get(this.jobTitleInput()).type(jobTitle + randomText);
    cy.get(this.jobDescriptionInput()).type(jobDescription);
    cy.get(this.saveButton()).click();
    cy.contains(this.successMessaage()).should("be.visible");
  }
}

const jobTitle = new JobTitlePage()
export default jobTitle