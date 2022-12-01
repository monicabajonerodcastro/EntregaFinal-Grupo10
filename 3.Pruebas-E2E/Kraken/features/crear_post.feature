Feature: Create post

@user1 @web
Scenario: Scenario1: As an admin user, I want to create a post
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
    And I set the "Titulo post" title
    And I wait for 1 seconds
    And I click into the post body
    And I wait for 1 seconds
    And I set the "Cuerpo post" body
    And I wait for 1 seconds
    And I publish the post
    And I wait for 1 seconds
    And I confirm the publishing post
    And I wait for 1 seconds
    And I double confirm the publishing post
    And I wait for 2 seconds
    Then I see the post confirmation


@user2 @web
Scenario: Scenario2: As an admin user, I want to create a post with a bookmark
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
    And I move to the body field
    And I wait for 1 seconds
    And I click on the add card button
    And I wait for 1 seconds
    And I select the bookmark option
    And I wait for 1 seconds
    And I write the url "https://www.uniandes.edu.co"
    And I wait for 1 seconds
    And I click into the post body
    And I wait for 1 seconds
    And I set the "Titulo post con bookmark" title
    And I wait for 5 seconds
    Then I see the preview of the bookmark
    And I wait for 1 seconds
    And I publish the post
    And I wait for 1 seconds
    And I confirm the publishing post
    And I wait for 1 seconds
    And I double confirm the publishing post
    And I wait for 2 seconds
    Then I see the post confirmation

@user3 @web
Scenario: Scenario3: As an admin user, I want to preview my post
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
    And I set the "Titulo post preview" title
    And I wait for 1 seconds
    And I click into the post body
    And I wait for 1 seconds
    And I set the "Cuerpo post preview" body
    And I wait for 1 seconds
    And I click on the preview button
    And I wait for 1 seconds
    Then I see the preview of the post

@user4 @web
Scenario: Scenario4: As an admin user, I want to create a post with a facebook card
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
    And I set the "Titulo post facebook card" title
    And I wait for 1 seconds
    And I click into the post body
    And I wait for 1 seconds
    And I set the "Cuerpo post facebook card" body
    And I wait for 1 seconds
    And I click on the post settings button
    And I wait for 1 seconds
    And I click on the facebook card
    And I wait for 1 seconds
    And I fill the title with "Título post en facebook" and the description with "Descripcion post en facebook"
    And I wait for 1 seconds
    Then I see the preview of the facebook card with the title "Título post en facebook" and the description "Descripcion post en facebook"
