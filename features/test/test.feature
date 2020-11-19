Feature: this is a feature testing
    feature description for this new feature testing
@test
Scenario Outline: Scenario Outline for do a search on google
   Given I go to the google page
   When I enter a text "<textToSearch>"
   And I click on search button
   Then I should found the text searched "<textToSearch>" in the results page

   Examples:
       | textToSearch  | 
       | Lima          | 
