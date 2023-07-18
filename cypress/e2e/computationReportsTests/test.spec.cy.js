/// <reference types="cypress" />

describe('Computations and reports page', () => {
    
    beforeEach(() => {

        cy.intercept('GET', 'device/all', [])

        cy.clearAllSessionStorage()
        cy.reload()

        cy.visit('/admin')
        cy.url().should('include', '/admin/login')

        cy.get('#loginUsername').type("mock username")
        cy.get('#loginPassword').type("mock password")

        cy.fixture('test-login').as('test-login').then( (testLogin) => {
            cy.intercept('POST', '/j_spring_security_check', testLogin).as("login")
        })

        cy.get('body > main > form > button').click()

        cy.fixture('computationReportsFixtures/exampleGlobalChronoValues.json').as('globalChronoValues').then( (globalChronoValues) => {
            cy.intercept('GET', 'comps/global-chrono', globalChronoValues).as('getGlobalChrono')
        })

        cy.fixture('computationReportsFixtures/exampleRespondentData.json').as('respData').then( (userData) => {
            cy.intercept('POST','comps/sleep-respondent-data-pageable', userData).as('getRespData')
        })

        cy.fixture('computationReportsFixtures/exampleMethods.json').as('methods').then( (methods) => {
            cy.intercept('GET','comps/get-methods', methods).as('getMethods')
        })

        cy.get('body > header > ul > li:nth-child(3) > a').click()
        cy.wait('@getRespData')
    })

    it('should disable filter panel when displaying a computation detail', () => {

        cy.get("body > main > div > form > div:nth-child(1) > input").should('be.enabled')
        cy.get("body > main > div > form > div:nth-child(2) > select").should('be.enabled')
        cy.get("body > main > div > form > button:nth-child(3)").should('be.enabled')

        cy.get("body > main > div > div > div:nth-child(2) > div:nth-child(2) > div.col > div > div > h2 > button").click()
        cy.wait(1000)
        cy.get("body > main > div > div > div:nth-child(2) > div:nth-child(2) > div.col > div > div > div > div > div:nth-child(5)").click()

        cy.get("body > main > div > form > div:nth-child(1) > input").should('be.disabled')
        cy.get("body > main > div > form > div:nth-child(2) > select").should('be.disabled')
        cy.get("body > main > div > form > button:nth-child(3)").should('be.disabled')
    })

    it('should display success toast on computation text udpate', () => {

        cy.fixture('computationReportsFixtures/exampleRespondentData.json').as('respData').then( (userData) => {
            cy.intercept('POST','comps/update-form-computation', userData).as('getRespData')
        })

        cy.get("body > main > div > div > div:nth-child(2) > div:nth-child(2) > div.col > div > div > h2 > button").click()
        cy.wait(1000)
        cy.get("body > main > div > div > div:nth-child(2) > div:nth-child(2) > div.col > div > div > div > div > div:nth-child(5)").click()

        cy.get("body > main > div > form:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div > input:nth-child(8)").type("test value")
        cy.get("body > main > div > form:nth-child(4) > div:nth-child(3) > div.col > button").click()

        cy.wait('@getRespData').then( () => {
            cy.get('body > main > div > div.fade.toast.toast.show').should('be.visible').should('have.class', 'bg-success')
        })
    })

    it('should redirect to the newest computation recalculation of the same person when global chrono values are changed and saved', () => {

        cy.fixture('computationReportsFixtures/exampleRespondentData.json').as('respData').then( (userData) => {
            cy.intercept('POST','comps/update-global-data', userData).as('getRespData')
        })

        cy.get("body > main > div > div > div:nth-child(2) > div:nth-child(2) > div.col > div > div > h2 > button").click()
        cy.wait(1000)
        cy.get("body > main > div > div > div:nth-child(2) > div:nth-child(2) > div.col > div > div > div > div > div:nth-child(5)").click()

        cy.get('body > main > div > div > div > div > h2 > button').click()
        cy.wait(1000)
        cy.get("body > main > div > div > div > div > div > div > div > div:nth-child(2) > div:nth-child(5) > div > input:nth-child(2)").clear().type("00:31")
        cy.get('body > main > div > div > div > div > div > div > div > button').click()
        
        cy.wait('@getRespData').then(() => {
            cy.wait(200)
            cy.get('body > main > div > div.fade.toast.toast.show').should('be.visible').should('have.class', 'bg-success')
            cy.get('body > main > div > form:nth-child(4) > div:nth-child(1) > div:nth-child(2) > h2').should('have.text', 'res_100 - Dotazníky 1 (3)')
        })
    })

    it('should export selected respondents for export to excel when respondents are selected', () => {

        cy.get('body > main > div > div > div:nth-child(2) > div:nth-child(1) > div.col-md-auto > div > input').click()
        cy.get('body > main > div > div > div:nth-child(2) > div:nth-child(3) > div.col-md-auto > div > input').click()
        cy.get('body > main > div > div > div:nth-child(2) > div:nth-child(5) > div.col-md-auto > div > input').click()

        cy.intercept('POST','comps/export-to-xls', undefined).as('exportToXls')

        cy.get('body > main > div > div > div.footer-row.row > div.col > button').click()

        cy.wait('@exportToXls').then( (interception) => {

            cy.wrap(interception.request.body)
            .should('have.length', 3)
            .and('deep.equal', ['875_dq5', 'res_101', '9D5_367'])
        })
    })

});