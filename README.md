## BRIEF DISCRIPTION

In this project, browser based Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.  This is completely browser based, heavily employs Javascript and JQuery in its logic and CSS and HTML in presentation. Local storage is employed as a placeholder for non critical data.

## REQUIREMENT
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

## APPROACH

The approach adopted is as follows:

1. A pseudocode was developed in a rough sketch, itemizing the concepts, fuctions, the variables and how they will beconsumed.
2. The base HTML pages are coded.
3. Basic styling was applied to differentiate the codes.
4. Tags are applied to each object/element that needs to be targeted to achieve a particular feature.
5. Each base function was coded using Javascript and JQUERY maily.
6. Error checking and fail conditions are checked in the logic and bugs fixed.
7. Naming, Tagging and references are updated to reflect updated logic.
8. Final polishing was applied using CSS.
9. Code was refactored and restested.
10. Few more features were added and old features are optimized.
11. Final code was uploaded to github

## GENERAL DESCRIPTION

The finished work is made up of the following:

1. One main landing HTML page (index.html).
2. One calendar logic page (scripts.js)
3. One styling sheet ( style.css)

## RELEVANT POINTS

- Local Storage was employed as placeholder for values in this project.
- Local system time is the source of ALL references to time.
- Functions are employed wherever possible to make the product a bit modular.
- I had a close look at moment.js but tried my hands on hacking newDate() to extract similar values.
- There was not outright requirement to stop updating past timeblocks. This can easily be applied by updating scripts.js line 98 to true.


