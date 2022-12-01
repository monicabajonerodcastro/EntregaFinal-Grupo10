Feature: Update website

  @user1 @web
  Scenario: Scenario11: As an administrator user I want to update my website title
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
    When I click the title and description expand button
    And I wait for 1 seconds
    When I enter the new website title "My updated website title"
    When I click the save button
    And I wait for 1 seconds
    Then I see the success update title message

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

  @user3 @web
  Scenario: Scenario13: As an administrator user I want to update mywebsite meta data
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
    When I click the meta data expand button
    And I wait for 1 seconds
    When I enter the meta title "Group 20"
    And I wait for 1 seconds
    When I click the save button
    And I wait for 1 seconds
    Then I see the success update title message

  @user4 @web
  Scenario: Scenario14: As an administrator user I want to update mywebsite twitter card
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
    When I click the twitter data expand button
    And I wait for 1 seconds
    When I enter the twitter title "My updated website title"
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
    When I enter a twitter website "https://www.twiite.com/ghost"
    And I wait for 1 seconds
    When I click the save button
    And I wait for 1 seconds
    Then I see the success update title message
