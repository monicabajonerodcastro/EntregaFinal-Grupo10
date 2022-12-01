Feature: Create page

  @user1 @web
  Scenario: Scenario9: As an administrator user I want to create a page
    Given I navigate to page "<LOGIN_URL>"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I wait for 1 seconds
    When I enter password "<PASSWORD>"
    And I wait for 1 seconds
    When I click the login button
    And I wait for 3 seconds
    When I click the page menu item
    And I wait for 1 seconds
    When I click the new page button
    And I wait for 1 seconds
    When I enter the title "My first page title"
    And I wait for 1 seconds
    When I click the page body editor
    And I wait for 1 seconds
    When I enter the body "My first page body"
    And I wait for 1 seconds
    When I click the publish button
    And I wait for 1 seconds
    When I click the continue button
    And I wait for 1 seconds
    When I click the confirm button
    And I wait for 3 seconds
    Then I see the success page creation message

  @user2 @web
  Scenario: Scenario10:As an administrator user I want to create a page with a feature image
    Given I navigate to page "<LOGIN_URL>"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I wait for 1 seconds
    When I enter password "<PASSWORD>"
    And I wait for 1 seconds
    When I click the login button
    And I wait for 3 seconds
    When I click the page menu item
    And I wait for 1 seconds
    When I click the new page button
    And I wait for 1 seconds
    When I click the add feature image button from Unsplash
    And I wait for 10 seconds
    When I select the first image
    And I wait for 10 seconds
    When I click the page title input
    And I wait for 1 seconds
    When I enter the title "My first page title"
    And I wait for 1 seconds
    When I click the page body editor
    And I wait for 1 seconds
    When I enter the body "My first page body"
    And I wait for 1 seconds
    When I click the publish button
    And I wait for 1 seconds
    When I click the continue button
    And I wait for 1 seconds
    When I click the confirm button
    And I wait for 3 seconds
    Then I see the success page creation message
