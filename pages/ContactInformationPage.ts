import { Locator, Page } from "playwright-core";
import { BasePage } from "./BasePage";
import { time } from "node:console";

export class ContactInformationPage extends BasePage{

  readonly firstNameText:Locator;
  readonly  lastNameText:Locator;
   readonly sirNameText:Locator;
  readonly faxNumber:Locator;
  readonly editBtn:Locator;
  readonly deleteBtn:Locator;


  constructor(page:Page){
   super(page);
  
   this.sirNameText= page.locator("//td[ contains(@id,'mouseArea_First Name')]");
   this.firstNameText=page.locator("//span[contains(@id,'dtlview_First Name')]");
   this.lastNameText= page.locator("//span[contains(@id,'dtlview_Last Name')]");
   this.faxNumber=page.locator("//span[@id='dtlview_Fax']");
   this.editBtn=page.locator("");
   this.deleteBtn=page.locator("");
  
  
}


 
   






}