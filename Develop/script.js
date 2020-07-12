// DOM ELEMENTS

// setting variables for time based functions (time of day/ color change)
var timeEl = document.getElementById("currentDay");
// $(".lead");
var currentTime = new Date().getHours();

setInterval(function () {
  timeEl.innerHTML = moment().format("MMMM Do YYYY, h:mm:ss a");
  colorChange();
}, 1000);

for (let i = 9; i < 18; i++) {
  var divRow = $("<div>").addClass("row");
  $(".container").append(divRow);
  console.log("check");

  var ColumnLeft = $("<div>").addClass("col-md-2 hour");
  // ColumnLeft.setAttribute("class", "col-md-2 hour");
  var time = $("<time>");
  //   time.setAttribute("class", "hour");
  ColumnLeft.html(timeConversion(i));
  ColumnLeft.append(time);
  divRow.append(ColumnLeft);

  var ColumnMiddle = $("<div>").addClass("col-md-8 decription");
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

// HELPER FUNCTIONS=========================

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

function colorChange() {
  for (let i = 9; i < 18; i++) {
    var idColMid = $(`#cm${i}`);
    if (i === currentTime) {
      idColMid.addClass("present");
    } else if (i > currentTime) {
      idColMid.addClass("future");
    } else if (i < currentTime) {
      idColMid.addClass("past");
    }
  }
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
