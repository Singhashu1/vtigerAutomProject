import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";

import test, {} from '@playwright/test';
import { LeadPage } from "../pages/LeadPage";


test('validate Create New lead',async({page})=>{
   const lg = new LoginPage(page);
   lg.hitUrl("http://localhost:8888/");
   await lg.validLogin("admin","admin");
   const homePg= new HomePage(page);
   await homePg.clickOnMarketing();
   await homePg.clickOnLeads();
   const leadPg = new LeadPage(page);
  await leadPg.searchForTextField("ashutosh");
  await leadPg.searchInTextField("firstname");
  await leadPg.clickOnSearchNowButton();



})