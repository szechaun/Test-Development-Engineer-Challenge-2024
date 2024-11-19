describe('Calculation History Functionality', () => {
    beforeEach(() => {
      cy.visit('index.html');
    });
  
    it('Saves calculations to history', () => {
      // Perform a calculation: 4 × 5 = 20
      cy.get('.button[data-char="4"]').click();
      cy.get('.button[data-char="*"]').click(); // Use * for the multiplication button
      cy.get('.button[data-char="5"]').click();
      cy.get('.button.equals').click();
  
      // Verify result
      cy.get('#result').should('have.text', '20');
  
      // Verify history entry
      cy.get('#history')
        .invoke('text')
        .then((text) => {
          const normalizedText = text.replace(/×/g, '*').trim(); // Normalize multiplication sign
          expect(normalizedText).to.include('4*5 = 20'); // Match the expected string
        });
    });
  
    // TODO: Implement test for clicking on history items to reuse calculations
    // Steps: Perform a calculation, click a history item, and verify the expression is restored.
  
    // TODO: Implement test for limiting history to 10 items
    // Steps: Perform 11 calculations and ensure only the last 10 appear in the history.
  
    // TODO: Implement test for clearing history
    // Steps: Perform calculations, clear the history, and verify it is empty.
  });
  