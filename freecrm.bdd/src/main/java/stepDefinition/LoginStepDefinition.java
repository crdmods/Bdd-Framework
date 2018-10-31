package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginStepDefinition {

	WebDriver driver;
	
@Given("^user is already on login page$")	
public void user_is_already_on_login_page()
	{
		System.setProperty("webdriver.chrome.driver", "D:\\SE\\Chrome Driver\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("https://www.freecrm.com/index.html");
	
	}
	

@When("^title of the login page is free crm$")
public void title_of_the_login_page_is_free_crm()
	{
	
	 String title= driver.getTitle();
	 Assert.assertEquals("#1 Free CRM software in the cloud for sales and service", title);
	
	}


@Then("^user enters \"(.*)\" & \"(.*)\"$")		//using RegEx for data driven test
public void user_enters_username_password(String username, String password)
	{
	
	driver.findElement(By.xpath("//*[@name='username']")).sendKeys(username);	
	driver.findElement(By.xpath("//*[@name='password']")).sendKeys(password);
	
	}

@Then("^user clicks on login button$")
public void user_clicks_on_login_button()
	{
	driver.findElement(By.xpath("//*[@value='Login']")).click();
	}




@And("^user is on the home page$")
public void user_is_on_the_home_page()
	{
	String title=driver.getTitle();
	Assert.assertEquals("CRMPRO", title);
	}








}
