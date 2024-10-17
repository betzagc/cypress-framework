import { CartHelper } from "../pages/cart/cart.helper";
import { CommonPageHelper } from "../pages/common-page/common-page.helper";
import { HomeConstants } from "../pages/home-page/home.constants";
import { HomeHelper } from "../pages/home-page/home.helper";
import { LoginHelper } from "../pages/login/login.helpers";
import { PlaceOrderConstants } from "../pages/place-order/place-order.constants";
import { PlaceOrderHelper } from "../pages/place-order/place-order.helper";
import { ProductsHelper } from "../pages/products/products.helper";




describe ("Place order", () =>
{
    it("Realziar una Orden", () =>
        {
          
          const productName = HomeConstants.testData.productName;
           const orderTestData= PlaceOrderConstants.testData;
     
            CommonPageHelper.navigateToTheApplication();
            LoginHelper.login();
           CommonPageHelper.clickOnHomePage();
           HomeHelper.clickOnProductName(productName);
          ProductsHelper.clicOnAddProductButton();
          CommonPageHelper.clickOnCartOption();
          CartHelper.clickOnPlaceOrderButton();
          PlaceOrderHelper.insertName(orderTestData.name)
          PlaceOrderHelper.insertCountry(orderTestData.country)
          PlaceOrderHelper.insertCity(orderTestData.city)
          PlaceOrderHelper.insertCreditcard(orderTestData.creditCard)
          PlaceOrderHelper.insertMounth(orderTestData.month)
          PlaceOrderHelper.insertYear(orderTestData.year)
          PlaceOrderHelper.clickOnPurchase();
          PlaceOrderHelper.verifiPurchaseSucess();
        });
});
