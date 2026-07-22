describe('Demonstrating new-tab handling', () => {
  it('Handling by substituting target value', () => {
    cy.visit('/')
    cy.get('a[href="http://elementalselenium.com/"]').should('be.visible').invoke('attr','target','_self').click()
    cy.get('a[href="/tips"]>button').should('be.visible').click()
  })
  it('Handling by removing the target attribute', () => {
    cy.visit('/')
    cy.get('a[href="http://elementalselenium.com/"]').should('be.visible').invoke('removeAttr','target',).click()
    cy.get('a[href="/tips"]>button').should('be.visible').click()
  })
}) 
