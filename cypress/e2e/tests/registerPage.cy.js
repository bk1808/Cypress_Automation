import {registerPOM} from "../../PagesPOM/registerPOM";
import registerData from "../../fixtures/registerData";

const registration = new registerPOM();

describe('Complete Registration', () => {
  it('Register to Naveen Automation Labs', () => {
    
    registration.openURL()
    registration.enterFirstName(registerData.firstname)
    registration.enterLastName(registerData.lastname)
    registration.enterEmail(registerData.email)
    registration.enterTelephone(registerData.telephone)
    registration.enterPassword(registerData.password)
    registration.enterConfirmPWD(registerData.confirmpassword)
    registration.checkNewsleteer()
    registration.privacyPolicy()
    registration.continueBtn()

  });
});