Feature: Crear tag

@user1 @web
Scenario: Scenario5: As an admin user I want to create a tag with just the name
    Given I navigate to page "<LOGIN_URL>"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD>"
    And I wait for 1 seconds
    And I click next
    And I wait for 3 seconds
    And I click on Tags section
    And I wait for 1 seconds
    And I click on New Tag button
    And I wait for 1 seconds
    And I set the tag name as "Nuevo tag1"
    And I wait for 1 seconds
    And I click on the save button
    And I wait for 1 seconds
    Then I expect to find the saved button

@user2 @web
Scenario: Scenario6: As an admin user I want to create a tag with the name, a specific slug and a description
    Given I navigate to page "<LOGIN_URL>"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD>"
    And I wait for 1 seconds
    And I click next
    And I wait for 3 seconds
    And I click on Tags section
    And I wait for 1 seconds
    And I click on New Tag button
    And I wait for 1 seconds
    And I set the tag name as "Nuevo tag1"
    And I wait for 1 seconds
    And I set the slug name as "slugSample"
    And I wait for 1 seconds
    And I set the description as "This is the description"
    And I wait for 1 seconds
    And I click on the save button
    And I wait for 1 seconds
    Then I expect to find the saved button

@user3 @web
Scenario: Scenario7: As an admin user I want to create a tag with just the name and a facebook card
    Given I navigate to page "<LOGIN_URL>"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD>"
    And I wait for 1 seconds
    And I click next
    And I wait for 3 seconds
    And I click on Tags section
    And I wait for 1 seconds
    And I click on New Tag button
    And I wait for 1 seconds
    And I set the tag name as "Nuevo tag"
    And I wait for 1 seconds
    And I select the facebook card section
    And I wait for 1 seconds
    And I set the title "Mi titulo de tarjeta" in the facebook card
    And I wait for 1 seconds
    Then I expect to see the facebook card preview with title "Mi titulo de tarjeta"
    And I click on the save button
    And I wait for 1 seconds
    Then I expect to find the saved button

@user4 @web
Scenario: Scenario8: As an admin user I want to get back to the list of tags without saving the changes of the new tag
    Given I navigate to page "<LOGIN_URL>"
    And I wait for 3 seconds
    When I enter email "<USERNAME>"
    And I wait for 1 seconds
    And I enter password "<PASSWORD>"
    And I wait for 1 seconds
    And I click next
    And I wait for 3 seconds
    And I click on Tags section
    And I wait for 1 seconds
    And I click on New Tag button
    And I wait for 1 seconds
    And I set the tag name as "Nuevo tag"
    And I wait for 1 seconds
    And I click on Tags section
    And I wait for 1 seconds
    And I click on the leave button
    Then I expect to find the title Tags of the previous section

