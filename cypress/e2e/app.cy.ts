/* eslint-disable no-undef */
describe('Navigation', () => {
  it('should navigate from home to the "pessoa-usuario" page by clicking on the a[href="/pessoa-usuario"] tag', async () => {
    cy.visit('http://localhost:3000')
    cy.contains('a[href="/pessoa-usuario"]').click()
    cy.wait(1000)
    cy.url().should('include', 'pessoa-usuario')
  })

  it('should navigate from home to the "pessoa-usuario" page by clicking on the button tag', async () => {
    cy.visit('http://localhost:3000')
    cy.get('button.buttonForUserPersonPage').click()
    cy.wait(1000)
    cy.url().should('include', 'pessoa-usuario')
  })

  it('should navigate from home to the "profissional" page by clicking on the a[href="/profissional"] tag', async () => {
    cy.visit('http://localhost:3000')
    cy.contains('a[href="/profissional"]').click()
    cy.wait(1000)
    cy.url().should('include', 'profissional')
  })

  it('should navigate from home to the "profissional" page by clicking on the button tag', async () => {
    cy.visit('http://localhost:3000')
    cy.get('button.buttonForProfessionalPage').click()
    cy.wait(1000)
    cy.url().should('include', 'profissional')
  })
})
