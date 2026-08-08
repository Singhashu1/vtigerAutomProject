package org.eva.vtiger.utils;

import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class Practse {
	
	
	
	
	
	public static void main(String[] args) {
		WebDriver drv= new ChromeDriver();
		   drv.manage().timeouts().implicitlyWait(Duration.ofSeconds(30));
		   drv.manage().window().maximize();
		   drv.get("http://localhost:8888");  // in play wright page.goto("url");
		  WebUtil utl = new WebUtil();
		  // user name
		  WebElement we_userNm=utl.findElement(drv, "//input[@name='user_name']");
		  utl.sendKeys(drv, we_userNm, "admin");
		  
		  // password
		  WebElement we_pass=utl.findElement(drv, "//input[@name='user_password']");
		  utl.sendKeys(drv, we_pass, "admin");
		  
		  // login btn clicking.
		  
		  WebElement we_login=utl.findElement(drv, "//input[@name='Login']");
		  utl.click(drv, we_login);
		  
		  //utl.scrollByAmount(drv, 0, 2000);
		  System.out.println("scrolled ");
		  utl.scrollTo(drv, 0, 1000);
		  System.out.println("scrolled ");
	}

}
