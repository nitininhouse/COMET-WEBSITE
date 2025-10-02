describe('Homepage', () => {
  it('should display the homepage', () => {
    cy.visit('/');
    cy.contains('COMET'); 
  });
});
