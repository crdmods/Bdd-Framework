package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features= {"C:\\Users\\Home\\eclipse-workspace\\"
		+ "freecrm.bdd\\src\\main\\java\\features\\login.feature"}, 
glue= {"stepDefinition"},format= {"pretty","html:test-output"},
monochrome=true, dryRun=false)                                                                                                                                                                                                                                                                                                                                  


public class TestRunner {

}
 