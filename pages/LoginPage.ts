import {Page,Locator,expect} from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage{
  readonly userName:Locator;
  readonly password:Locator;
  readonly loginBtn:Locator;
  readonly errorMessage:Locator;
  readonly page:Page;
 
  constructor(page:Page){
    // if in child has constructor and that constructor is parmaeterized then you must need to use super() for calling parent constructor.
     super(page);
    this.page=page;
    this.userName=  page.locator("input[name='user_name']");
    this.password=  page.locator("input[name='user_password']");
    this.loginBtn= page .locator("input[name='Login']");
    this .errorMessage=page.locator("//font[contains(normalize-space(),'You must specify a valid username and passwor')]");

  }
  // launch the url
  async hitUrl(url:string){
  await this.page.goto(url);


  }

  async enterUserName(userName:string){
    await this.setValue(this.userName,userName);
  }
  async enterPassword(pasword:string){
     await this.setValue(this.password,pasword);
  }
  async clickOnLoginBtn(){
    await this.click(this.loginBtn);
  }
  // this is for valid login
  async validLogin(userName:string,pasword:string){
     await this.setValue(this.userName,userName);
     await this.setValue(this.password,pasword);
     await this.click(this.loginBtn);
  


  }
  

  // async invalidLogin(userName:string,wrongPasword:string){
  //   await this.setValue(this.userName,userName);
  //    await this.setValue(this.password,wrongPasword);
  //    await this.click(this.loginBtn);
  //  await expect(this.errorMessage).toBeVisible();
  // }


   





}