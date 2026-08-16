import { Page,Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage{

    readonly marketingLink :Locator;
    readonly salesLink:Locator;
    readonly supportLink:Locator;
    readonly leadsLink:Locator;
    readonly createContactLink:Locator;
constructor (page:Page){
     super(page);
    this.marketingLink=page.locator("//a[normalize-space()='Marketing']");
     this.salesLink=page.getByText("Sales");
     this.supportLink=page.getByText("Support");
     this.leadsLink = page.locator("#Marketing_sub").getByRole('link', { name: 'Leads' });
     this.createContactLink= page.locator("//div[@id='Marketing_sub']//a[text()='Contacts']");
     
    }

    async clickOnMarketing(){
     // await this.marketingLink.click();
      await this.click(this.marketingLink);

    }
    async clickOnLeads(){
       
        await this.mouseHover(this.marketingLink);
        await this.click(this.leadsLink);
      
        

    }

    async clickOnSales(){
     
      await this.click(this.salesLink);

    }

    async clickOnSupport(){
       await this.click(this.supportLink);

    }



   async clickONContactsLink(){
     await this.mouseHover(this.marketingLink);
     await this.click(this.createContactLink.first());


   }





}