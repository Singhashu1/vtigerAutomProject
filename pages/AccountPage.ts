import { Locator, Page } from "playwright-core";
import { BasePage } from "./BasePage";

export class AccountPage extends BasePage{

      readonly allAlphabate:Locator;

      constructor(page:Page){
       super(page);
        this.allAlphabate =  page.locator("//td[@class='searchAlph']");

      }

    //   async clickONAllAlphabatic(): Promise<void> {
    //        const allElements:Locator[] =await this.allAlphabate.all();
    //     for(let element of allElements){
    //     let alphbateText:string = await this.getVisibleText(element);
    //     console.log("alpha bate text : "+alphbateText);
    //    await this.click(element);
    //      await this.page.waitForLoadState("domcontentloaded");
    //    }  
    // }

    async clcikAllA_To_z(){
     const count:number= await this.allAlphabate.count();
        console.log("element count : "+count);
     for(let i=0;i<count;i++){

       const element:Locator  =  this.allAlphabate.nth(i);
       console.log("alpthabate : "+await this.getVisibleText(element));
       await this.click(element);
       //await this.page.waitForLoadState("domcontentloaded");


     }


    }

}