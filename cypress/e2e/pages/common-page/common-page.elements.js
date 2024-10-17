//explorar la clase que se llama common-page elements
export class CommonPageElements
{
    static get topMenu() //aqui colocaremos las opciones del menu
    {
        return{
            get   signUp()
            {
                return cy.get('a[data-target="#signInModal"]');
            },
            get login(){
                return cy.get('a[data-target="#logInModal"]');
  
            },
            get nameofUser(){
                return cy.get('#nameofuser');
               
            },
            get home(){
                return cy.contains("a","Home");
           
            },
            get cart(){
                return cy.get('a#cartur');
            }
        };
    }

}