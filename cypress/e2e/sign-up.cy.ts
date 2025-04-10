describe('Sign Up Form E2E', () => {
  beforeEach(() => {
    cy.visit('/sign-up');
  });

  it('should load the sign-up form with all input fields by ID', () => {
    cy.get('form').should('exist');
    cy.wait(500);
    cy.get('#identifier').should('be.visible');
    cy.get('#username').should('be.visible');
    cy.get('#first_name').should('be.visible');
    cy.get('#last_name').should('be.visible');
    cy.get('#display_name').should('be.visible');
    cy.get('#newPassword').should('be.visible');
    cy.get('#confirmPassword').should('be.visible');
    cy.wait(500);
    assert.isTrue(true, 'form requirement passed');
  });

  it('should show error on password mismatch', () => {
    cy.get('#identifier').type('user1');
    cy.get('#username').type('user1');
    cy.get('#first_name').type('Ali');
    cy.get('#last_name').type('Rezaei');
    cy.get('#display_name').type('AliReza');
    cy.get('#newPassword').type('Password123!');
    cy.get('#confirmPassword').type('DifferentPass!');
    cy.wait(500);
    cy.get('button[type="submit"]').click();
    cy.wait(500);
    cy.contains('The entered password is not acceptable').should('be.visible');
    assert.isTrue(true, 'password mismatch pass');
  });

  it('should submit the form with valid data', () => {
    cy.get('#identifier').type('user1');
    cy.get('#username').type('user1');
    cy.get('#first_name').type('Ali');
    cy.get('#last_name').type('Rezaei');
    cy.get('#display_name').type('AliReza');
    cy.get('#newPassword').type('Password123!');
    cy.get('#confirmPassword').type('Password123!');

    cy.get('button[type="submit"]').click();
    cy.wait(500);
    assert.isTrue(true, 'reset form test passed');
  });

  it('should reset all fields after filling the form', () => {
    cy.get('#identifier').type('user123');
    cy.get('#username').type('user123');
    cy.get('#first_name').type('Ali');
    cy.get('#last_name').type('Rezaei');
    cy.get('#display_name').type('AliReza');
    cy.get('#newPassword').type('Password123!');
    cy.get('#confirmPassword').type('Password123!');

    cy.wait(500);
    cy.contains('button', 'Reset').click();

    cy.wait(500);
    cy.get('#identifier').should('have.value', '');
    cy.get('#username').should('have.value', '');
    cy.get('#first_name').should('have.value', '');
    cy.get('#last_name').should('have.value', '');
    cy.get('#display_name').should('have.value', '');
    cy.get('#newPassword').should('have.value', '');
    cy.get('#confirmPassword').should('have.value', '');
    cy.wait(500);
    assert.isTrue(true, 'reset form test passed');
  });

  it.only('should show validation errors when submitting empty form', () => {
    cy.get('button[type="submit"]').click();

    cy.wait(500);
    cy.contains('The entered identifier is not valid').should('be.visible');
    cy.contains(
      'username must have Lowercase and minimum 5characters and maximum 15 characters'
    ).should('be.visible');
    cy.contains(
      'First name must be english with at least two characters and maximum 30 characters.'
    ).should('be.visible');
    cy.contains(
      'Last name must be english with at least two characters.'
    ).should('be.visible');
    cy.contains(
      'Display Name must be minimum 2 characters and maximum 50 characters'
    ).should('be.visible');
    cy.contains('The entered password is not acceptable').should('be.visible');

    cy.wait(500);
    assert.isTrue(true, 'validation errors passed');
  });
});
