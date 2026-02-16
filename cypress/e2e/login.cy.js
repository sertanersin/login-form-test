describe('Login Form Testleri', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173'); 
  });

  it('Başarılı form doldurulduğunda submit edebiliyorum', () => {
    cy.get('[data-cy="email-input"]').type('emre@wit.com.tr');
    cy.get('[data-cy="password-input"]').type('12345678');
    cy.get('[data-cy="terms-checkbox"]').check();
    cy.get('[data-cy="submit-button"]').should('not.be.disabled').click();
    cy.get('[data-cy="success-message"]').should('be.visible');
  });

  it('Hatalı durumlarda beklenen hata mesajları görünüyor ve buton disabled kalıyor', () => {
    cy.get('[data-cy="email-input"]').type('yanlis-email');
    cy.get('[data-cy="error-message"]').should('have.length', 1);
    cy.get('[data-cy="submit-button"]').should('be.disabled');
  });
});