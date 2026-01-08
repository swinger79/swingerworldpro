describe('Autenticación', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('Debe mostrar el formulario de login', () => {
    cy.get('input[type="email"]').should('be.visible');
    cy.get('input[type="password"]').should('be.visible');
    cy.contains('Iniciar Sesión').should('be.visible');
  });

  it('Debe loguear correctamente', () => {
    cy.get('input[type="email"]').type('test@example.com');
    cy.get('input[type="password"]').type('test123');
    cy.contains('Iniciar Sesión').click();
    cy.url().should('include', '/inicio');
  });

  it('Debe mostrar error con credenciales incorrectas', () => {
    cy.get('input[type="email"]').type('wrong@example.com');
    cy.get('input[type="password"]').type('wrong');
    cy.contains('Iniciar Sesión').click();
    cy.contains('Credenciales incorrectas').should('be.visible');
  });
});
