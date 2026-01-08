describe('Sistema de Validación P2P', () => {
  it('Accede al sistema de validación', () => {
    cy.visit('/validacion');
    cy.contains('Sistema de Validación').should('be.visible');
    cy.contains('Pendientes').should('be.visible');
  });

  it('Permite aprobar una validación', () => {
    cy.get('[data-testid="approve-button"]').first().click();
    cy.contains('Validación aprobada').should('be.visible');
  });

  it('Muestra historial de validaciones', () => {
    cy.contains('Historial').click();
    cy.get('[data-testid="validation-history"]').should('exist');
  });
});
