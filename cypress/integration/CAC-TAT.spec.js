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
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT');
    })

    // AULA 9 -> EXERCICIO / AULA 10 -> EXERCICIO EXTRA 1

    it('preenche os campos obrigatórios e envia o formulário', function() {
        const longText = 'Teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste, teste'

        cy.get('#firstName').type('Ricardo')
        cy.get('#lastName').type('Ferraz')
        cy.get('#email').type('ricardo@gmail.com')
        //cy.get('#open-text-area').type('Testando')
        cy.get('#open-text-area').type(longText, { delay: 0 }) // Primeiro argumento é o texto qua vamos digitar e o segundo argumento é um objeto de opções, por isso vem entre chaves
        cy.get('button[type="submit"]').click()  // pega o botão que é do tipo submit e clica nele

        cy.get('.success').should('be.visible') // pegar o elemento com a classe success e deixa-lo visível
    })

    // AULA 11 -> EXERCICIO EXTRA 2 (lession 02.md)

    // Crie um teste chamado exibe mensagem de erro ao submeter o formulário com um email com formatação inválida
    // Tal teste deve verificar que uma mensagem é exibida em um elemento com a classe error

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
        cy.get('#firstName').type('Ricardo')
        cy.get('#lastName').type('Ferraz')
        cy.get('#email').type('ricardo@exemplo,com') // adicionar um email ívalido
        cy.get('#open-text-area').type('Testando')
        cy.get('button[type="submit"]').click() 
        cy.get('.error').should('be.visible')
    })

    // AULA12 -> EXERCICIO EXTRA 3

    // Visto que o campo de telefone só aceita números, crie um teste para validar que, 
    // se um valor não-numérico for digitado, seu valor continuará vazio.

    it('campo telefone continua vazio quando preenchido com valor não-numérico', function() {
        cy.get('#phone')
            .type('abcdefghij')
            .should('have.value', '')
    })

    // AULA13 -> EXERCICIO EXTRA 4

    // Crie um teste chamado exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário
    // Tal teste deve verificar que uma mensagem é exibida em um elemento com a classe error

    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
        cy.get('#firstName').type('Ricardo')
        cy.get('#lastName').type('Ferraz')
        cy.get('#email').type('ricardo@exemplo.com')
        cy.get('#phone-checkbox').click() // Marquei o checkbox, para ele se tornar obrigatório e não vou digitar o telefone
        cy.get('#open-text-area').type('Testando')
        cy.get('button[type="submit"]').click() 

        cy.get('.error').should('be.visible')
    })

    // AULA 14 -> EXERCICIO EXTRA 5 -> CLEAR() - limpa um campo, para posterior digitação

    // crie um teste chamado "preenche e limpa os campos nome, sobrenome, email e telefone"
    // Tal teste deve verificar o valor (value) após a digitação (.type(...).should('have.value', 'valor-aqui')), 
    // e após a limpeza do campo (.clear().should('have.value', ''))

    it('preenche e limpa os campos nome, sobrenome, email e telefone', function() {
        cy.get('#firstName')  // Pega o input de id "firstName"
            .type('Ricardo')  // Digita "Ricardo"
            .should('have.value', 'Ricardo')  // Verificar - Deve ter o valor de "Ricardo"
            .clear()  // limpar o campo (input)
            .should('have.value', '')  // verificar se o campo está vazio -> Deve ter o valor de vazio
        cy.get('#lastName')  
            .type('Ferraz') 
            .should('have.value', 'Ferraz') 
            .clear()  
            .should('have.value', '')  
        cy.get('#email')  
            .type('ricardo@exemplo.com') 
            .should('have.value', 'ricardo@exemplo.com') 
            .clear()  
            .should('have.value', '')  
        cy.get('#phone')  
            .type('21999999999')  
            .should('have.value', '21999999999')  
            .clear()  
            .should('have.value', '')          
    })

    // AULA 15 -> EXERCICIO EXTRA 6 

    // Crie um teste chamado "exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios".
    // O teste deve simplesmente acessar a aplicação e clicar no botão Enviar
    // Tal teste deve verificar que uma mensagem é exibida em um elemento com a classe error   

    it.only('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {
        cy.get('button[type="submit"]').click() // Clicou no botão "Enviar", como não foi preenchido os campos obrigatorios. vai gerar erro

        cy.get('.error').should('be.visible')  // Mensagem de erro deve estar visível
    })


  })



