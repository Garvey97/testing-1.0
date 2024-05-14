Feature: Checkout process for purchasing items

  Scenario: User completes the checkout process
    Given User is logged in
    When User adds "Sauce Labs Backpack" to the cart
    And User proceeds to checkout
    And User enters checkout information
    And User confirms the purchase
    Then User should see the order confirmation
