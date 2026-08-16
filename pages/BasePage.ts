import {FileChooser, Locator,Page} from '@playwright/test';
import { promises } from 'dns';
import process  from 'process';

export class BasePage{
    
    page:Page;
    fileLocator:Locator;

    constructor(page:Page){
        this.page=page;
       this.fileLocator=page.locator("");
    }

    async hitUrl(url:string){
          await this.page.goto(url);

    }

     async getPageTitle():Promise<string>{
     const pageTitle:string= await this.page.title();
     return pageTitle;

     }
    async click(element:Locator){
      
    await element.click();


    }
  // this method firstly clear textbox or textarea and fill value..

    async setValue(element:Locator,value:string){
        // await element.click();

        // await element.clear();  this is not necessary playwright fill()method by default clear textbox.
        await element.fill(value);
    }

    // any value fill in input or textbox or textarea Or dropdown -value for getting we use > input()method 
    async getInputValue(element :Locator):Promise<string>{
       const value:string= await element.inputValue();
       return value;
   
    }


    async doubleClick(element :Locator){
           await element .dblclick();



    }

    async rightClick(element:Locator){
          //  click ()method under object we will give button:'right'/'l
        await element.click({button:'right'})
    }

    async mouseHover(element :Locator){
        await element.hover();
    }

    // drag and drop 

    async dragAndDrop(sorucElement:Locator,targetElement :Locator){
          await sorucElement.dragTo(targetElement);
          


    }

    async getVisibleText(element :Locator):Promise<string>{
         // it will only return string so return type is valid,
        return await element.innerText();  //UI ON VISIBLE innerText()> method will give element inner text only which is visible on UI .
    }

    async getText(element :Locator):Promise<string|null>{
         // textContent() > ye method string aur null dono retrun krnta hai if you will take only >:Promise(string) tb ye error dega kyu no suriety it will retrun only string so that's why we give (string|null) 
        return await element.textContent();  // textContent()> method will give you all element text whether element is visible or not on UI.
    }

    // ===================  Drop Down handling  =============================
 
    // drop dwon selecting > we use in playwright > getOption({label,value,index});
    async selectOptionByText(element :Locator, optionText:string):Promise<string[]>{
         
        return  await element.selectOption({label:optionText});



    }   
    async selectOptionByIndexing(element :Locator, indexNumber:number):Promise<string[]>{
            return await element.selectOption({index:indexNumber});


    }

     async selectOptionByValue(element :Locator, optionValue:string):Promise<string[]>{
           return await element.selectOption({value:optionValue});

    }

    // =============   Scrolling =================

   async scrollToElement(element :Locator):Promise<void>{
    await element.scrollIntoViewIfNeeded();

    
    }
    async scrollToBottom(page :Page):Promise<void>{
      await page.evaluate(()=>{
           window.scrollTo(0,document.body.scrollHeight);

      })


    }
    /*  > why we use Promise<> 
    An async function always returns a Promise. 
    When the function performs an action and does not return any value, 
    we specify the return type as Promise<void>. It improves type safety, code readability, and makes the method contract clear to other developers."
    */

    async scrollToTop():Promise<void>{
       await this.page.evaluate(()=>{
            window.scrollTo(0,0);
       })

    }

    // Counting how many elements we use > count method 
   async getCount(element:Locator):Promise<number>{
    return await element.count();
;

    }

    //   ===========   KeyBord Action ===========

    async pressKey(element:Locator,key:string):Promise<void>{
           
        await element.waitFor({state:'visible'})
        await element.press(key);
    }

     async pressTab(element:Locator):Promise<void>{
           
       
        await element.press("Tab");
    }

     async pressEnter(element:Locator):Promise<void>{
           
       
        await element.press("Enter");
    }
  /*  =============   Screen shot ============
    > It is used to take screnn shot of element and page 
    > when we give  fullPage: true    in second parameter it will take full page of screen shot means it will scroll and take snap.
        
   */
    // for taking a particular element screen shot 
    async screenShotOfElement(element:Locator,path:string):Promise<void>{
       await element.screenshot({path:path});

    }
     // this method for taking full page means scroll and take snap of all page.
     async screenShotFullPage(path:string):Promise<void>{
       await this.page.screenshot({path:path,fullPage:true});
       
    }
  
    // this method will take screen shot of visible . jitana dikhega utne ka screen shot lega .
      async screenShotPage(path:string):Promise<void>{
       await this.page.screenshot({path:path});
       
    }


    //   =====  Window handling Or Page Or Tab  -  handling.
     // switching on page by title
    async switchWindowOrTabOrPageByTitle(expTitlePartial:string):Promise<Page>
    {
        const pages: Page[]= this.page.context().pages();
           let trgetPage:Page |null = null;
        for(let i=0;i<=pages.length-1;i++){
            const page : Page = pages[i]; // this line will give you single page object one by one.
              const title : string = await page.title();
              if(title.includes(expTitlePartial)){
                   trgetPage=page;

                break;

              }
             
        }
         // if(targetpage===null || targetPage===undefined || targetPage==="") we can write this but = (!targetpage  )only this line is equal two all 
        if(!trgetPage){  // this line is checking all false value menas = null,undefined,false,"",0  (!) negation ye alage hai not equal alg hai (!=)
            throw new Error(`page not found :"${expTitlePartial}"`);
        }
         return trgetPage;
           }


           async switchWindowOrTabOrPageByURL(expURLPartial:string):Promise<Page>
    {
        const pages: Page[]= this.page.context().pages();
           let targetPage:Page |null = null;
        for(let i=0;i<=pages.length-1;i++){
            const page : Page = pages[i]; // this line will give you single page object one by one.
              const url : string = await page.url();
              if(url.includes(expURLPartial)){
                   targetPage=page;

                break;

              }
             
        }
         // if(targetpage===null || targetPage===undefined || targetPage==="") we can write this but = (!targetpage  )only this line is equal two all 
        if(!targetPage){  // this line is checking all false value menas = null,undefined,false,"",0  (!) negation ye alage hai not equal alg hai (!=)
            throw new Error(`page not found :"${expURLPartial}"`);
        }
         return targetPage;
           }


         // this is way to swich on new tab by indexing.
           async switchONPageByIndexing (index:number):Promise<Page> {
             const pages:Page[]= this.page.context().pages();
             const page:Page= pages[index];
             return page;}

// for file uploading and downloading  we make utils methods.
/* 
  >  if you want to this is for uploading place so first we make locator so while creating locator we must know
    > <input type=File, ></input> means type should be > file.
*/
  // for single file uploading
  // setInputFiles = this metod go in html and check type = file and add in value attribute value me add kr deta hai.
    async uploadFile(element:Locator,filePath:string){
        await element.setInputFiles(filePath);
    }
  // for multiple files uploading we use this Utils method.

    async uploadMultipleFile(element:Locator,filePaths:string[]){
       
        await element.setInputFiles(filePaths);
    }

     async removeUploadFiles(element:Locator){

          await element.setInputFiles([]);
     }

     /*
      * when we click for uploading so firstly we wait for coming window Or tab for selecting file so that's we wait for coming file.
      * in promise we will not use await because until unless we click window of file will not apear so that's why we do not use > await.
      */
    async clickUploadFile(element:Locator,filePath:string){
      
        let filechooserPromise: Promise<FileChooser> = this.page.waitForEvent("filechooser");
        await element.click();
         let fileChosser:FileChooser=await filechooserPromise;
         await fileChosser.setFiles(filePath);
             
    }


}