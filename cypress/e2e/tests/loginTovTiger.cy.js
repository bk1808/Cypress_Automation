import { loginPOM } from "../../PagesPOM/loginPOM";
import loginData from "../../fixtures/loginData";

const loginObj = new loginPOM();//create an object for login page POM class using 'new' keyword

describe('Login to vTiger Application', () => {
  it('Login to application with valid credentials', () => {
    
    loginObj.openURL()
    loginObj.enterUsername(loginData.enterusername)//read the test data from fixtures folder
    loginObj.enterPassword(loginData.enterpassword)
    loginObj.clickLoginBtn()
    
  });
});