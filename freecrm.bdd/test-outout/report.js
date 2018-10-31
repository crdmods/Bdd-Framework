$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Home/eclipse-workspace/freecrm.bdd/src/main/java/features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of the login page is free crm",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters username \u0026 password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on the home page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 12943828618,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_the_login_page_is_free_crm()"
});
formatter.result({
  "duration": 43368172,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_username_password()"
});
formatter.result({
  "duration": 907806623,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 7824883019,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_the_home_page()"
});
formatter.result({
  "duration": 22638920,
  "status": "passed"
});
});