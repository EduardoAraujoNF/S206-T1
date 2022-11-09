/// <reference types="cypress" />

describe('Teste Diolinux blog', () => {
  beforeEach(() => {
    cy.visit('https://diolinux.com.br/')
  })

  it('Exibir menu lateral', () => {
    cy.get('.navbar-toggle-offcanvas > .cs-icon').click()
    cy.get('.offcanvas-header')
  })

  it('Recolher menu lateral', () => {
    cy.get('.navbar-toggle-offcanvas > .cs-icon').click()
    cy.get('.offcanvas-header')
    cy.get('.navbar > .toggle-offcanvas > .cs-icon').click()
  })

  it('Realizar pesquisa: "Arch linux"', () => {
    cy.get('.navbar-toggle-search > .cs-icon').click()
    cy.get('.search-field').click().type("Arch Linux")
    cy.get('.search-submit').click()
    cy.get('.page-title').should("have.text", "Arch Linux")
  })

  it('Realizar pesquisa sem inserir o que deseja', () => {
    cy.get('.navbar-toggle-search > .cs-icon').click()
    cy.get('.search-field').click()
    cy.get('.search-submit').click()
    cy.url().should('be.equal', "https://diolinux.com.br/")
  })

  it('Realizar pesquisa e retornar para homePage', () => {
    cy.get('.navbar-toggle-search > .cs-icon').click()
    cy.get('.search-field').click().type("Arch Linux")
    cy.get('.search-submit').click()
    cy.get('.page-title').should("have.text", "Arch Linux")
    cy.get(':nth-child(1) > .navbar-brand > a > img').click()
    cy.url().should('be.equal', "https://diolinux.com.br/")
  })

  it('Abrir pagina ebook', () => {
    cy.get('.navbar-toggle-offcanvas > .cs-icon').click()
    cy.get('#menu-item-68132 > a').click()
    cy.url().should('be.equal', "https://diolinux.com.br/startup")
  })

})
