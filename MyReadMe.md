https://github.com/GCaplan777/Scheduler

https://gcaplan777.github.io/Scheduler/

![screenshot] {/Users/gabrielcaplan/Documents/BOOTCAMP/homework-repos/hw5 scheduler/MyReadMe.md}

Assignment: # 05 Third-Party APIs: Work Day Scheduler

I created a Daily Planner using a given html and CSS file. My work was in a blank JavaScript file.

I first wrote this in JavaScript, and as we learned about jQuery in class, I refactored to this library syntax.

I started reading through the HTML and CSS file and determining what I would need to create through the DOM to connect with elements and class names already given.

I started by creating time based elements to utilize .moment and have running clock for the header, and a color change function I would later be able to call.

I created my Rows, Columns and Buttons, first outside the loop to keep them global, and then created a loop, defining one row and three columns that would be looped 9 times to create my need timeblocks in the container.

I add class names, IDs, and values I would later call upon in my functions.

ColumnLeft contained hours, calling a function for time conversion to determine AM vs PM

ColumnMiddle had my text area

ColumnRight had my save button to connect to the listening event.

And I finished loop with "getData[i]"

My functions started with a timeconversion for AM to PM for textarea.

I had a "colorChnage" function set up to take currentTime with if / else if /else statement to color class names predetermined in CSS.

I set up local storage to get what is set in local storage in the next function. This is saved from textarea after the submit button has been hit, "submit".

I then had my eventlistener to listen for the submit and process the info. I need to set up the first line " \$(document).on("click", ".saveBtn", function ()" to prevent bubbling when the button was submitted.
