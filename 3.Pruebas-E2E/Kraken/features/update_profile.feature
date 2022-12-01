Feature: Update profile

  @user1 @web
  Scenario: Scenario18: As an administrator user I want to update my profile
    Given I navigate to page "<LOGIN_URL>"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I wait for 1 seconds
    When I enter password "<PASSWORD>"
    And I wait for 1 seconds
    When I click the login button
    And I wait for 3 seconds
    When I click the user dropdown trigger
    And I wait for 1 seconds
    When I click the profile menu item
    And I wait for 1 seconds
    When I click the location input
    And I wait for 1 seconds
    When I enter location "My updated location"
    And I wait for 1 seconds
    When I enter website "http://myupdatedwebsite.com"
    And I wait for 1 seconds
    When I enter facebook profile "https://www.facebook.com/myusername"
    And I wait for 1 seconds
    When I enter twitter profile "https://www.twitter.com/myusername"
    And I wait for 1 seconds
    When I enter bio "My updated bio"
    And I wait for 1 seconds
    When I click the save button
    And I wait for 1 seconds
    Then I see the success update profile message

  @user2 @web
  Scenario: Scenario19: As an administrator user I want to change my password
    Given I navigate to page "<LOGIN_URL>"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I wait for 1 seconds
    When I enter password "<PASSWORD>"
    And I wait for 1 seconds
    When I click the login button
    And I wait for 3 seconds
    When I click the user dropdown trigger
    And I wait for 1 seconds
    When I click the profile menu item
    And I wait for 1 seconds
    When I click the old password input
    And I wait for 1 seconds
    When I enter the old password "<PASSWORD>"
    And I wait for 1 seconds
    When I enter the new password "<PASSWORD>"
    And I wait for 1 seconds
    When I confirm the new password "<PASSWORD>"
    And I wait for 1 seconds
    When I click the change password button
    And I wait for 1 seconds
    Then I see the success change password message

  @user3 @web
  Scenario: Scenario20: As an administrator user I want to ensure my password can not be changed if it is not correct
    Given I navigate to page "<LOGIN_URL>"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I wait for 1 seconds
    When I enter password "<PASSWORD>"
    And I wait for 1 seconds
    When I click the login button
    And I wait for 3 seconds
    When I click the user dropdown trigger
    And I wait for 1 seconds
    When I click the profile menu item
    And I wait for 1 seconds
    When I click the old password input
    And I wait for 1 seconds
    When I enter a wrong password "<WRONG_PASSWORD>"
    And I wait for 1 seconds
    When I enter the new password "<PASSWORD>"
    And I wait for 1 seconds
    When I confirm the new password "<PASSWORD>"
    And I wait for 1 seconds
    When I click the change password button
    And I wait for 1 seconds
    Then I see the error change password message
