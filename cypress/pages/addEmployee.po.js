class addEmployeePage{

    addEmployeeSubmenu(){
        return "Add Employee";
    }
    firstnameInput(){
        return "input[placeholder='First Name']";
    }
    exceededLimitErrorMessage(){
        return "Should not exceed 30 characters";
    }
firstNameErrorMessage(){
    return "Required";
}
    lastnameInput(){
        return "input[placeholder='Last Name']";
    }
    saveButton(){

        return "button[type='submit']";
    }
    successMessage(){
        return "Successfully Saved"
    }

  
}
const addemployee = new addEmployeePage();

export default addemployee;

