import { homePOM } from "../../PagesPOM/homePOM";
const homePageObj = new homePOM();
import testData from "../../fixtures/shoppingData.json";

describe('Add to Cart', () => {

    //before hook it executes before all it blocks
   before(()=>{
    cy.loginPg(testData.logindata.username , testData.logindata.password) 
   });

    
  it('Search and Add MacBook to cart and validate', () => {
    
    homePageObj.searchAnItem(testData.product.searchProduct)
    homePageObj.addProdToCart()
    homePageObj.verifySuccessMsg().should('contain', testData.message.successMessage).and('contain', testData.product.searchProduct)

  });

});