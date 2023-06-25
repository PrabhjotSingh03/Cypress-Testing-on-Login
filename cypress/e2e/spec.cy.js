describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('Login Form', function(){

  describe('Load page', function(){

    it('should load the page', function(){
      cy.visit('./S-Lab2.html');
    })

    it('should accept the username and password', () =>{
      cy.get('input[name="username"]').type("prabh").should('have.value', "prabh")
      cy.get('input[name="password"]').type("12345").should('have.value', "12345")
    })

  });//end of load page

  describe('Form Submit and Show the Output Div', function(){
    it('should submit the form and output the result', () =>{
      cy.get('#login_form').submit()
      cy.get('.output').should('be.visible', "output")
    })
  }); //end of Form Submit and Show the Output Div

  describe('Test to fail', function(){
    it('should turn the username input background red and set the focus if username is empty', () =>{
      cy.get('input[name="username"]').clear().should('have.value', "").should('have.focus')
      cy.get('#login__button').click();
      cy.get('#username').should('have.css', "background-color", "rgb(255, 0, 0)")
    })

    it('should turn the password input background red and set the focus if password is empty', () =>{
      cy.get('input[name="username"]').type("prabh").should('have.value', "prabh")
      cy.get('input[name="password"]').clear().should('have.value', "").should('have.focus')
      cy.get('#login__button').click();
      cy.get('#password').should('have.css', "background-color", "rgb(255, 0, 0)")
    })

  }); //end of test to fail
});//end main suite