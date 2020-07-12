$(document).ready(function () {
  //  DOM ELEMENTS

  // setting variables for time based functions
  var timeEl = document.getElementById("currentDay");
  // $(".lead");
  var currentTime = new Date().getHours();

  // Call Back Function for time based functions
  setInterval(function () {
    timeEl.innerHTML = moment().format("MMMM Do YYYY, h:mm:ss a");
    colorChange();
  }, 1000);

  // Loop to create Rows and Columns
  var divRow;
  var ColumnLeft;
  var time;

  var saveB;

  for (let i = 9; i < 18; i++) {
    divRow = $("<div>").addClass("row");
    $(".container").append(divRow);
    console.log("check");

    ColumnLeft = $("<div>").addClass("col-md-2 hour");
    time = $("<time>");
    ColumnLeft.html(timeConversion(i));
    ColumnLeft.append(time);
    divRow.append(ColumnLeft);

    var ColumnMiddle = $("<div>").addClass("col-md-8 description");
    ColumnMiddle.attr("id", "cm" + i);
    var textArea = $("<textarea>");
    textArea.attr("value", i);
    ColumnMiddle.append(textArea);
    divRow.append(ColumnMiddle);

    var ColumnRight = $("<div>").addClass("col-md-2");
    saveB = $("<button>").addClass("saveBtn");
    saveB.attr("type", "submit");
    saveB.attr("value", i);
    ColumnRight.append(saveB);
    divRow.append(ColumnRight);

    getData(i);
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

  //save input data

  // var saveBtn = $(".saveBtn");
  var commentId;
  var commentText;

  // local storage
  function getData(data) {
    var entry = localStorage.getItem(data);
    console.log("before if " + entry);
    if (entry !== null) {
      console.log("!==null");
      // $("#cm" + data).text(entry);
      $("#cm" + data)
        .children()
        .val(entry);
    } else {
    }
  }

  // USER input===================

  // $( "#dataTable tbody tr" ).on( "click", function() {
  //   console.log( $( this ).text() );
  // });

  // saveB.addEventListener("click", function () {
  //   console.log("savB is here!");
  // });

  // $(document).on('click', '.saveBtn', function () {

  $(document).on("click", ".saveBtn", function () {
    event.preventDefault();
    console.log("im here");
    var entryID = $(this).val();
    console.log(entryID);
    var entryText = $(this)
      .parent(".col-md-2")
      .siblings(".col-md-8")
      .children()
      .val();
    console.log(entryText);
    localStorage.setItem(entryID, entryText);
  });

  // Display based on user input===========================
});
