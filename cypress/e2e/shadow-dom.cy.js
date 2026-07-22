describe('Demonstrating shadow-dom', () => {
  it('handling shadow-dom', () => {
    cy.visit('https://www.testmuai.com/selenium-playground/')
    cy.get('[href="https://www.testmuai.com/selenium-playground/shadow-dom/"]').should('be.visible').click()
    cy.get('shadow-signup-form').shadow().find('input[name="username"]').fill('John Doe')
    cy.get('shadow-signup-form').shadow().find('input[name="email"]').fill('John@yopmail.com')
    cy.get('shadow-signup-form').shadow().find('input[name="password"]').fill('Test@123')    
    cy.get('shadow-signup-form').shadow().find('input[name="confirm_password"]').fill('Test@123')   
    })
   })
describe('Demonstrating shadow-dom', () => {
    it('handling shadow-dom 2', () => {
    cy.visit('https://www.testmuai.com/selenium-playground/')
    cy.get('[href="https://www.testmuai.com/selenium-playground/shadow-dom/"]').should('be.visible').click()
    cy.get('#shadow_host').shadow().find('input[placeholder="Name"]').fill('John N')
    cy.get('#shadow_host').shadow().find('input[placeholder="Email"]').fill('Johnny@yopmail.com')    
    })
  })