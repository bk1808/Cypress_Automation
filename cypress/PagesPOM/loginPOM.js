export class loginPOM{
//Step-1: create a Javascript object for located elements
   
lpLocators={

    username: "input[name='user_name']",
    password: "input[name='user_password']",
    lgbtn:"input#submitButton"

    }

    //Step-2: Navigate to Login page using URL

    openURL(){
    cy.visit(Cypress.env('URL')) //we'll read the URL through cypress.config.js file by calling the key 'URL'
    }
    
    //Step-3: Create methods for all the above locators

    enterUsername(UName){
    
    cy.get(this.lpLocators.username).type(UName)//objectName along with locator name and pass the value/parameter through fixture file
    }

    enterPassword(PWord){
        cy.get(this.lpLocators.password).type(PWord)//objectName along with locator name and pass the value/parameter through fixture file
    }

    clickLoginBtn(){
        cy.get(this.lpLocators.lgbtn).click()//objectName along with locator name and perform action
    }

}





