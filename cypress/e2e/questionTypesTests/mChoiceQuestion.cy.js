/// <reference types="cypress" />

describe('Testing slider question', () => {
    beforeEach(() => {
        cy.visit('/questionnare?q=showcase')
        cy.get('[data-test="next-question-button"]', {timeout: 10000}).should('be.visible');
        cy.get('[data-test="next-question-button"]').as('next-question-btn')
        cy.get('#next-slide-button').click({force: true})
        cy.get('#next-slide-button').click({force: true})
    })

    it('should show next multiple choice', () => {
        cy.get('[data-test="choices"]').should('exist')
    })

    it('should click next question and show invalid feeedback', () => {
        cy.get('@next-question-btn').click()
        cy.get('div.form-check input').each(($val) => {
            cy.wrap($val).should('have.class', 'is-invalid')
        })
    })

    it('should check one, click next and show valid feedback', () => {
        cy.get('div.form-check input').first().click()
        cy.get('@next-question-btn').click()
        cy.get('div.form-check input').each(($val) => {
            cy.wrap($val).should('have.class', 'is-valid')
        })
    })
})