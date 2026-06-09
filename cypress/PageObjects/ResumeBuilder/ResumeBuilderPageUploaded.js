class ResumeBulderUploaded{

    visitlandingPage(visitlandingPage){
        cy.visit('')
        cy.wait(2000)
        cy.scrollTo('bottom',{ duration: 6000 })
        cy.scrollTo('top', { duration: 6000 })
    }
  
    clickOnCreateYourResume(clickOnCreateYourResume){
        cy.get('')
    }
    ClickOnUpload(){
        cy.get('').click()

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

    
    BasicInfoNext(nextButton){
        cy.get('').click()
    }

    OtherInfoNext(nextButton){
        cy.get('').click()
    }

    ClickOnAiButton(PerfectingWithAi){
        cy.get('').click()
    }

    AddAiText(){
        cy.wait(3000)
        cy.get('').click()
    }

    summaryNext(nextButton){
        cy.get('').click()
    }

    educationNext(nextButton){
        cy.get('').click()
    }

    educationSkip(SkipButton){
        cy.get('').click()
    }

    experienceNext(nextButton){
        cy.get('').click()
    }

    SkillNext(nextButton){
        cy.get('').click()
    }

    CerificationSkip(SkipButton){
        cy.get('').click()
    }

    linksSkip(SkipButton){
        cy.get('').click()
    }

    LangugaeSkip(SkipButton){
        cy.get('').click()
    }

    AddHonorsRewardSkip(SkipButton){
        cy.get('').click()
    }

    WorkAuthorizationSkip(SkipButton){
        cy.get('').click()
    }

    AchievementSkip(SkipButton){
        cy.get('').click()
    }
    
    executiveSummarySkip(SkipButton){
        cy.get('').click()
    }

    extracurricularsNext(nextButton){
        cy.get('').click()
    }

    publicationsSkip(SkipButton){
        cy.get('').click()
    }

    ProjectsSkip(SkipButton){
        cy.get('').click()
    }

    MilitaryInvolvementSkip(SkipButton){
        cy.get('').click()
    }

    AddPatentNext(NextButton){
        cy.get('').click()
    }
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

    chooseResumeTemplate(resumeTemplate){
        cy.get('').click()
        cy.get('').click()
        cy.get('').click()
    }
    downloadResume(resumeDownload){
        cy.get('').click()
        cy.get('').click()
    }

    finishResume(){
        cy.get('').click()
        cy.get('').click()
        cy.get('').click()
    }

    PaymentMethod(AddPaymentMethod){
        cy.get('').click()
        cy.get('').type()
        cy.get('').type()
        cy.get('').type()
        cy.get('').type()
        cy.get('').click()
        cy.get('').click()
    }

    GetResume(GetMyResume){
        cy.get('').click()

    }
    ClickDashbaord(){
        cy.get('').click()
    }







}

export default ResumeBulderUploaded