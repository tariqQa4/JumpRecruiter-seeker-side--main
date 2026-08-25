import 'cypress-file-upload'
import Login from "../../PageObjects/AuthenticationPage/LoginPage";
import ResumeDashboard from '../../PageObjects/ResumeBuilder/ResumeDashboardPage';


describe('ResumeBuilder Dasboard test suite', () => {
    const login = new Login()
    const rdashboard = new ResumeDashboard()
    const filePath = 'C:\Users\tariq\OneDrive\Desktop\Jump Recruiter  Job Seeker\cypress\fixtures\TestResume.pdf-resume.pdf'; 
    beforeEach(() => {
        cy.viewport(2560, 1392);
        cy.visit('https://stagging.jumprecruiter.us/'); 
        cy.wait(2000)
        cy.scrollTo('bottom',{ duration: 6000 })
        cy.scrollTo('top', { duration: 6000 })
        cy.contains('button', 'Sign In').click()
        cy.fixture('ResumeBuilder').then((data)=>{
        // Perform the login
        login.enterEmail(data.Email)
        login.enterPassword(data.Password)

        login.loginButton()

        // Navigate to the Resume Builder landing page after login the account 
        cy.visit('/resume-builder'); // Adjust this URL according to your routing
        })
    });
    it('Dashboard landing page', ()=>{
        cy.fixture('ResumeBuilder').then((data)=>{

        rdashboard.visitDashboardlandingPage()
        rdashboard.viewResumeRemaining()
        rdashboard.uploadResume(filePath)
        rdashboard.clickOnNext()
        })
    })

    it('Review resume', ()=>{
        cy.fixture('ResumeBuilder').then((data)=>{

        rdashboard.enterFirstName(data.FirstName)
        rdashboard.enterLastName(data.LastName)
        rdashboard.BasicInfoNext()
        rdashboard.OtherInfoNext()
        rdashboard.summaryNext()
        rdashboard.ClickOnAiButton()
        rdashboard.AddAiText()
        rdashboard.educationNext()
        rdashboard.educationSkip()
        rdashboard.SkillNext()
        rdashboard.CerificationSkip()
        rdashboard.linksSkip()
        rdashboard.LangugaeSkip()
        rdashboard.AddHonorsRewardSkip()
        rdashboard.WorkAuthorizationSkip()
        rdashboard.extracurricularsNext()
        rdashboard.AchievementSkip()
        rdashboard.executiveSummarySkip()
        rdashboard.publicationsSkip()
        rdashboard.MilitaryInvolvementSkip()
        rdashboard.AddPatentNext()
        rdashboard.clikGotIT()

    it('choose template section ',()=>{
        rdashboard.clickAddsection()
        rdashboard.EditResumeName(data.resumeName)
        rdashboard.chooseResumeTemplate()
        rdashboard.downloadResume()
        rdashboard.finishResume()
        rdashboard.PaymentMethod(data.cardNumber, data.CvV, data.NameOnCard, data.ExpirationDate)
        rdashboard.GetResume()
        rdashboard.ClickDashbaord()
    })
        
      

    }) 



    })

})
export default ResumeDashboard