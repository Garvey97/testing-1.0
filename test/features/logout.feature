Feature: Verify logout functionality

  Scenario: User logs out from the website
    Given User is logged in
    When User clicks on the logout button
    Then User should be logged out successfully
