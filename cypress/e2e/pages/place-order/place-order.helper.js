import { PlaceOrderElements } from "./place-order.elements";

export class PlaceOrderHelper{
    static insertName(name)
{
    PlaceOrderElements.elements.name.type(name);
}
static insertCountry(country){
    PlaceOrderElements.elements.country.type(country);
}
static insertCity(city){
    PlaceOrderElements.elements.city.type(city)
}
static insertCreditcard(creditCard){
    PlaceOrderElements.elements.creditCard.type(creditCard);

}
static insertMounth(month){
    PlaceOrderElements.elements.month.type(month);
}
static insertYear(year){
    PlaceOrderElements.elements.year.type(year);
}
static clickOnPurchase(){
    PlaceOrderElements.elements.purchaseButton.click();
}
static verifiPurchaseSucess(){
    PlaceOrderElements.elements.purchaseSuccessCheckMarc.should("exist");
}
}