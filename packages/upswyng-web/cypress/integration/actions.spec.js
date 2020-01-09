Cypress.Screenshot.defaults({
  screenshotOnRunFailure: false,
});

describe("upswyng web app E2E", () => {
  beforeEach(() => {
    cy.goHome();
  });
  context('Food', () => {
    it('opens', () => {
      cy.get('span').contains('Food').click();
    });
  });
});
