describe('ui-components', () => {
  beforeEach(() => cy.visit('/iframe.html?id=mycmpcomponent--primary'));
  it('should render the component', () => {
    cy.get('ngsb1631-my-cmp').should('exist');
  });
});
