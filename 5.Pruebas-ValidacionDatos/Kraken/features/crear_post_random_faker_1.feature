Feature: Create post

@user1 @web
Scenario: Scenario16: As an admin user, I want to create a post
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
    And I publish the post
    And I wait for 1 seconds
    And I confirm the publishing post
    And I wait for 1 seconds
    And I double confirm the publishing post
    And I wait for 2 seconds
    Then I see the post confirmation

@user2 @web
Scenario: Scenario17: As an admin user, I want to create a post with a long title
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
    And I set the "postLongTitle" title
    And I wait for 1 seconds
    And I click into the post body
    And I wait for 1 seconds
    And I set the "postShortBody" body
    And I wait for 1 seconds
    Then I do not expect to see the publish button

@user3 @web
Scenario: Scenario18: As an admin user, I want to create a post with a long description
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
    And I set the "postLongBody" body
    And I wait for 1 seconds
    And I publish the post
    And I wait for 1 seconds
    And I confirm the publishing post
    And I wait for 1 seconds
    And I double confirm the publishing post
    And I wait for 2 seconds
    Then I see the post confirmation