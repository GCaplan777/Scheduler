// user can save events for each hour of the day
//  WHEN user opens the planner
// THEN the current day is displayed at the top of the calendar
// scrolling down shows timeblocks for standard business hours
// timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// // THEN I can enter an event
// save button for that timeblock
// THEN the text for that event is saved in local storage
// refresh the page
// THEN the saved events persist

// ROW = time, text, submit

// DOM ELEMENTS ==============================
var timeEl = document.getElementById("currentDay");
$(".lead");

timeEl.innerHTML = moment().format("MMMM Do YYYY, h:mm:ss a");

// CREATING BOOTSTRAP RESPONSIVE ROWS AND COLUMNS
for (let i = 0; i < 9; i++) {
  var divRow = document.createElement("div");
  divRow.setAttribute("class", "row");
  document.body.appendChild(divRow);
  console.log("check divRow");
  // create 3 columns inside each row

  var ColumnEl1 = document.createElement("div");
  ColumnEl1.setAttribute("class", "col-md-2");
  var time = document.createElement("time");
  time.setAttribute("class", "hour");
  ColumnEl1.appendChild(time);
  divRow.appendChild(ColumnEl1);

  var ColumnEl2 = document.createElement("div");
  ColumnEl2.setAttribute("class", "col-md-8");
  var textArea = document.createElement("TEXTAREA");
  ColumnEl2.appendChild(textArea);
  divRow.appendChild(ColumnEl2);

  var ColumnEl3 = document.createElement("div");
  ColumnEl3.setAttribute("class", "col-md-2");
  var saveB = document.createElement("BUTTON");
  saveB.setAttribute("class", "saveBtn");
  ColumnEl3.appendChild(saveB);
  divRow.appendChild(ColumnEl3);
}

// FUNCTIONS=========================

// local storage

// USER input===================

// Display based on user input===========================
