Feature: Create post

@user10 @web
Scenario: Scenario25: As an admin user, I want to create a post with wrong tags
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
    And I set the tags "postWrongTags"
    And I wait for 1 seconds
    And I publish the post
    And I wait for 1 seconds
    And I confirm the publishing post
    And I wait for 1 seconds
    And I double confirm the publishing post
    And I wait for 2 seconds
    Then I see the post confirmation
    
@user11 @web
Scenario: Scenario26: As an admin user, I want to create a post with metadata
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
    And I click the settings button
    And I wait for 1 seconds
    And I select the meta data section
    And I wait for 1 seconds
    And I set the "postWordsTags" meta title
    And I wait for 1 seconds
    Then I see the title in the card preview
    And I wait for 1 seconds
    And I publish the post
    And I wait for 1 seconds
    And I confirm the publishing post
    And I wait for 1 seconds
    And I double confirm the publishing post
    And I wait for 2 seconds
    Then I see the post confirmation

@user12 @web
Scenario: Scenario27: As an admin user, I want to create a post with long metadata
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
    And I click the settings button
    And I wait for 1 seconds
    And I select the meta data section
    And I wait for 1 seconds
    And I set the "postLongTitle" meta title
    And I wait for 1 seconds
    Then I see the short title in the card preview
    And I wait for 1 seconds
    And I publish the post
    And I wait for 1 seconds
    Then I see the post meta error

