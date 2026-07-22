describe('Demonstrating dropdown', () => {
  it('Selecting Dropdown by Value', () => {
    cy.visit('/')
    cy.get('a[href="/dropdown"]').should('be.visible').click()
    cy.get('select#dropdown').select('2')
  })
  it('Selecting Dropdown by text', () => {
    cy.visit('/')
    cy.get('a[href="/dropdown"]').should('be.visible').click()
    cy.get('select#dropdown').select('Option 1')
  })
})
