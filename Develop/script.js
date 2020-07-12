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

// LOCAL Storage

// DOM ELEMENTS ==============================
var timeEl = document.getElementById("currentDay");
$(".lead");

timeEl.innerHTML = moment().format("MMMM Do YYYY, h:mm:ss a");

// CREATING BOOTSTRAP RESPONSIVE ROWS AND COLUMNS
// var divRow;
// var ColumnLeft;
// var ColumnMiddle;
// var ColumnRight;
// var time;
// var textArea;
// var saveB;

for (let i = 9; i < 18; i++) {
  var divRow = $("<div>").addClass("row");
  $(".container").prepend(divRow);
  console.log("check");

  var ColumnLeft = $("<div>").addClass("col-md-2 hour");
  // ColumnLeft.setAttribute("class", "col-md-2 hour");
  var time = $("<time>");
  //   time.setAttribute("class", "hour");
  ColumnLeft.html(timeConversion(i));
  ColumnLeft.append(time);
  divRow.append(ColumnLeft);

  var ColumnMiddle = $("<div>").addClass("col-md-8 decription");
  // ColumnMiddle.setAttribute("class", "col-md-8 decription");
  ColumnMiddle.attr("id", "cm" + i);
  var textArea = $("<textarea>");
  textArea.attr("value", i);
  ColumnMiddle.append(textArea);
  divRow.append(ColumnMiddle);

  var ColumnRight = $("<div>").addClass("col-md-2");
  // ColumnRight.setAttribute("class", "col-md-2");
  var saveB = $("<button>").addClass("saveBtn");
  // saveB.setAttribute("class", "saveBtn");
  saveB.attr("value", i);
  ColumnRight.append(saveB);
  divRow.append(ColumnRight);

  storedData(i);
}

// FUNCTIONS=========================

// converting AM to PM for Left Column
function timeConversion(num) {
  var amToPm;
  if (num <= 11) {
    amToPm = num + "am";
  } else if (num === 12) {
    amToPm = num + "pm";
  } else {
    amToPm = num - 12 + "pm";
  }
  return amToPm;
}

// local storage
function storedData(data) {
  var entry = localStorage.getItem(data);
  if (entry !== null) {
    $("#cm" + data).text(entry);
  }
}

// USER input===================

saveB.on("click", function () {
  event.preventDefault();
  var entryID = $(this).val();
  var entryText = $(this).parent().sibling().children(".description").val();
  localStorage.setItem(entryID, entryText);
  console.log(entryID);
  console.log(entryText);
});

// Display based on user input===========================
