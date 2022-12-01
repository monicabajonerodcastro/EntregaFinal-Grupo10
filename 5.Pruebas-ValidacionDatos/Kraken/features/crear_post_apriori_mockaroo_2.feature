Feature: Create post

@user4 @web
Scenario: Scenario04: As an admin user, I want to create a post with custom URL
    Given I navigate page "<LOGIN_URL>"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD>"
    And I wait for 1 seconds
    And I click next
    And I wait for 3 seconds
    And I click on new post
    And I wait for 1 seconds
    And I set the "postShortTitle" title
    And I wait for 1 seconds
    And I click into the post body
    And I wait for 1 seconds
    And I set the "postShortBody" body
    And I wait for 1 seconds
    And I click the settings button
    And I wait for 1 seconds
    And I set the url "postRigthUrl"
    And I wait for 1 seconds
    And I publish the post
    And I wait for 1 seconds
    And I confirm the publishing post
    And I wait for 1 seconds
    And I double confirm the publishing post
    And I wait for 2 seconds
    Then I see the post confirmation

@user5 @web
Scenario: Scenario05: As an admin user, I want to create a post with bad URL
    Given I navigate page "<LOGIN_URL>"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD>"
    And I wait for 1 seconds
    And I click next
    And I wait for 3 seconds
    And I click on new post
    And I wait for 1 seconds
    And I set the "postShortTitle" title
    And I wait for 1 seconds
    And I click into the post body
    And I wait for 1 seconds
    And I set the "postShortBody" body
    And I wait for 1 seconds
    And I click the settings button
    And I wait for 1 seconds
    And I set the url "postWrongUrl"
    And I wait for 1 seconds
    And I publish the post
    And I wait for 1 seconds
    And I confirm the publishing post
    And I wait for 1 seconds
    And I double confirm the publishing post
    And I wait for 2 seconds
    Then I see the post confirmation

@user6 @web
Scenario: Scenario06: As an admin user, I want to create a post with a future date
    Given I navigate page "<LOGIN_URL>"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD>"
    And I wait for 1 seconds
    And I click next
    And I wait for 3 seconds
    And I click on new post
    And I wait for 1 seconds
    And I set the "postShortTitle" title
    And I wait for 1 seconds
    And I click into the post body
    And I wait for 1 seconds
    And I set the "postShortBody" body
    And I wait for 1 seconds
    And I click the settings button
    And I wait for 1 seconds
    And I set the date "postFutureDate"
    And I wait for 1 seconds
    And I publish the post
    And I wait for 1 seconds
    Then I see the error with the dates