
import { LoginHelper } from "../pages/login/login.helpers";
import { CommonPageHelper } from "../pages/common-page/common-page.helper";




describe ("Login", () =>
{
    it("Login Exitoso", () =>
        {
          CommonPageHelper.navigateToTheApplication();
          LoginHelper.login();
         
        });
});
