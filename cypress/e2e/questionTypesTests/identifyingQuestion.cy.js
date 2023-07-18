/// <reference types="cypress" />

describe('Testing identifying question', () => {
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.visit('/questionnare?q=showcase')
        cy.get('[data-test="next-question-button"]', {timeout: 10000}).should('be.visible');
        cy.get('[data-test="next-question-button"]').as('next-question-btn')
    })

    it('should render a form with identifying part', () => {
        cy.get('[data-test="questionnare-info"]').should('contain.text', 'Identifikační část')
    })


    it('should not have anything checked', () => {
        cy.get('#identifyingHasResearchNumberYes').should('not.be.checked')
        cy.get('#identifyingHasResearchNumberNo').should('not.be.checked')
    })

    it('should check yes and no should not be checked', () => {
        cy.get('#identifyingHasResearchNumberYes').check()
        cy.get('#identifyingHasResearchNumberYes').should('be.checked')
        cy.get('#identifyingHasResearchNumberNo').should('not.be.checked')
    })

    it('should not have existing invalid feedback', () => {
        cy.get('[data-test="invalid-feedback-text"]').should('not.be.visible')
    })

    describe('Testing research number input', () => {
        beforeEach(() => {
            cy.get('#identifyingHasResearchNumberYes').check()
        })

        it('should give invalid feedback on emtpy submit', () => {
            cy.get('@next-question-btn').click()
            cy.get('[data-test="twochoice-text"]').should('have.class', 'is-invalid')
        })

        it('should give invalid feedback on invalid "invalid-research-number" research number input', () => {
            cy.get('[data-test="twochoice-text"]').type("invalid-researhc-number")
            cy.get('@next-question-btn').click()
            cy.get('[data-test="twochoice-text"]').should('have.class', 'is-invalid')
        })

        it('should not give invalid feedback on valid "VAL_ID1" research number input', () => {
            cy.get('[data-test="twochoice-text"]').type("VAL_ID1")
            cy.get('@next-question-btn').click()
            cy.get('[data-test="twochoice-text"]').should('have.class', 'is-valid')
        })
    })

    describe('Testing alternative identifier input', () => {
        beforeEach(() => {
            cy.get('#identifyingHasResearchNumberNo').check()
        })

        it('should give invalid feedback on empty input submit', () => {
            cy.get('@next-question-btn').click()
            cy.get('[data-test="twochoice-text"]').should('have.class', 'is-invalid')
        })

        it('should give valid feedback on "prezdivka" input submit', () => {
            cy.get('[data-test="twochoice-text"]').type("ahoj")
            cy.get('@next-question-btn').click()
            cy.get('[data-test="twochoice-text"]').should('have.class', 'is-valid')
        })
    })

})
