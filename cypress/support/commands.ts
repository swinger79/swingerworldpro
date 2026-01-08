/// <reference types="cypress" />

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>
      logout(): Chainable<void>
      createEvent(eventData: any): Chainable<void>
      addToFavorites(profileId: string): Chainable<void>
    }
  }
}

Cypress.Commands.add('login', (email, password) => {
  cy.visit('/login')
  cy.get('[data-testid="email-input"]').type(email)
  cy.get('[data-testid="password-input"]').type(password)
  cy.get('[data-testid="login-button"]').click()
})

Cypress.Commands.add('logout', () => {
  cy.get('[data-testid="user-menu"]').click()
  cy.get('[data-testid="logout-button"]').click()
})

Cypress.Commands.add('createEvent', (eventData) => {
  cy.visit('/eventos')
  cy.get('[data-testid="create-event-button"]').click()
  cy.get('[data-testid="event-title"]').type(eventData.title)
  cy.get('[data-testid="event-description"]').type(eventData.description)
  cy.get('[data-testid="event-date"]').type(eventData.date)
  cy.get('[data-testid="submit-event"]').click()
})

Cypress.Commands.add('addToFavorites', (profileId) => {
  cy.get(`[data-testid="profile-${profileId}"]`).within(() => {
    cy.get('[data-testid="favorite-button"]').click()
  })
})
