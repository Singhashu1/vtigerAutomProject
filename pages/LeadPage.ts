import { Locator, Page } from "playwright-core";
import { BasePage } from "./BasePage";


export class LeadPage extends BasePage{
  page:Page;
  readonly createLeadbutton:Locator;
  readonly searchForText:Locator;
  readonly searchInText:Locator;
  readonly searchNowButton:Locator;
  constructor(page:Page){
    super(page);
     this.page=page;
     this.createLeadbutton =page.locator("//img[contains(@title,'Create Lead')]");
     this.searchForText=page.locator("//input[@class='txtBox']");
     this.searchInText=page.locator("//select[@id='bas_searchfield']").nth(0);
     this.searchNowButton= page.locator("//input[contains(@value,' Search Now ')]").first();
  }

  async clickOnCreateLeadPlusIconButton(){
    await this.click(this.createLeadbutton);

  }

  async searchForTextField(value:string){
      
       await this.setValue(this.searchForText,value);

  }
    async searchInTextField(value:string){
         
        await this.selectOptionByValue(this.searchInText,value);
        
     
    


  }

  async clickOnSearchNowButton(){
     this.searchNowButton.waitFor({state:"visible"})
    this.click(this.searchNowButton);

  }



}