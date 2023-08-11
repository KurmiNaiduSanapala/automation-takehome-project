Feature: Store lowest prices from Amazon search results in CSV

  Scenario: Change theme
    Given Go to defined website
    When I enter "shoes" in search
    And I click Go and fetch results
    And I filter 3 lowest product information
    Then I write into csv file
