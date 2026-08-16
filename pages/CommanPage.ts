import { Page ,Locator} from '@playwright/test';
import { BasePage } from './BasePage';



export class CommanPage extends BasePage{

  readonly commonSaveBtn:Locator;
  readonly commanEditBtn:Locator;
  readonly commanDeleteBtn:Locator;
  readonly commanCancelBtn:Locator;

  constructor(page:Page){
    super(page);
    this.commonSaveBtn= page.locator("//input[@type='submit']").nth(1);
    this.commanEditBtn= page.locator("//td[normalize-space()='More Information']/following-sibling::td//input[@name='Edit']");
    this.commanDeleteBtn= page.locator("//td[normalize-space()='More Information']/following-sibling::td//input[@value='Delete']");
    this.commanCancelBtn=page.locator("//input[contains(@value,'Cancel')]");


  }

 async clickOnCommonSaveBtn(){
       await this.click(this.commonSaveBtn);
      }


async clickOnCommonEditBtn(){
    await this.click(this.commanEditBtn);

  }

  async clickOnCommonCancelBtn(){
    await this.click(this.commanCancelBtn);

  }

   async clickOnCommonDeleteBtn(){
    await this.click(this.commanDeleteBtn);

  }




}