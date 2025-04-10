declare namespace Cypress {
  interface Chainable {
    fillSignUpForm(data: {
      identifier: string;
      username: string;
      firstName: string;
      lastName: string;
      displayName: string;
      password: string;
      confirmPassword: string;
    }): Chainable<void>;
  }
}

function fillSignUpForm(data: {
  identifier: string;
  username: string;
  firstName: string;
  lastName: string;
  displayName: string;
  password: string;
  confirmPassword: string;
}): void {
  cy.get('#identifier').type(data.identifier);
  cy.get('#username').type(data.username);
  cy.get('#first_name').type(data.firstName);
  cy.get('#last_name').type(data.lastName);
  cy.get('#display_name').type(data.displayName);
  cy.get('#newPassword').type(data.password);
  cy.get('#confirmPassword').type(data.confirmPassword);
}

Cypress.Commands.add('fillSignUpForm', fillSignUpForm);
