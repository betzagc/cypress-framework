export class SignUpElements{
 static get elements (){
    return{
        get username(){
            return cy.get('input#sign-username');
        },
        get password(){
            return cy.get('input#sign-password');

        },
        get signButton(){
    

            return cy.get('button[onclick="register()"]');
        },
    };
 }
}