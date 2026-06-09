import 'cypress-file-upload'
import Login from "../../PageObjects/AuthenticationPage/LoginPage";
import ResumeBulderUploaded from "../../PageObjects/ResumeBuilder/ResumeBuilderPageUploaded"

describe('ResumeBuilder uploaded test suite', () => {
    const login = new Login()
    const resume = new ResumeBulderUploaded()
    const filePath = 'C:\Users\tariq\OneDrive\Desktop\Jump Recruiter  Job Seeker\cypress\fixtures\TestResume.pdf-resume.pdf'; 
    beforeEach(() => {
        cy.viewport(2560, 1392);
        cy.visit('www.google.com'); 
        
        cy.fixture('ResumeBuilder').then((data)=>{
        // Perform the login
        login.enterEmail(data.Email)
        login.enterPassword(data.Password)

        login.loginButton()

        // Navigate to the Resume Builder landing page after login
        cy.visit('/resume-builder'); // Adjust this URL according to your routing
        })
    });

    it('Resume from Uploaded', () => {
        cy.fixture('ResumeBuilder').then((data)=>{
        resume.visitlandingPage()
        resume.clickOnCreateYourResume()
        resume.uploadResume(filePath)
        resume.verifyResumeUpload()
        resume.clickOnNext()

    it(' Review Resume',()=>{

        resume.enterFirstName(data.FirstName)
        resume.enterLastName(data.LastName)
        resume.BasicInfoNext()
        resume.OtherInfoNext()
        resume.summaryNext()
        resume.ClickOnAiButton()
        resume.AddAiText()
        resume.educationNext()
        resume.educationSkip()
        resume.SkillNext()
        resume.CerificationSkip()
        resume.linksSkip()
        resume.LangugaeSkip()
        resume.AddHonorsRewardSkip()
        resume.WorkAuthorizationSkip()
        resume.extracurricularsNext()
        resume.AchievementSkip()
        resume.executiveSummarySkip()
        resume.publicationsSkip()
        resume.ProjectsSkip()
        resume.MilitaryInvolvementSkip()
        resume.AddPatentNext()
        resume.clikGotIT()

    })
    it('Resume template and downlod  ',()=>{

        resume.clickAddsection()
        resume.EditResumeName(data.resumeName)
        resume.chooseResumeTemplate()
        resume.downloadResume()
        resume.finishResume()
        resume.PaymentMethod(data.cardNumber, data.CvV, data.NameOnCard, data.ExpirationDate )
        resume.GetResume()
        resume.ClickDashbaord()

    })
       




    })
})
})
export default ResumeBulderUploaded