import { Page,Locator } from "playwright-core";
import { BasePage } from "./BasePage";

export class ContactsPage extends BasePage{
  
    readonly createContact:Locator;



    constructor(page:Page){
      super(page);
      this.createContact=page.locator("//img[contains(@title,'Create Contact...')]");

    }

    async clickOnCreateContact(){
      await this.click(this.createContact);


    }



}