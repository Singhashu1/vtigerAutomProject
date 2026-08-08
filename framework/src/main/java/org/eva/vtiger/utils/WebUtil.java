package org.eva.vtiger.utils;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.time.Duration;
import java.util.NoSuchElementException;

import org.openqa.selenium.By;
import org.openqa.selenium.ElementClickInterceptedException;
import org.openqa.selenium.ElementNotInteractableException;
import org.openqa.selenium.InvalidSelectorException;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

public class WebUtil {
	
	 
	public WebElement findElement(WebDriver driver,String xpath) {
		   WebElement we =null;
		try {
		we= driver.findElement(By.xpath(xpath)); 
		System.out.println("Element found successfully.");
		}
		 //return we;  
		catch(NoSuchElementException e){
			WebDriverWait wait = new WebDriverWait(driver,Duration.ofSeconds(60));
		    we=wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(xpath)));
			//return we;
		    System.out.println("Element found successfully.");
			
		}catch(InvalidSelectorException e){
			System.out.println("Element not found xpath syntax is wrong..");
			  throw e;
			
		}catch(Exception e) {
			  throw e;  // it means code will not execute for further except.  it will print exception
			
			
		}
		
		 return we;   // if you are writing at the end of code > return we. so no need to write in try{} and catch(){} block- return.
		
	}
	
	
	public void sendKeys(WebDriver driver,WebElement we,String value) {
		
		try {
		we.sendKeys(value); 
		System.out.println(value+" value filled in input box.");
		}catch(ElementClickInterceptedException e) {
			JavascriptExecutor jse =(	JavascriptExecutor) driver;
			jse.executeScript("arguments[0].value='"+value+"'", we);
			System.out.println(value+" value filled in input box.");
		}
		catch(ElementNotInteractableException e) {
			JavascriptExecutor jse =(	JavascriptExecutor) driver;
			jse.executeScript("arguments[0].value='"+value+"'", we);
			System.out.println(value+" value filled in input box.");
		}catch(Exception e) {
			e.printStackTrace(); // it's only for printing and it will not stoped code 
			throw e;             // it will be print and as well as stop code not run further steps.
			
					}
		
	}
	
	public void click(WebDriver driver,WebElement we ) {
		try {
		we.click();
		System.out.println("click on elment is succesfully.");
		
		}catch(ElementClickInterceptedException e) {
			JavascriptExecutor jse = (JavascriptExecutor) driver;
			jse.executeScript("arguments[0].click();", we);
			System.out.println("click on elment is succesfully.");
		}
		catch(ElementNotInteractableException e) {
			JavascriptExecutor jse = (JavascriptExecutor) driver;
			jse.executeScript("arguments[0].click();", we);
			System.out.println("click on elment is succesfully.");
		}catch(Exception e) {
			
			throw e;
			
		 }
		
		  }
	
	  // click on element by Actions - class.
	 
	   public void clickByActions(WebDriver driver) {
		     Actions act= new Actions(driver);
		     act.click().perform();
		     System.out.println("clicked on element is successfully..");
		   
	   }
	   
	   public void clickByActions(WebDriver driver,WebElement we) {
		     Actions act= new Actions(driver);
		     act.click(we).perform();
		     System.out.println(we+" -clicked on element is successfully..");
		   
	   }
	
	
	public void selectByVisibleTextdropdown(WebDriver driver,WebElement we,String value) {
		try {
		Select drp = new Select(we);
		drp.selectByVisibleText(value);
		}catch(Exception e) {
			throw e;
			
		}
		
		
			}
	
	public void selectByValuedropdown(WebDriver driver,WebElement we,String attributeValue) {
		try {
		WebDriverWait wait = new WebDriverWait(driver,Duration.ofSeconds(30));
		wait.until(ExpectedConditions.visibilityOf(we));
		Select drp = new Select(we);
		drp.selectByValue(attributeValue);              // attrbute = attr
		}catch(Exception e) {
			throw e;
		}
			}
	
	
	  public void iframeHandling(WebDriver driver,String idOrName) {
		  // if iframe not found then Exception =  NoSuchFrameException. it means iframe is not exits.
		  driver.switchTo().frame(idOrName);
		   System.out.println("switch on frame is successfully..");
		  
	  }
	  
	  
    public void iframeHandling(WebDriver driver,WebElement we) {
		  
		  driver.switchTo().frame(we);
		  System.out.println("switch on frame is successfully..");
	  }
    
    public void nestedFrameSwitchingOnParentFrm(WebDriver driver) {
    	   driver.switchTo().parentFrame();
    	   System.out.println("switching on parent frame is successfully..");
    	
    }
    public void switchTodefaultContent(WebDriver driver) {
    	
    	  driver.switchTo().defaultContent();
    	  System.out.println("switch on main page /dom  is successfully..");
    }
    
    
    
    public void scrollToElement(WebDriver driver,WebElement we) {
    	
    	 Actions act= new Actions(driver);
    	   act.scrollToElement(we).build().perform();
    	
    }
    
    
    public void scrollIntoView(WebDriver driver,WebElement we) {
    	
        JavascriptExecutor jse =(JavascriptExecutor) driver;
        jse.executeScript("arguments[0].scrollIntoView(true);", we);
    	
    }
    // hear i am little bit confused how we will pass value in method.
    public void scrollTo(WebDriver driver,int x ,int y) {
     JavascriptExecutor jse =(JavascriptExecutor) driver;
      jse.executeScript("window.scrollTo()");
    	
    }
    
    
    
    public void scrollByAmount(WebDriver driver,int x,int y) {
    	Actions act= new Actions(driver);
    	act.scrollByAmount(x, y).perform();
    	
    	
    }
   
    // mouse and keybord action
    public void rightClick(WebDriver driver,WebElement we) {
    	Actions act = new Actions(driver);
    	act.contextClick(we).build().perform();
    	System.out.println(we+" right click on element is successfully..");
    	
    }
      
    public void mouseHover(WebDriver driver,WebElement we) {
    	
    	Actions act = new Actions(driver);
    	act.moveToElement(we).build().perform();
    	System.out.println(we+" mouse hover on element is successfully..");
    	
    }
    
    public void dragAndDrop1(WebDriver driver,WebElement sorce,WebElement target) {
    	Actions act = new Actions(driver);
    	act.dragAndDrop(sorce, target);
    	System.out.println("draged and droped is successfully..");
    	
    	
    }
    
     public void dragAndDrop2(WebDriver driver , WebElement sorce,WebElement target) {
       Actions act = new Actions(driver);
    	 act.clickAndHold(sorce).moveToElement(target).release().build().perform();
    	 System.out.println("draged and droped is successfully..");
    	
     }
     
      public void doubleClickOnElement(WebDriver driver,WebElement we) {
    	  Actions act = new Actions(driver);
    	  act.doubleClick(we).build().perform();
    	  System.out.println(we+"- double click on element is successfully");
    	  
      }
      // screenshot of full page.
      public void takeScreeShotFullpage(WebDriver driver,String path) {
    		TakesScreenshot screenShot = (TakesScreenshot) driver;
   		 File srcFile= screenShot.getScreenshotAs(OutputType.FILE);
   		 File  targetFile=new File(System.getProperty("user.dir")+"\\screenshot\\screenShots.png");
   		 try {
   			Files.copy(srcFile, targetFile);
   		} catch (IOException e) {
   			
   			e.printStackTrace();
   		}
    	 
    	  
    	  
    	  
      }
      
     
     
    
    
    
    
    
    
    
    
}
