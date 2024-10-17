export class Cartelements{
    static get elements(){
return{
   get  placeOrderButton (){
    return cy.get('button[data-toggle="modal"]');
   },

};
    }
}