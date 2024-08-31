export class homePOM {

    shoppingLocators = {

        searchBar:"input[name='search']",
        searchBtn:"button.btn.btn-default.btn-lg",
        product:"img[title='MacBook']",
        addtoCart:"Add to Cart",
        successMessage:"div.alert.alert-success.alert-dismissible"
    }

    searchAnItem(prodName){
        cy.get(this.shoppingLocators.searchBar).type(prodName)
        cy.get(this.shoppingLocators.searchBtn).click()
    }

    addProdToCart(){
        cy.contains(this.shoppingLocators.addtoCart).first().click()
    }

    /*assertions should be done in the test file or spec file not in the POM
    if you want to perform further action, you need to use return keyword*/

    verifySuccessMsg(){
        return cy.get(this.shoppingLocators.successMessage)
    }
    

}