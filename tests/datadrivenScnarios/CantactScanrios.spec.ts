
import {expect,Page} from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import  commanData  from '../../TestData/CommanData.json';
import { HomePage } from '../../pages/HomePage';
import { ContactsPage } from '../../pages/ContactsPage';
import { CreateNewContactPage } from '../../pages/CreateNewContactPage';
import  createContactData  from '../../TestData/CreateContact.json';
import { ContactInformationPage } from '../../pages/ContactInformationPage';
import { CommanPage } from '../../pages/CommanPage';
import {test}  from '../../fixtures/BaseFixtures';

createContactData .forEach((createContactData )=>{
  test(`create Contact  multiple data - ${createContactData.label}`,async({page,loginPage,homePage,contactPage,crateContactPg,contactInfoPg})=>{
      
    // loginPage,homePage,contactPage,crateContactPg  this is fixtures if you are looking directly useing it means custom fixtures is created and hear using.
   await  loginPage.hitUrl("http://localhost:8888/");
   await loginPage.validLogin(commanData.login.userName,commanData.login.password);
   
   // HomePage class Object

   await  homePage.clickONContactsLink();

   // Contact page class object


   await contactPage.clickOnCreateContact();
  
    

   await  crateContactPg.selectSirName(createContactData.sirname);
   await crateContactPg.enterFirstName(createContactData.firstName);
   await crateContactPg.enterLastName(createContactData.lastName);
   await crateContactPg.enterFax(createContactData.fax);
   const commonPg:CommanPage= new CommanPage(page);
   await commonPg.clickOnCommonSaveBtn();

// hear i am validating is it contact creating or not.
    
 
     await expect(contactInfoPg.firstNameText).toHaveText(createContactData.firstName);
   await expect(contactInfoPg.lastNameText).toHaveText(createContactData.lastName);
   await expect (contactInfoPg.sirNameText).toContainText(createContactData.sirname);
   await expect(contactInfoPg.faxNumber).toHaveText(createContactData.fax);



})

})
