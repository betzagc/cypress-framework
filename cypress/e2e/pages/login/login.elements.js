export class LoginElements{
    static get elements (){
        return{
        get username(){
            return cy.get('input#loginusername');
        },
        get password(){
            return cy.get('input#loginpassword');
        },
        get LoginButton(){
            return cy.get('button[onclick="logIn()"]')


        
        },
        };
    }
}
