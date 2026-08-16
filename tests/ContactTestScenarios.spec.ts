import {test,Page, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import  commanData  from   '../TestData/CommanData.json' ;
import  testData  from   '../TestData/TestData.json' ;
import { HomePage } from '../pages/HomePage';
import { CreateNewContactPage } from '../pages/CreateNewContactPage';
import { ContactsPage } from '../pages/ContactsPage';
import { ContactInformationPage } from '../pages/ContactInformationPage';
import { CommanPage } from '../pages/CommanPage';
import   createContactData  from '../TestData/CreateContact.json'

async function createContactFlow(page:Page){
   
    let lg:LoginPage = new  LoginPage(page);
   await  lg.hitUrl("http://localhost:8888/");
   await lg.validLogin(commanData.login.userName,commanData.login.password);

   // HomePage class Object
   let homePg:HomePage = new HomePage(page);
   await  homePg.clickONContactsLink();

   // Contact page class object

   let contactPg: ContactsPage = new ContactsPage(page);
   await contactPg.clickOnCreateContact();

   // CreateNewContact page  class object

   let crateContactPg: CreateNewContactPage= new CreateNewContactPage(page);
    
   await  crateContactPg.selectSirName(commanData.createContactData.sirname);
   await crateContactPg.enterFirstName(commanData.createContactData.firstname);
   await crateContactPg.enterLastName(commanData.createContactData.lastname);
  
   await crateContactPg.enterFax(commanData.createContactData.fax);
   const commonPg:CommanPage= new CommanPage(page);
     await commonPg.clickOnCommonSaveBtn();


   
}

test.skip("vt_001 verify createContact ",async({page})=>{
   // this is LoginPage and inside login page BasePage is extends and in BasePage all utils method are avaible so we use it inside page .
    await  createContactFlow(page);  // this line will create contact.
    // validation 
   await expect(page).toHaveTitle("admin - Marketing - Contacts - vtiger CRM 5 - Commercial Open Source CRM");
   await expect(page).toHaveURL("http://localhost:8888/index.php?action=DetailView&module=Contacts&parenttab=Marketing&record=141&activity_mode=&viewname=0&start=");
   let contactInfoPg:ContactInformationPage = new ContactInformationPage(page);
   await expect(contactInfoPg.firstNameText).toHaveText(commanData.createContactData.firstname);
   await expect(contactInfoPg.lastNameText).toHaveText(commanData.createContactData.lastname);
   await expect (contactInfoPg.sirNameText).toContainText(commanData.createContactData.sirname);
   await expect(contactInfoPg.faxNumber).toHaveText(commanData.createContactData.fax);
      
       
       
       

})



test("vt_002 verify edit contact page",async({page})=>{
      await  createContactFlow(page);
     let contactInfoPg:ContactInformationPage = new ContactInformationPage(page);
        const commonPg:CommanPage= new CommanPage(page);
        await commonPg.clickOnCommonEditBtn();
    
    let crateContactPg: CreateNewContactPage= new CreateNewContactPage(page);
    
         await  crateContactPg.enterFirstName(testData.vt_002.updatedFirstNmae);
         await  crateContactPg.enterLastName(testData.vt_002.updatedLastName);
         await  crateContactPg.enterFax(testData.vt_002.updatedFax);
         await  commonPg.clickOnCommonSaveBtn();



})


   






