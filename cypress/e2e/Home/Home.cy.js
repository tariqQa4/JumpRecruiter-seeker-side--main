import 'cypress-file-upload';
import Login from "../../PageObjects/AuthenticationPage/LoginPage";
import HomePage from '../../PageObjects/Home/HomePage';

describe('Home Page test suite', () => {
  const login = new Login();
  const home = new HomePage();
  beforeEach(() => {
  Cypress.on('uncaught:exception', () => {
    return false;
  });
});
  beforeEach(() => {
    cy.viewport(2560, 1392);
    cy.visit('https://stagging.jumprecruiter.us/');
    cy.fixture('Login').then((data) => {
      cy.contains('button', 'Sign In').click();
      login.enterEmail(data.Email);
      login.enterPassword(data.Password);
      login.loginButton();
     cy.get('img[alt="Jump Recruiter Logo"]').click();
      cy.wait(2000);
      
      //cy.get('.dashboard-home', { timeout: 10000 }).should('be.visible');
    });
   
  });

  it('Home page interactions', () => {
    
    home.visitHomePage();
    home.findJobFilter();
    // home.jobCategorySlider();
    // home.recommendedJob();
    // home.topHiringCompanies();
    home.aboutPage();
    home.careerAdvice();
  
  });

  // it("Apply Now from home", () => {
  //   home.applyNow();
  // });

  // it('Subscribe section on home page', () => {
  //   cy.fixture('ResumeBuilder').then((data) => {
  //     home.enterFullName(data.FullName);
  //     home.enterEmail(data.Email);
     
  //   });
  // });

  // it('Jobs by location and Top Hiring Companies', () => {
  //   // home.jobByLocation();
  //   home.topHiringCompanies();
  // });

  // it('About Us page', () => {
  //   home.aboutPage();
  // });

  // it('Notifications in header', () => {
  //   home.notfications();
  // });

  // it('Chat model in header', () => {
  //   home.chatModel();
  // });

  // it('Career Advice Blog Section', () => {
  //   home.careerAdvice();
  //   home.careerAdviceListing();
  // });

  // it('Sign out the account', () => {
  //   home.sigoutAccount();
  // });
});
