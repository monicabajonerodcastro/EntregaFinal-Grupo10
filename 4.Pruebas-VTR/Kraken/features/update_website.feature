Feature: Update website

  @user2 @web
  Scenario: Scenario12: As an administrator user I want to update my website publication language
    Given I navigate to page "<LOGIN_URL>"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I wait for 1 seconds
    When I enter password "<PASSWORD>"
    And I wait for 1 seconds
    When I click the login button
    And I wait for 3 seconds
    When I click the settings button
    And I wait for 1 seconds
    When I click the general button
    And I wait for 1 seconds
    When I click the publication language expand button
    And I wait for 1 seconds
    When I enter the new language "es"
    And I wait for 1 seconds
    When I click the save button
    And I wait for 1 seconds
    Then I see the success update title message

  @user5 @web
  Scenario: Scenario15: As an administrator user I want to update mywebsite social accounts
    Given I navigate to page "<LOGIN_URL>"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I wait for 1 seconds
    When I enter password "<PASSWORD>"
    And I wait for 1 seconds
    When I click the login button
    And I wait for 3 seconds
    When I click the settings button
    And I wait for 1 seconds
    When I click the general button
    And I wait for 1 seconds
    When I click the social accounts expand button
    And I wait for 1 seconds
    When I enter a facebook website "https://www.facebook.com/ghost"
    And I wait for 1 seconds
    When I enter a twitter website "https://www.twitter.com/ghost"
    And I wait for 1 seconds
    When I click the save button
    And I wait for 1 seconds
    Then I see the success update title message
