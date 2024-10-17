export class HomeElements{
    static get elements(){
        return {
        //el buscar ael elemento que se le pasara
        productLink(productName){
            return cy.contains('a', productName);
        },
    };
}

}