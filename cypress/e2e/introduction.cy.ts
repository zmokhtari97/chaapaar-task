describe('Landing Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the logo, title, and author information', () => {
    cy.wait(500);
    cy.get('img[src*="logo.png"]').should('be.visible');
    cy.wait(500);
    cy.contains('Angular Task').should('be.visible');

    cy.wait(500);
    cy.contains('Developed by').should('be.visible');
    cy.get('a[href="https://github.com/zmokhtari97"]').should('exist');
    assert.isTrue(true, 'introduction page render completely');
  });

  it.only('should navigate to sign-up page when "Create an account" is clicked', () => {
    cy.contains('button', 'Create an account').click();
    cy.wait(500);
    cy.url().should('include', '/sign-up');
    cy.wait(500);
    assert.isTrue(true, 'navigate correctly');
  });
});
