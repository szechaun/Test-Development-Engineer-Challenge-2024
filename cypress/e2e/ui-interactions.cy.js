describe('UI Interactions and Validation', () => {
    beforeEach(() => {
      cy.visit('index.html');
    });
  
    it('Updates the expression display when a button is clicked', () => {
      cy.get('.button[data-char="1"]').click();
      cy.get('#expression').should('have.text', '1'); // Verify expression updates immediately
    });
  
    it('Shows the correct result after a calculation', () => {
      cy.get('.button[data-char="1"]').click();
      cy.get('.button[data-char="+"]').click();
      cy.get('.button[data-char="2"]').click();
      cy.get('.button.equals').click();
      cy.get('#result').should('have.text', '3'); // Verify result updates after calculation
    });
  
    // TODO: Implement test for the clear button
    // Steps: Input an expression, press 'C', and verify both expression and result are cleared.
  
    // TODO: Implement test for the backspace button
    // Steps: Input an expression, press '⌫', and verify the last character is removed.
  
    // TODO: Implement test for expression display
    // Steps: Input a complex expression and verify it displays correctly in the expression area.
  });
  