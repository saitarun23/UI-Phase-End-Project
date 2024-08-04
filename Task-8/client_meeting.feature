Feature: Client and Client Meeting Scenarios

  # Scenario 1: Scheduling a Client Meeting
  Scenario: Scheduling a meeting with a client
    Given I am logged in as a project manager
    When I navigate to the "Client Meetings" section
    And I click on "Schedule a Meeting"
    And I fill in the client details
      | Client Name  | Contact Information |
      | Acme Corp    | acme@corp.com      |
    And I select a date and time for the meeting
      | Date       | Time    |
      | 2024-08-15 | 10:00 AM |
    And I add a meeting agenda
      | Agenda Item          |
      | Project Kick-off Call |
    And I click "Save"
    Then the meeting should be scheduled successfully
    And the client should receive a notification email

  # Scenario 2: Updating a Client Meeting
  Scenario: Updating the details of a scheduled meeting
    Given I am logged in as a project manager
    And I have an existing meeting scheduled with Acme Corp on 2024-08-15 at 10:00 AM
    When I navigate to the "Client Meetings" section
    And I select the meeting with Acme Corp
    And I click "Edit"
    And I change the meeting date to 2024-08-16
    And I update the agenda to "Project Kick-off and Budget Discussion"
    And I click "Save"
    Then the meeting details should be updated successfully
    And the client should receive an updated notification email

  # Scenario 3: Cancelling a Client Meeting
  Scenario: Cancelling a scheduled meeting with a client
    Given I am logged in as a project manager
    And I have an existing meeting scheduled with Acme Corp on 2024-08-15 at 10:00 AM
    When I navigate to the "Client Meetings" section
    And I select the meeting with Acme Corp
    And I click "Cancel"
    And I confirm the cancellation
    Then the meeting should be cancelled successfully
    And the client should receive a cancellation notification email
