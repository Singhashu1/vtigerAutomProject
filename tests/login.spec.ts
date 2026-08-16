import { AccountPage } from "../pages/AccountPage";
import { ContactsPage } from "../pages/ContactsPage";
import { CreateNewContactPage } from "../pages/CreateNewContactPage";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import {test, Page, Locator } from "@playwright/test";

import { stringify } from "node:querystring";
import { commanData } from "../TestData/CommanData";


test('TC_001 user should redirect after filling valid credantial',async({page})=>{

   const lg=new LoginPage(page);
   await lg.hitUrl("http://localhost:8888/");
   let userNm=commanData.login.userName;
   let pass= commanData.login.password;
   await lg.validLogin(userNm,pass); 
  const homePg= new HomePage(page);
  

  await homePg.clickONContactsLink();

 const contactPg= new ContactsPage(page);
 await contactPg.clickOnCreateContact();
  
 let createAc= new CreateNewContactPage(page);
   
         let sirNmOption:Locator=page.locator("//select[@name='salutationtype']");
          await createAc.selectOptionByText(sirNmOption,"Mr.");
         const fillValue:string=await createAc.getInputValue(sirNmOption);
         console.log("filled value in Sir Nm : "+fillValue);

           const firstNm:Locator= page.locator("//input[@name='firstname']");
      
           await createAc.setValue(firstNm,"Ashutosh");

        
   //   const popupPromise = page.waitForEvent('popup');

    await  createAc.clickOnAccountPlusIconBtn();

   await page.waitForTimeout(3000);

 let accountPage:Page= await createAc.switchONPageByIndexing(1);
    page=accountPage;
     
     let ac = new AccountPage(page);
       
     await ac.clcikAllA_To_z();
    let accountPgTitle:string=await createAc.getPageTitle();
    console.log("account page title : "+accountPgTitle);
    
   

  //  createAc.screenShotFullPage("screenShots/contactPg.png");



})
