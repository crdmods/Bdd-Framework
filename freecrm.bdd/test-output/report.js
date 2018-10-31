$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Home/eclipse-workspace/freecrm.bdd/src/main/java/features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Scenario: Free CRM Login Test Scenario"
    },
    {
      "line": 4,
      "value": "#"
    },
    {
      "line": 5,
      "value": "#Given user is already on login page"
    },
    {
      "line": 6,
      "value": "#When title of the login page is free crm"
    },
    {
      "line": 7,
      "value": "#Then user enters username \u0026 password"
    },
    {
      "line": 8,
      "value": "#Then user clicks on login button"
    },
    {
      "line": 9,
      "value": "#And user is on the home page"
    }
  ],
  "line": 13,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "title of the login page is free crm",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user enters \"\u003cusername\u003e\" \u0026 \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user is on the home page",
  "keyword": "And "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 21,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "rahul",
        "bujji"
      ],
      "line": 22,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;2"
    },
    {
      "cells": [
        "naveenk",
        "test@123"
      ],
      "line": 23,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "title of the login page is free crm",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user enters \"rahul\" \u0026 \"bujji\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user is on the home page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 13280007272,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_the_login_page_is_free_crm()"
});
formatter.result({
  "duration": 107696515,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "rahul",
      "offset": 13
    },
    {
      "val": "bujji",
      "offset": 23
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_password(String,String)"
});
formatter.result({
  "duration": 766678079,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 2555070665,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_the_home_page()"
});
formatter.result({
  "duration": 71054335,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[CRMPRO]\u003e but was:\u003c[#1 Free CRM software in the cloud for sales and service]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat stepDefinition.LoginStepDefinition.user_is_on_the_home_page(LoginStepDefinition.java:59)\r\n\tat ✽.And user is on the home page(C:/Users/Home/eclipse-workspace/freecrm.bdd/src/main/java/features/login.feature:19)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 23,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "title of the login page is free crm",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "user enters \"naveenk\" \u0026 \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user is on the home page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 8512195856,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_the_login_page_is_free_crm()"
});
formatter.result({
  "duration": 55719072,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naveenk",
      "offset": 13
    },
    {
      "val": "test@123",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinition.user_enters_username_password(String,String)"
});
formatter.result({
  "duration": 971014089,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 8113747342,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_the_home_page()"
});
formatter.result({
  "duration": 25159243,
  "status": "passed"
});
});