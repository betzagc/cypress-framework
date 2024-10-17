
import { CommonPageElements } from "./common-page.elements";
//explorar la clase que se llama common-page helper
export class CommonPageHelper{
   static navigateToTheApplication()
   {
    cy.visit(Cypress.env('url'));
   }
    // metodo que va llamar on sign 
    static clickOnSignUpOption(){
        //aqui en vez de colocar el elemento que vamos a clickear         CommonPageElements
        CommonPageElements.topMenu.signUp.click();   
    }
    static cliOnLoginOption (){
        CommonPageElements.topMenu.login.click();
    }
        static verifySignedUser(username){
            CommonPageElements.topMenu.nameofUser.should("contain", `Welcome ${username}`);
          
      
}
static clickOnHomePage (){
    CommonPageElements.topMenu.home.click();

}
static clickOnCartOption(){
    CommonPageElements.topMenu.cart.click();
}
static generateRandonString = (length=10) =>{
       
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

}
