describe('Demonstrating file upload', () => {
  it('Upload PDF', () => {
    cy.visit('/')
    cy.get('a[href="/upload"]').should('be.visible').click()
    cy.get('input#file-upload').selectFile('Max.pdf')
    cy.get('.button').click()
  })
  it('Upload PDF using plugin', () => {
    cy.visit('/')
    cy.get('a[href="/upload"]').should('be.visible').click()
    cy.get('input#file-upload').attachFile('Max.pdf')
    cy.get('.button').click()
  })
}) 
