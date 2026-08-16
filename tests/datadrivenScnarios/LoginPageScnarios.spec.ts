import loginData from "../../TestData/LoginData.json";
import commanData  from '../../TestData/CommanData.json';
import {test,Page,expect} from '@playwright/test';
import { LoginPage } from "../../pages/LoginPage";

loginData.forEach((data) => {
  
    test(`verify login - ${data.label}`,async({page})=>{
     let lg:LoginPage = new LoginPage(page);
    await lg.hitUrl("http://localhost:8888/");
    await lg.enterUserName(data.username);
    await lg.enterPassword(data.password);
    await lg.clickOnLoginBtn();
    if(data.status==true){
      await  expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
    }else{
      await  expect(lg.userName).toBeVisible();
    }

})
})