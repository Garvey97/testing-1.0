Feature: Verify product list functionality

  Scenario: User views the list of products after login
    Given User is logged in
    When User navigates to the product list page
    Then User should see the list of available products
