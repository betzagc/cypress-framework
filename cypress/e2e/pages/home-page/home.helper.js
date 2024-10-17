import { HomeElements } from "./home.elements";

//clase para lso metodos
export class HomeHelper{
    static clickOnProductName(productName){
        //este elemento llamara al elemento creado en el cual le pasamos el link con el parametro
        HomeElements.elements.productLink(productName).click();
    }
}