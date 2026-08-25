class ResumeBuilderScatch{
visitlandingPage(){
    cy.visit('https://stagging.jumprecruiter.us/dashboard')
    cy.wait(2000)
    cy.scrollTo('bottom',{ duration: 6000 })
    cy.scrollTo('top', { duration: 6000 })
    // cy.get('a[href="/resume"]').click({ multiple: true })
    // cy.wait(2000)
    // cy.scrollTo('bottom',{ duration: 6000 })
    // cy.scrollTo('top', { duration: 6000 })
    // cy.get('button.MuiButton-contained').contains('Sign in').click();
    // cy.wait(2000)
    // cy.go('back')
}

clickOnCreateYourResume(){
    cy.contains('button', 'Add New').click()
        cy.contains('subtitle2', 'Create a Brand-New Profile').click()
        cy.contains('button', 'Next').click()
        cy.contains('subtitle2', 'Start from scratch').click()
        cy.contains('button', 'Next').click()
        cy.contains('p', 'Start from scratch').click()
}

clickOnNext(){
    cy.contains('button', 'Next').click()
}

// Basic Info Stepper
enterFirstName(FirstName){
    cy.get('input[placeholder="Type full name"]').type(FirstName)
}
enterLastName(LastName){
    cy.get('input[placeholder="Type last name"]').type(LastName)
}
enterDesignation(Designation){
    cy.get('').type(Designation)
}
enterGender(){
    cy.get('').click()
}
enterNumber(PhoneNumber){
    cy.get('').click()
    cy.get('').type(PhoneNumber)
}
enterStreetAddress(StreetAddress){
    cy.get('').type(StreetAddress)
}
enterPostalAddress(CityStatePostalCode){
    cy.get('').type(CityStatePostalCode)
}
BasicInfoNext(Contiune){
    cy.get('').click()
}

// Other Info Section stepper
OtherInfoNext(nextButton){
    cy.get('').click()
    cy.get('').type(DoB)
    cy.get('').click()
}
// summary  stepper
ClickOnAiButton(){
    cy.get('').type(Summary)
    cy.get('').click()
}
AddAiText(){
    cy.wait(3000)
    cy.get('').click()
    cy.get('').click()
}


// Education Stepper
enterlevelOfEducation(){
    cy.get('').click()
    cy.get('').click()
}
enterFieldOfStudy(FieldOfStudy){
    cy.get().type(FieldOfStudy)
}
enterInstituteName(Institue){
    cy.get().type(Institue)
}
enterCountry(Country){
    cy.get().type(Country)
}
enterCityState(CityState){
    cy.get().type(CityState)
}
enterTimePeriod(){
    cy.get('').type(StartDate)
    cy.get('').type(EndDate)
}
educationNext(){
    cy.get('').click()
}
educationSkip(){
    cy.get('').click()
}


// Work Experience Stepper 
enterJobTitle(JobTitle){
    cy.get('').type(JobTitle)
}
enterCompanyName(CompanyName){
    cy.get('').type(CompanyName)
}
enterCountry(Country){
    cy.get().type(Country)
}
enterCityState(CityState){
    cy.get().type(CityState)
}
enterTimePeriod(){
    cy.get('').type(StartDate)
    cy.get('').type(EndDate)
}
ClickOnAiButton(){
    cy.get('').type(Summary)
    cy.get('').click()
    cy.get('').click()
}
// Skill Stepper
enterskill(Skill){
    cy.get('').type(Skill)
    cy.get('').click()
    cy.get('').click()

}

// Certificate Stepper
enterCertificate(Certificate){
    cy.get('').type(Certificate)
}
enterOrganization(Organization){
    cy.get('').type(Organization)
}
enterTimePeriod(){
    cy.get('').type(StartDate)
    cy.get('').type(EndDate)
}
enterDescription(Description){
    cy.get('').type(Description)
    cy.get('').click()
}

// Links Stepper 
enterTitleLink(LinkTitle){
    cy.get('').click()
    cy.get('').type(LinkTitle)
}
enterlink(Link){
    cy.get('').type(Link)
    cy.get('').click()
}

// Langugae Stepper 

enterLanguage(){
    cy.get('').click()
    cy.get('').click()
}

// Honors & Reward Stepper 

enterIssuingOrganization(Organization){
    cy.get('').type(Organization)
}
enterIssueYear(){
    cy.get('').click()
    cy.get('').click()
    cy.get('').type(Summary)
    cy.get('').click()
}
enterSummary(Summary){
    cy.get('').type(Summary)
    cy.get().click()
    cy.get().click()
}

// WorkAuthorization Stepper
enterCountry(Country){
    cy.get().type(Country)
    cy.get('').click()
    cy.get('').click()
}

/// Achievement Stepper 
enterAchievement(Summary){
    cy.get('').type(Summary)
    cy.get('').click()
    cy.get('').click()
}

// ExecutiveSummary stepper 

enterExecutiveSummary(Summary){
    cy.get('').type(Summary)
    cy.get('').click()
    cy.get('').click()
}

//Extracurriculars Stepper 

enterExtracurriculars(Summary){
    cy.get('').type(Summary)
    cy.get('').click()
    cy.get('').click()
}

// Publication Stepper 

enterPublicationTitle(PublicationTitle){
    cy.get('').type(PublicationTitle)
}
enterPublications(Publication){
    cy.get('').type(Publication)
}
enterIssueDate(IssueDate){
    cy.get('').type(IssueDate)
}
enterAuthor(Author){
    cy.get('').type(Author)
}
enterPublicationURL(URL){
    cy.get('').type(URL)

}
enterPublicationSummary(){
    cy.get('').type(Summary)
    cy.get('').click()
    cy.get('').click()
}

// Project Stepper 
enterProjectName(ProjectName){
    cy.get('').type(ProjectName)
}
enterCompanyName(CompanyName){
    cy.get('').type(CompanyName)
}
enterTimePeriod(){
    cy.get('').type(StartDate)
    cy.get('').type(EndDate)
}
enterURL(URL){
    cy.get('').type(URL)

}
enterProjectSummary(){
    cy.get('').type(Summary)
    cy.get('').click()
    cy.get('').click()
}


// Military Involvement Stepper
selectMilitaryInvolvement(){
    cy.get('').click()
    cy.get('').click()

}
selectSecurityClearnce(){
    cy.get('').click()
    cy.get('').click()
}

// Patent Stepper 
enterPatentTitle(PatentTitle){
    cy.get('').type(PatentTitle)
}
enterPatentNumber(PatentNumber){
    cy.get('').type(PatentNumber)
}
addIventor(PatentInventor){
    cy.get('').type(PatentInventor)
    cy.get('').click()
}

AddPatentStatus(){
    cy.get('').click()
}
enterPatentIssueDate(IssueDate){
    cy.get('').type(IssueDate)
}
enterPatentURL(URL){
    cy.get('').type(URL)

}
enterPatentSummary(){
    cy.get('').type(Summary)
    cy.get('').click()
    cy.get('').click()
}

//

clikGotIT(GotIt){
    cy.get('').click()
    cy.wait(3000)
    cy.scrollTo('bottom',{ duration: 6000 })
    cy.scrollTo('top', { duration: 6000 })
}

clickAddsection(AddSection){
    cy.get('').click()
    cy.wait(3000)
    cy.scrollTo('bottom',{ duration: 6000 })
    cy.go('back')
}
EditResumeName(resumeName){
    cy.get('').click()
    cy.get('').type(resumeName)
    cy.get('').click()
}

chooseResumeTemplate(){
    cy.get('').click()
    cy.get('').click()
    cy.get('').click()
}
downloadResume(){
    cy.get('').click()
    cy.get('').click()
}

finishResume(){
    cy.get('').click()
    cy.get('').click()
    cy.get('').click()
}
// payment Method
SelectCard(){
    cy.get('').click()
}
enetrcardNumber(cardNumber){
    cy.get().type(cardNumber)
}
enterCVV(CvV){
    cy.get('').type(CvV)
}
enterNameOnCard(NameOnCard){
    cy.get('').type(NameOnCard)
}
enterExpirationDate(ExpirationDate){
    cy.get('').type(ExpirationDate)
}

// get resume 
GetResume(GetMyResume){
    cy.get('').click()

}
ClickDashbaord(){
    cy.get('').click()
}






}

export default ResumeBuilderScatch