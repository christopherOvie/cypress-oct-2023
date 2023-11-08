class DashboardPage{

adminMenu(){
    return "Admin"
    //cy.get(':nth-child(1) > .oxd-main-menu-item')
}
pimMenu(){
    return "PIM"
}
leaveMenu(){
    return "Leave"
}
timeMenu(){
    return "Time"
}
myinfoMenu(){
    return "My Info"
}
}

const dashboard = new DashboardPage()
export default dashboard