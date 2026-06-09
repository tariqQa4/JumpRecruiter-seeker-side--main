import 'cypress-file-upload'
import Login from "../../PageObjects/AuthenticationPage/LoginPage";
import ResumeBuilderScatch from '../../PageObjects/ResumeBuilder/ResumeBuilderPageScratch';

describe('ResumeBuilderscratch test suite', () => {
    const login = new Login()
    const resume = new ResumeBuilderScatch()
    const filePath = 'C:\Users\tariq\OneDrive\Desktop\Jump Recruiter  Job Seeker\cypress\fixtures\TestResume.pdf-resume.pdf'; 
     beforeEach(() => {
        cy.viewport(2560, 1392);
        cy.visit('http://10.10.40.23/'); 
   
        cy.wait(2000)
        cy.scrollTo('bottom',{ duration: 6000 })
        cy.scrollTo('top', { duration: 6000 })
        cy.contains('button', 'Sign In').click()

        cy.fixture('Login').then((data)=>{
        
       //Perform the login
        login.enterEmail(data.Email)
        login.enterPassword(data.Password)

        login.loginButton()
        cy.contains('button', 'Add New').click()
        cy.contains('subtitle2', 'Create a Brand-New Profile').click()
        cy.contains('button', 'Next').click()
        cy.contains('subtitle2', 'Start from scratch').click()
        cy.contains('button', 'Next').click()
        cy.contains('p', 'Start from scratch').click()
        cy.contains('button', 'Next').click()  
        //Navigate to the Resume Builder landing page after login
        // cy.visit('/resume-builder'); // Adjust this URL according to your routing
        })
    });
    // it('Resume from scratch', () => {
    //     resume.visitlandingPage(); // Method to visit landing page
    //     resume.clickOnCreateYourResume(); // Method to start creating a resume
    //     //resume.clickOnNext()

    // })

    it('Create Resume From stepper of Basic info', () =>{
        cy.fixture('ResumeBuilder').then((data)=>{

        resume.enterFirstName(data.FirstName)
        resume.enterLastName(data.LastName)
        resume.enterDesignation(data.Designation)
        resume.enterGender()
        resume.enterNumber(data.PhoneNumber)
        resume.enterStreetAddress(data.StreetAddress)
        resume.enterCityState(data.CityStatePostalCode)
        })
    })
    it('Other Info summary Stepper', () =>{
        cy.fixture('ResumeBuilder').then((data)=>{
        resume.OtherInfoNext(data.DoB)
        })
    })

    it('Summary Stepper ', () =>{
        cy.fixture('ResumeBuilder').then((data)=>{
        resume.enterSummary(data.Summary)
    })
    })
    
    it('Education Stepper ', () =>{
        cy.fixture('ResumeBuilder').then((data)=>{
        resume.enterlevelOfEducation()
        resume.enterFieldOfStudy(data.FieldOfStudy)
        resume.enterInstituteName(data.Institue)
        resume.enterCountry(data.Country)
        resume.enterCityState(data.CityState)
        resume.enterTimePeriod(data.startDate)
        resume.enterTimePeriod(data.EndDate)
        })
    })

    
    it('Work Experience Stepper ', () =>{
        cy.fixture('ResumeBuilder').then((data)=>{
       resume.enterJobTitle(data.JobTitle)
       resume.enterCompanyName(data.CompanyName)
       resume.enterCityState(data.CityState)
       resume.enterTimePeriod(data.startDate)
       resume.enterTimePeriod(data.EndDate)
       resume.enterSummary(data.Summary)
        })
    })

    it('Skills Stepper ', () =>{
        cy.fixture('ResumeBuilder').then((data)=>{
        resume.enterskill(data.Skill)
        })
    })

    it('Certification Stepper ', () =>{
        cy.fixture('ResumeBuilder').then((data)=>{
       resume.enterCertificate(data.Certificate)
       resume.enterOrganization(data.Organization)
       resume.enterTimePeriod(data.startDate)
       resume.enterTimePeriod(data.EndDate)
       resume.enterDescription(data.Description)
        })
        
    })

    it('Links Stepper ', () =>{
        cy.fixture('ResumeBuilder').then((data)=>{
        resume.enterTitleLink(data.LinkTitle)
        resume.enterlink(data.Link)
        })
    })

    it('lanaguage Stepper ', () =>{
        resume.enterLanguage()
        
    })

    it('Honors & Reward Stepper ', () =>{
        cy.fixture('ResumeBuilder').then((data)=>{
        resume.enterCertificate(data.Certificate)
        resume.Organization(data.Organization)
        resume.enterIssueYear()
        resume.enterSummary(data.Summary)
        })
    })

    it('WorkAuthorization Stepper ', () =>{
        cy.fixture('ResumeBuilder').then((data)=>{
       resume.enterCountry(data.Country)
        })
    })


    it('Acheivement Stepper ', () =>{
        cy.fixture('ResumeBuilder').then((data)=>{
        resume.enterAchievement(data.Summary)
        })
    })

    it('ExecutiveSummary Stepper ', () =>{
        cy.fixture('ResumeBuilder').then((data)=>{
        resume.enterExecutiveSummary(data.Summary)
        })
    })

    it('Extracurriculars Summary Stepper ', () =>{
        cy.fixture('ResumeBuilder').then((data)=>{
        resume.enterExtracurriculars(data.Summary)
        })
    })

    it('Publications Stepper ', () =>{
        cy.fixture('ResumeBuilder').then((data)=>{
       resume.enterPublicationTitle(data.PublicationTitle)
       resume.enterPublications(data.Publication)
       resume.enterIssueDate(data.IssueDate)
       resume.enterAuthor(data.Author)
       resume.enterPublicationURL(data.UrL)
       resume.enterPublicationSummary(data.Summary)
        })
    })

    it('Projects Stepper ', () =>{
        cy.fixture('ResumeBuilder').then((data)=>{
        resume.enterProjectName(data.ProjectName)
        resume.enterTimePeriod(data.startDate)
        resume.enterTimePeriod(data.EndDate)
        resume.enterURL(data.UrL)
        resume.enterProjectSummary(data.Summary)
        })
    })

    it('Military Involvement Stepper ', () =>{
        resume.selectMilitaryInvolvement()
        resume.selectSecurityClearnce()
        
    })


    it('Patent  Stepper ', () =>{
        cy.fixture('ResumeBuilder').then((data)=>{
        resume.enterPatentTitle(data.PatentTitle)
        resume.enterPatentNumber(data.PatentNumber)
        resume.addIventor(data.PatentInventor)
        resume.AddPatentStatus()
        resume.enterIssueDate()
        resume.enterPatentURL(data.UrL)
        resume.enterPatentSummary(data.Summary)
        resume.clikGotIT()
        resume.clickAddsection()
        resume.EditResumeName(data.resumeName)
        resume.chooseResumeTemplate()
        resume.downloadResume()
        resume.finishResume()
        
        })
    })
    
    it('Payment Method ', () =>{
        cy.fixture('ResumeBuilder').then((data)=>{
        resume.enetrcardNumber(data.cardNumber)
        resume.enterCVV(data.CvV)
        resume.enterNameOnCard(data.NameOnCard)
        resume.enterExpirationDate(data.ExpirationDate)
        resume.GetResume()
        resume.ClickDashbaord()
        })
    })
    // resume.PaymentMethod(data.cardNumber, data.CvV, data.NameOnCard, data.ExpirationDate )
    

    
});

// export default ResumeBuilderScatch