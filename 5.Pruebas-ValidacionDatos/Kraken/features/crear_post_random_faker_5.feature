Feature: Create post

@user13 @web
Scenario: Scenario28: As an admin user, I want to create a post with a facebook card
    Given I navigate to page "<LOGIN_URL>"
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
    And I click on the facebook card
    And I wait for 1 seconds
    And I fill the facebook data with "postWordsTags" 
    And I wait for 1 seconds
    Then I see the preview of the facebook card

@user14 @web
Scenario: Scenario29: As an admin user, I want to create a post with a facebook card
    Given I navigate to page "<LOGIN_URL>"
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
    And I click on the facebook card
    And I wait for 1 seconds
    And I fill the facebook data with "postSentenceTags" 
    And I wait for 1 seconds
    Then I see the preview of the long facebook card

@user15 @web
Scenario: Scenario30: As an admin user, I want to create a post with the email content
    Given I navigate to page "<LOGIN_URL>"
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
    And I click into the add button
    And I wait for 1 seconds
    And I click into the email content button
    And I wait for 1 seconds
    And I set the content "postShortBody" into the box
    And I wait for 1 seconds
    And I publish the post
    And I wait for 1 seconds
    And I confirm the publishing post
    And I wait for 1 seconds
    And I double confirm the publishing post
    And I wait for 2 seconds
    Then I see the post confirmation