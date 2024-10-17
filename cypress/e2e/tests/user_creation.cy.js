import { CommonPageHelper } from "../pages/common-page/common-page.helper";
import { SignUpHelper } from "../pages/sign-up/sign-up.helper";



describe ("user_creation", () =>
{
    it("Creacion de Usuario", () =>
        {

            const username = CommonPageHelper.generateRandonString();
            const password=CommonPageHelper.generateRandonString();
            CommonPageHelper.navigateToTheApplication();
           SignUpHelper.createUserAccount(username, password)


      
});
});