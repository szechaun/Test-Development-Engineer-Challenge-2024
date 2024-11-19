describe('Basic Arithmetic Operations', () => {
    beforeEach(() => {
      cy.visit('index.html');
    });
  
    it('Performs addition', () => {
      cy.get('.button[data-char="1"]').click();
      cy.get('.button[data-char="+"]').click();
      cy.get('.button[data-char="2"]').click();
      cy.get('.button.equals').click();
      cy.get('#result').should('have.text', '3');
    });
  
    // TODO: Implement test for subtraction
    // Input: 5 - 3
    // Expected Result: 2
  
    // TODO: Implement test for multiplication
    // Input: 4 × 2
    // Expected Result: 8
  
    // TODO: Implement test for division
    // Input: 8 ÷ 2
    // Expected Result: 4
  });
  