Feature: Create member

  @user1 @web
  Scenario: Scenario16: As an administrator user I want to create a member
    Given I navigate to page "<LOGIN_URL>"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I wait for 1 seconds
    When I enter password "<PASSWORD>"
    And I wait for 1 seconds
    When I click the login button
    And I wait for 3 seconds
    When I click the page members item
    And I wait for 1 seconds
    When I click the new member button
    And I wait for 1 seconds
    When I enter the member name "Test"
    And I wait for 1 seconds
    When I enter the member email "<USERNAME>"
    And I wait for 1 seconds
    When I click the save button
    And I wait for 1 seconds
    Then I see the success member creation

  @user2 @web
  Scenario: Scenario17: As an administrator user I want to create a member wihout a valid email
    Given I navigate to page "<LOGIN_URL>"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I wait for 1 seconds
    When I enter password "<PASSWORD>"
    And I wait for 1 seconds
    When I click the login button
    And I wait for 3 seconds
    When I click the page members item
    And I wait for 1 seconds
    When I click the new member button
    And I wait for 1 seconds
    When I enter the member name "Test"
    And I wait for 1 seconds
    When I enter the member email "test"
    And I wait for 1 seconds
    When I click the save button
    And I wait for 1 seconds
    Then I see a error message
