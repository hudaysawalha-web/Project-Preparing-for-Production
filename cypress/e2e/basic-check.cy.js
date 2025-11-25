describe('Basic Functionality Tests', () => {
  it('should load the application successfully', () => {
    cy.visit('http://localhost:1234');
    cy.get('h1').should('contain', 'Study Night');
    cy.get('[data-cy="main-content"]').should('exist');
  });

  it('should have accessible navigation', () => {
    cy.visit('http://localhost:1234');
    cy.get('nav[aria-label="Main Navigation Menu"]').should('exist');
    cy.get('[data-cy="home-link"]').should('have.attr', 'aria-label');
    cy.get('[data-cy="about-link"]').should('have.attr', 'aria-label');
    cy.get('[data-cy="card-set-link"]').should('have.attr', 'aria-label');
  });

  it('should have all required data-cy attributes', () => {
    cy.visit('http://localhost:1234');
    cy.get('[data-cy="header"]').should('exist');
    cy.get('[data-cy="main-content"]').should('exist');
    cy.get('[data-cy="home-link"]').should('exist');
    cy.get('[data-cy="about-link"]').should('exist');
    cy.get('[data-cy="card-set-link"]').should('exist');
  });
});