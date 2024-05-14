Feature: Add items to the shopping cart

  Scenario: User adds a product to the shopping cart
    Given User is logged in
    When User navigates to the product page
    And User adds "Sauce Labs Backpack" to the cart
    Then The product "Sauce Labs Backpack" should be added to the shopping cart
