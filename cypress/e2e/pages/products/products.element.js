export class ProductsElements{
    static get elements(){
        return{
            get addCartButton(){
                return cy.contains('a', 'Add to cart');
            },
        };
    }
}