# Meet App
Welcome to the readme file for the meet app! It is to be an application build using React that allows a person to find events going on in their local area and to display the goings on in real time.

A list of Some Features:

## FEATURE 1: FILTER EVENTS BY CITY

User story: As a user, I should be able to filter events by city so that I can better navigate the app to find information pertinent to me.

Scenario 1: The user is browsing from all events and then decides to choose from events in their area
    Given  The user is on the front page
    When  The user wants to search for more detailed information
    Then  The user should be able to filter out information relevent to them

## FEATURE 2: SHOW/HIDE EVENT DETAILS

User story: As a user, I should be able to hide or show more information about events so that I can make better decisions about the information given.

Scenario 1: The user is interested in an event and clicks on it to find out more
    Given   The user is trying to find out more information about an information and clicks / taps to find out more
    When    The user interacts with the UI elements
    Then    The details will unfurl and show the user more information


## FEATURE 3: SPECIFY NUMBER OF EVENTS

User story: As a user, I should be able to tell the app to show more or less information so that I can take in the amount of information I want to.

Scenario 1:
    Given   That the user has to scroll through multiple pages of events
    When    The user wants to display more events at a time
    Then    The user can modify the amount of events displayed at a time


## FEATURE 4: USE THE APP OFFLINE

User story: As a user, I would want to be able to use the offline based on the information I last visited so I can use the app when the internet connection is out or when I lose service.

Scenario 1: The user is driving through an area with bad connection and wants to see the events stored before they lost connection

    Given   The user has visited the website at one point and had it loaded previous
    When    The user has visited the page before 
    Then    The page will display even without a current connection


## FEATURE 5: ADD AN APP SHORTCUT TO THE HOME SCREEN

User story: As a user, I would want an app shortcut on the home screen so I have quick and easy access to the application.

Scenario 1: The user is trying to set up the app on their phone in their car so that they can find an event to go to
    Given   That the user has downloaded the application and it is already on their phone
    When    The user clicks or taps the application, it should open quickly and responsively and without errors
    Then    The application will display its information and the user can access the page

