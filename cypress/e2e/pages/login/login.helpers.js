import { LoginElements } from "./login.elements";
import { CommonPageHelper } from "../common-page/common-page.helper";

export class LoginHelper{
    static insertUsername(username){
        LoginElements.elements.username.invoke('val',username);
    }
    static insertPassword(password){
        LoginElements.elements.password.click();
        LoginElements.elements.password.invoke('val',password);
    }
    static clickOnLoginButtton(){
        LoginElements.elements.LoginButton.click();
    }
    static login(){
        CommonPageHelper.cliOnLoginOption();
            cy.fixture('users').then((usuarios) => {
            const usuario = usuarios.usuario1;
        this.insertUsername(usuario.username);
        this.insertPassword(usuario.password);
        this.clickOnLoginButtton();
       CommonPageHelper.verifySignedUser(usuario.username)
    });

}
}