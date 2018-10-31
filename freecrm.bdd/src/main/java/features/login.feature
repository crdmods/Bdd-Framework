Feature: Free CRM Login Feature

#Scenario: Free CRM Login Test Scenario
#
#Given user is already on login page
#When title of the login page is free crm
#Then user enters username & password
#Then user clicks on login button
#And user is on the home page



Scenario Outline: Free CRM Login Test Scenario

Given user is already on login page
When title of the login page is free crm
Then user enters "<username>" & "<password>"
Then user clicks on login button
And user is on the home page
Examples:
|username|password|
|rahul	 | bujji	|
|naveenk |test@123|