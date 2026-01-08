describe('Sistema de Eventos', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.contains('Eventos').click();
  });

  it('Muestra la lista de eventos', () => {
    cy.get('[data-testid="event-card"]').should('have.length.at.least', 1);
    cy.contains('Fiesta VIP').should('be.visible');
  });

  it('Permite confirmar asistencia a un evento', () => {
    cy.get('[data-testid="rsvp-button"]').first().click();
    cy.contains('Confirmado', { timeout: 5000 }).should('be.visible');
  });

  it('Muestra detalles del evento', () => {
    cy.get('[data-testid="event-details-button"]').first().click();
    cy.contains('Capacidad').should('be.visible');
    cy.contains('Requisitos').should('be.visible');
  });
});
