import {Page, expect} from "@playwright/test";
import loginData from '../TestData/LoginData.json';
import {test } from '../fixtures/BaseFixtures';
import  commanData from '../TestData/CommanData.json';


// hard assertion =  in hard assertion after failing code rest of code will not executed.
// it is soft assertion code after fail it will execute rest of code.
test.skip('testcase-1',async({context})=>{
    
  let page:Page= await context.newPage();
   await page.goto("http://localhost:8888/");
   await expect.soft(page).toHaveURL("http://localhost:8888/");
   await page.fill("//input[@name='user_name']","admin");
   await expect.soft(page.locator("//input[@name='user_name']")).toHaveValue("admin");
   await page.fill("//input[@name='user_password']","admin");
   await page.click("//input[@name='Login']");
   
   
})

  /*   
  if you are doing data driven testing so you must need to understand that for data driven data we keep in seprate > .json file 
  it mens if you are performing data driven for LoginPage that you will make > LoginData.json,like this 
  contactPage>  ContactData.json
  leadsPage >  LeadsData.json


*/

loginData.forEach((lgData) => {
  
  test.skip(`data Driven Testing With LoginPg ${lgData.label}`,async({page,loginPage})=>{
      await loginPage.hitUrl("http://localhost:8888/")
      await loginPage.enterUserName(lgData.username);
      await loginPage.enterPassword(lgData.password);
      await loginPage.clickOnLoginBtn();
      if(lgData.status==true){
      await expect(page).toHaveTitle("admin - My Home Page - Home - vtiger CRM 5 - Commercial Open Source CRM");
      }else{
       // await loginPage.loginBtn.isVisible();
        await  expect(loginPage.loginBtn).toBeVisible();

      }
      
  })   
})


// this is logical questions which is frequntly asked in Interview




 

  



