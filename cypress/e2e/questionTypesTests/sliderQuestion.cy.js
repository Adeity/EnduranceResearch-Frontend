/// <reference types="cypress" />

describe('Testing slider question', () => {
    beforeEach(() => {
        cy.visit('/questionnare?q=showcase')
        cy.get('[data-test="next-question-button"]', {timeout: 10000}).should('be.visible');
        cy.get('[data-test="next-question-button"]').as('next-question-btn')
        cy.get('#next-slide-button').click({force: true})
    })

    it('should show slider', () => {
        cy.get('[data-test="slider-input"]').should('exist')
    })

    it('should show slider init state', () => {
        cy.get('[data-test="slider-display-value"]').should('be.disabled')
        cy.get('[data-test="slider-display-value"]').should('have.value', 'Posuvníkem nastavte.')
    })

    it('should show invalid feedback on init state submit', () => {
        cy.get('@next-question-btn').click()
        cy.get('[data-test="slider-input"]').should('have.class', 'is-invalid')
    })

    it('should adjust slider and submit with valid feedback', () => {
        cy.get('[data-test="slider-input"]').type('neco').trigger('input')
        cy.get('@next-question-btn').click()
        cy.get('[data-test="slider-input"]').should('have.class', 'is-valid')
    })

    it('should adjust slider not have placeholder value', () => {
        cy.get('[data-test="slider-input"]').type('neco').trigger('input')
        cy.get('[data-test="slider-display-value"]').should('not.have.value', 'Posuvníkem nastavte.')
    })
})