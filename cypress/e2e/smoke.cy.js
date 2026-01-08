describe('Smoke Tests - Swinger World', () => {
  beforeEach(() => {
    // Visitar la app local o de producción
    const baseUrl = Cypress.env('BASE_URL') || 'http://localhost:3000';
    cy.visit(baseUrl);
  });

  it('1. La aplicación carga correctamente', () => {
    cy.get('body').should('be.visible');
    cy.contains('Swinger World', { timeout: 10000 }).should('be.visible');
  });

  it('2. El menú de navegación funciona', () => {
    cy.get('nav').should('be.visible');
    cy.contains('Inicio').should('be.visible');
    cy.contains('Eventos').should('be.visible');
    cy.contains('Premium').should('be.visible');
  });

  it('3. La página de inicio muestra perfiles', () => {
    // Verificar que hay tarjetas de perfil
    cy.get('[data-testid="profile-card"]', { timeout: 10000 }).should('have.length.at.least', 1);
  });

  it('4. Los botones de interacción funcionan', () => {
    // Botón de like/favorito
    cy.get('[data-testid="like-button"]').first().click();
    cy.get('.toast').should('contain', 'añadido'); // Verificar notificación
  });
});
