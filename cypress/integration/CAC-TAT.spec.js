// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    it('verifica o título da aplicação', function() {
        cy.visit('./src/index.html');
        cy.title().should('eq', 'Central de Atendimento ao Cliente TAT');
    })
  })


  // EXERCICIO 

  describe('Central de Atendimento ao Cliente TAT', function() {
    this.beforeEach(function() {  // Antes da cada teste, execute esse bloco
        cy.visit('./src/index.html');
    }) 
    it('verifica o título da aplicação', function() {
        cy.title().should('eq', 'Central de Atendimento ao Cliente TAT');
    })

    it.only('preenche os campos obrigatórios e envia o formulário', function() {
        const longText = 'Teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste'
        
        cy.get('#firstName').type('Ricardo')
        cy.get('#lastName').type('Ferraz')
        cy.get('#email').type('ricardo@gmail.com')
        //cy.get('#open-text-area').type('Testando')
        cy.get('#open-text-area').type(longText, { delay: 0 }) // Primeiro argumento é o texto qua vamos digitar e o segundo argumento é um objeto de opções, por isso vem entre chaves
        cy.get('button[type="submit"]').click()  // pega o botão que é do tipo submit e clica nele

        cy.get('.success').should('be.visible') // pegar o elemento com a classe success e deixa-lo visível
    })
  })



