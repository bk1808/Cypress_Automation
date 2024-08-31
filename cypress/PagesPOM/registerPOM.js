export class registerPOM{


    registerObject = {

        firstname:"#input-firstname",
        lastname:"#input-lastname",
        email:"#input-email",
        telephone:"#input-telephone",
        password:"#input-password",
        confirmPassword:"#input-confirm",
        newsletter:"input[name='newsletter'][checked='checked']",
        privacyPolicy:"input[name='agree']",
        continueBtn:"input[type='submit']"
    }

    openURL(){

        cy.visit(Cypress.env('EcomURL'))

    }

    enterFirstName(FName){
        cy.get(this.registerObject.firstname).type(FName)
    }

    enterLastName(LName){
        cy.get(this.registerObject.lastname).type(LName)
    }

    enterEmail(Email){
        cy.get(this.registerObject.email).type(Email)
    }

    enterTelephone(TPhone){
        cy.get(this.registerObject.telephone).type(TPhone)
    }

    enterPassword(PWord){
        cy.get(this.registerObject.password).type(PWord)
    }

    enterConfirmPWD(ConPWD){
        cy.get(this.registerObject.confirmPassword).type(ConPWD)
    }

    checkNewsleteer(){
        cy.get(this.registerObject.newsletter).check()
    }

    privacyPolicy(){
        cy.get(this.registerObject.privacyPolicy).check()
    }

    continueBtn(){
        cy.get(this.registerObject.continueBtn).click()
    }

}