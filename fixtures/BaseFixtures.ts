import {test as base} from '@playwright/test';  // alias = same name when we want to call another name then we call it. 
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { LeadPage } from '../pages/LeadPage';
import { ContactsPage } from '../pages/ContactsPage';
import { CreateNewContactPage } from '../pages/CreateNewContactPage';
import {ContactInformationPage} from '../pages/ContactInformationPage';
type fixturesType={
    loginPage:LoginPage;
    homePage:HomePage;
    contactPage:ContactsPage;
    leadPage:LeadPage;
    crateContactPg :CreateNewContactPage;
    contactInfoPg:ContactInformationPage;
}

export const test= base.extend<fixturesType>(
     
    {
       loginPage:async({page},use)=>{

           let lgPage:LoginPage= new LoginPage(page);
           await use(lgPage); // if you are making fixtures so you must need to make use whith > await if you will not use then your testcases will not executed.

     },

     homePage:async({page},use)=>{
       let hmPage:HomePage= new HomePage(page);
        await  use(hmPage); 

     },
     contactPage:async({page},use)=>{
         await use(new ContactsPage(page));
     },

     crateContactPg:async({page},use)=>{
         await use(new CreateNewContactPage(page));
     },
      
     contactInfoPg:async ({page},use)=>{
       await use (new ContactInformationPage(page));


        },
     

     leadPage:async({page},use)=>{
          
     await  use (new LeadPage(page)); // you can also write like this no need to use extra step.

     }


   }

)
