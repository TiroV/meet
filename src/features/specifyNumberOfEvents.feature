Feature: SPECIFY NUMBER OF EVENTS

    Scenario: When user hasn’t specified a number, 32 is the default number.
        Given the user is on the main page of the app
        When the user hasn’t specified a number of events
        Then the default number of displayed events will be thirty two

