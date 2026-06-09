
import Signup from "../../PageObjects/AuthenticationPage/SignUpPage"
describe('Signup As Job Seeker', () => {
  
    beforeEach(() => {
      Cypress.on('uncaught:exception', () => {
        return false;
      });
      cy.viewport(2560, 1392)
      cy.visit('https://qa.jumprecruiter.com/')
      cy.viewport(2560, 1392)
    
  })
 
  
  it('signup with email', ()=>{
    
    cy.fixture('Signupwithemail').then((data)=>{

    const sp = new Signup
    sp.clickAsJobSeeker()
    sp.enterFullName(data.FullName)
    
    sp.createPassword(data.createpassword)
    sp.confirmPassword(data.confirmpassword)
    sp.clickSignupButton()
    sp.FirstStepChoice()
    // sp.verifySignup()
    sp.StepperScratchprofile()
    sp.BasicInformation()
    sp.Summary()
    sp.Education()
    sp.Experience()
    sp.Skills()
    sp.AdditionalInformation()


    })


  })

  //Signup with Google

  // it('signup with Google account', () => {



  // })
  
//signup with Apple iD 

  // it('signup with Apple account', () => {
    
    

  // })

  })

export default Signup