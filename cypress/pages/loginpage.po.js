class LoginPage{

orangeHRMlogo(){
    return "img[alt='company-branding']";
}
usernameInput(){
    return "input[placeholder='Username']";
}
passwordInput(){
    return "input[placeholder='Password']";
}

loginBtn(){
    return "button[type='submit']";
}
}
// cy.visit(Cypress.env("loginUrl"));
//     cy.get("input[placeholder='Username']").type(username);
//     cy.get("input[placeholder='Password']").type(password);
//     cy.get("button[type='submit']").click();
const login=new LoginPage()

export default login