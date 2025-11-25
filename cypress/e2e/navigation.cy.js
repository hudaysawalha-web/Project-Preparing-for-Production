describe('Navigation Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234');
    cy.get('h1').should('contain', 'Study Night');
  });

  it('should navigate to different pages', () => {
    // Test that clicking navigation changes the main content
    cy.get('[data-cy="card-set-link"]').click();
    cy.get('[data-cy="main-content"]').should('exist');
    
    cy.get('[data-cy="about-link"]').click();
    cy.get('[data-cy="main-content"]').should('exist');
    
    cy.get('[data-cy="home-link"]').click();
    cy.get('[data-cy="main-content"]').should('exist');
  });

  it('should have working navigation buttons', () => {
    cy.get('[data-cy="home-link"]').should('be.visible').and('contain', 'Home');
    cy.get('[data-cy="about-link"]').should('be.visible').and('contain', 'About');
    cy.get('[data-cy="card-set-link"]').should('be.visible').and('contain', 'Card Sets');
  });
});