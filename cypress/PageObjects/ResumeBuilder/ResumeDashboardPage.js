class ResumeDashboard{

    visitDashboardlandingPage(visitDashboardlandingPage){
        cy.visit('')
        cy.wait(2000)
        cy.scrollTo('bottom',{ duration: 6000 })
        cy.scrollTo('top', { duration: 6000 })
    }

    viewResumeRemaining(resumeremaining){
        cy.get('').click()
    }
  
    PremiumResume(JrPremimumResume){

        cy.get('').click()
        cy.get('').click()

    }

    uploadResume(filePath) {
        cy.get('').attachFile(filePath)
    }

    verifyResumeUpload() {
        cy.get('').should('contain', 'TestResume.pdf');  // Replace with appropriate selector and file name
    }

    clickOnNext(nextButton){
        cy.wait(3000)
        cy.get('')
    }
    enterFirstName(FirstName){
        cy.get('').type(FirstName)
    }

    enterLastName(LastName){
        cy.get('').type(LastName)
    }

    
    BasicInfoNext(){
        cy.get('').click()
    }

    OtherInfoNext(){
        cy.get('').click()
    }

    ClickOnAiButton(){
        cy.get('').click()
    }

    AddAiText(){
        cy.wait(3000)
        cy.get('').click()
    }

    summaryNext(){
        cy.get('').click()
    }

    educationNext(){
        cy.get('').click()
    }

    educationSkip(){
        cy.get('').click()
    }

    experienceNext(){
        cy.get('').click()
    }

    SkillNext(){
        cy.get('').click()
    }

    CerificationSkip(){
        cy.get('').click()
    }

    linksSkip(){
        cy.get('').click()
    }

    LangugaeSkip(){
        cy.get('').click()
    }

    AddHonorsRewardSkip(){
        cy.get('').click()
    }

    WorkAuthorizationSkip(){
        cy.get('').click()
    }

    AchievementSkip(){
        cy.get('').click()
    }
    
    executiveSummarySkip(){
        cy.get('').click()
    }

    extracurricularsNext(){
        cy.get('').click()
    }

    publicationsSkip(){
        cy.get('').click()
    }

    ProjectsSkip(){
        cy.get('').click()
    }

    MilitaryInvolvementSkip(){
        cy.get('').click()
    }

    AddPatentNext(){
        cy.get('').click()
    }
    clikGotIT(){
        cy.get('').click()
        cy.wait(3000)
        cy.scrollTo('bottom',{ duration: 6000 })
        cy.scrollTo('top', { duration: 6000 })
    }

    clickAddsection(){
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

    PaymentMethod(){
        cy.get('').click()
        cy.get('').type()
        cy.get('').type()
        cy.get('').type()
        cy.get('').type()
        cy.get('').click()
        cy.get('').click()
    }

    GetResume(){
        cy.get('').click()

    }
    ClickDashbaord(){
        cy.get('').click()
    }



















}
export default ResumeDashboard