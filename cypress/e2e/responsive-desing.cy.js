// TODO: every single test should be tested for different viewport. I am just out of time and so I put a responsive test here
describe('Responsive Design Testing', () => {
    beforeEach(() => {
      cy.visit('index.html');
    });
  
    // Test case for mobile layout
    it('Displays correctly on mobile devices', () => {
      cy.viewport('iphone-6'); // Simulate iPhone 6 viewport
      cy.get('.calculator-container').should('be.visible');
      cy.get('.keypad').should('have.css', 'display', 'grid'); // Check grid layout
      cy.get('.button').should('be.visible'); // Ensure all buttons are visible
    });
  
    // Test case for tablet layout
    it('Displays correctly on tablet devices', () => {
      cy.viewport('ipad-2'); // Simulate iPad 2 viewport
      cy.get('.calculator-container').should('be.visible');
      cy.get('.keypad').should('have.css', 'display', 'grid');
      cy.get('.button').should('be.visible');
    });
  
    // Test case for desktop layout
    it('Displays correctly on desktop devices', () => {
      cy.viewport(1024, 768); // Simulate a desktop viewport
      cy.get('.calculator-container').should('be.visible');
      cy.get('.keypad').should('have.css', 'display', 'grid');
      cy.get('.button').should('be.visible');
    });
  });
  