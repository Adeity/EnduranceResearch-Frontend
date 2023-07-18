/// <reference types="cypress" />

describe('Testing slider question', () => {
    beforeEach(() => {
        cy.visit('/questionnare?q=showcase')
        cy.get('[data-test="next-question-button"]', {timeout: 10000}).should('be.visible');
        cy.get('[data-test="next-question-button"]').as('next-question-btn')
        cy.get('#next-slide-button').click({force: true})
        cy.get('#next-slide-button').click({force: true})
        cy.get('#next-slide-button').click({force: true})
        cy.get('#next-slide-button').click({force: true})
    })

    it('should show minutes input', () => {
        cy.get('[data-test="minutes-input"]').should('exist')
    })

    it('should give invalid feedback on empty input', () => {
        cy.get('@next-question-btn').click()
        cy.get('[data-test="minutes-input"]').should('have.class', 'is-invalid')
    })

    it('should give invalid feedback on invalid "e" input', () => {
        cy.get('[data-test="minutes-input"]').type('e')
        cy.get('@next-question-btn').click()
        cy.get('[data-test="minutes-input"]').should('have.class', 'is-invalid')
    })

    it('should give invalid feedback on invalid "-1" input', () => {
        cy.get('[data-test="minutes-input"]').type('-1')
        cy.get('@next-question-btn').click()
        cy.get('[data-test="minutes-input"]').should('have.class', 'is-invalid')
    })

    it('should give valid feedback on valid 5 input', () => {
        cy.get('[data-test="minutes-input"]').type('5')
        cy.get('@next-question-btn').click()
        cy.get('[data-test="minutes-input"]').should('have.class', 'is-valid')
    })
})