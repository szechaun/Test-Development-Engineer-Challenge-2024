describe('Complex Calculations with Parentheses', () => {
    beforeEach(() => {
      cy.visit('index.html');
    });
  
    it('Handles nested parentheses', () => {
      cy.get('.button[data-char="("]').click();
      cy.get('.button[data-char="("]').click();
      cy.get('.button[data-char="2"]').click();
      cy.get('.button[data-char="+"]').click();
      cy.get('.button[data-char="3"]').click();
      cy.get('.button[data-char=")"]').click();
      cy.get('.button[data-char="*"]').click();
      cy.get('.button[data-char="4"]').click();
      cy.get('.button[data-char=")"]').click();
      cy.get('.button[data-char="/"]').click();
      cy.get('.button[data-char="5"]').click();
      cy.get('.button.equals').click();
      cy.get('#result').should('have.text', '4');
    });
  
    // TODO: Implement test for correct parentheses
    // Input: (2 + 3) * 4
    // Expected Result: 20
  
    // TODO: Implement test for parentheses with operators
    // Input: 3 * (4 + 2) - 5
    // Expected Result: 13
  
    // TODO: Implement test for empty parentheses
    // Input: 5 + ()
    // Expected Result: Invalid Expression
  
    // TODO: Implement test for mismatched parentheses
    // Input: (2 + 3 * (4 - 1)
    // Expected Result: Invalid Expression
  });
  