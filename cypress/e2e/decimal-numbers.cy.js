describe('Decimal Number Calculations', () => {
    beforeEach(() => {
      cy.visit('index.html');
    });
  
    it('Performs addition with decimals', () => {
      cy.get('.button[data-char="1"]').click();
      cy.get('.button[data-char="."]').click();
      cy.get('.button[data-char="5"]').click();
      cy.get('.button[data-char="+"]').click();
      cy.get('.button[data-char="2"]').click();
      cy.get('.button[data-char="."]').click();
      cy.get('.button[data-char="3"]').click();
      cy.get('.button.equals').click();
      cy.get('#result').should('have.text', '3.8');
    });
  
    // TODO: Implement test for subtraction with decimals
    // Input: 5.5 - 2.2
    // Expected Result: 3.3
  
    // TODO: Implement test for multiplication with decimals
    // Input: 2.5 × 2
    // Expected Result: 5
  
    // TODO: Implement test for division with decimals
    // Input: 5.5 ÷ 2
    // Expected Result: 2.75
  });
  