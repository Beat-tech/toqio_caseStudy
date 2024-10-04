import 'cypress-axe';

describe('Toqio Homepage Accessibility Tests', () => {
  beforeEach(() => {
      // Navigate to the homepage before each test
      cy.visit('https://toqio.co/')

      // Dismiss the cookie banner by clicking the accept button 
      cy.get('#hs-eu-confirmation-button').click();
  });

  it('TC002 - Run accessibility audit on homepage', () => {
      // Use Cypress-axe for accessibility testing
      cy.injectAxe();
      cy.checkA11y();

      //This test fails beceuse 6 accessibility violations were detected: expected 6 to equal 0
      //This detects accessibility bugs
  });
});
