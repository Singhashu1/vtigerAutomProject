import { Locator, Page } from "playwright-core";
import { BasePage } from "./BasePage";


export class CreateNewContactPage extends BasePage{

  
  
  readonly firstName:Locator;
  readonly lastName:Locator;
  readonly sirName:Locator;
  readonly fax:Locator;

  readonly accountPlusIcon:Locator;
  
  constructor(page:Page){
    super(page);  // this line is calling for BasePage constructor.
  
  
  
   this.accountPlusIcon= page.locator("//input[@name='account_name']/following-sibling::img[@alt='Select']");
   this.firstName= page.locator("//input[@name='firstname']");
   this.lastName= page.locator("//input[@name='lastname']");
   this.sirName= page.locator("//select[@name='salutationtype']");
   this.fax= page.locator("//input[@id='fax']");
    
  }
 
   async enterFirstName(value:string){
      await this.setValue(this.firstName,value);

   }

    async enterLastName(value:string){
      await this.setValue(this.lastName,value);

   }


     async selectSirName(value:string){
      await this.selectOptionByText(this.sirName,value);

   }

   async enterFax(value:string){
     await this.setValue(this.fax,value);


   }

  async clickOnAccountPlusIconBtn(){
     await this.click(this.accountPlusIcon);

  }

  
  


}