/// <reference types="cypress" />

describe('Testing slider question', () => {
    beforeEach(() => {
        cy.visit('/questionnare?q=showcase')
        cy.get('[data-test="next-question-button"]', {timeout: 10000}).should('be.visible');
        cy.get('[data-test="next-question-button"]').as('next-question-btn')
        cy.get('#next-slide-button').click({force: true})
        cy.get('#next-slide-button').click({force: true})
        cy.get('#next-slide-button').click({force: true})
    })

    it('should show hhmm input', () => {
        cy.get('[data-test="hhmm-input"]').should('exist')
    })

    it('should give invalid feedback on empty input', () => {
        cy.get('@next-question-btn').click()
        cy.get('[data-test="hhmm-input"]').should('have.class', 'is-invalid')
    })

    it('should give invalid feedback on invalid "ahoj" input', () => {
        cy.get('[data-test="hhmm-input"]').type('ahoj')
        cy.get('@next-question-btn').click()
        cy.get('[data-test="hhmm-input"]').should('have.class', 'is-invalid')
    })

    it('should give invalid feedback on invalid "32:20" input', () => {
        cy.get('[data-test="hhmm-input"]').type('ahoj')
        cy.get('@next-question-btn').click()
        cy.get('[data-test="hhmm-input"]').should('have.class', 'is-invalid')
    })

    it('should give valid feedback on valid 22:22 input', () => {
        cy.get('[data-test="hhmm-input"]').type('22:22')
        cy.get('@next-question-btn').click()
        cy.get('[data-test="hhmm-input"]').should('have.class', 'is-valid')
    })
})