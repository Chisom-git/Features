describe('Demonstrating file download', () => {
  it('download PDF', () => {
    cy.visit('/')
    cy.get('a[href="/download"]').should('be.visible').click()
    cy.get('a[href="download/pdf-1mb.pdf"]').click()
  })
}) 