Feature: Create post

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


@user7 @web
Scenario: Scenario07: As an admin user, I want to create a post with a past date
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
    And I set the date "postPastDate"
    And I wait for 1 seconds
    And I publish the post
    And I wait for 1 seconds
    And I confirm the publishing post
    And I wait for 1 seconds
    And I double confirm the publishing post
    And I wait for 2 seconds
    Then I see the post confirmation

@user8 @web
Scenario: Scenario08: As an admin user, I want to create a post with tags
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
    And I set the tags "postWordsTags"
    And I wait for 1 seconds
    And I publish the post
    And I wait for 1 seconds
    And I confirm the publishing post
    And I wait for 1 seconds
    And I double confirm the publishing post
    And I wait for 2 seconds
    Then I see the post confirmation

@user9 @web
Scenario: Scenario09: As an admin user, I want to create a post with a long tag
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
    And I set the tags "postSentenceTags"
    And I wait for 1 seconds
    And I publish the post
    And I wait for 1 seconds
    And I confirm the publishing post
    And I wait for 1 seconds
    And I double confirm the publishing post
    And I wait for 2 seconds
    Then I see the post error

@user10 @web
Scenario: Scenario10: As an admin user, I want to create a post with wrong tags
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