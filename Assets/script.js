//moment clocks
var currentDay = moment().format("MMMM Do YYYY, h:mm:ss a");
var todaysHour = moment().format() //YYYY-MM-DDThh:mm:ss-hh:mm
$("#currentDay").text(`Today is: ${currentDay}`);

var input9 = $("#9am");
var input10 = $("#10am");
var input11 = $("#11am");
var input12 = $("#12pm");
var input13 = $("#1pm");
var input14 = $("#2pm");
var input15 = $("#3pm");
var input16 = $("#4pm");
var input17 = $("#5pm");

var inputArray = [input9, input10, input11, input12, input13, input14, input15, input16, input17]

setInterval(function timeUpdate() { //200ms ticks, runs 1/tick for quick updates
   currentDay = moment().format("MMMM Do YYYY, h:mm:ss a");
   $("#currentDay").text(`Today is: ${currentDay}`);

    var justHour = todaysHour.slice(11,13).trim(); //justHour = current hour in 24hr

    //Checks if time begins with "0" and removes it
    if ((justHour.indexOf("0", 0, 0) === 0)) {
        justHour = justHour.replace("0", "")
    }

    //Changes background color for text areas depending on time
    for (i = 0; i <= 8; i++) {
        if ((i+9) < justHour) {
            inputArray[i].css("background-color", "rgb(172, 172, 172)")
        } else if ((i+9) == justHour) {
            inputArray[i].css("background-color", "rgba(47, 255, 238, 0.8)")
        } else {
            inputArray[i].css("background-color", "rgba(119, 221, 119, 0.8)")
        }
    }

}, 200);

function renderSaved () { //renders teh text from memory into each position
  $(input9).val(localStorage.getItem("9am"));
  $(input10).val(localStorage.getItem("10am"));
  $(input11).val(localStorage.getItem("11am"));
  $(input12).val(localStorage.getItem("12pm"));
  $(input13).val(localStorage.getItem("1pm"));
  $(input14).val(localStorage.getItem("2pm"));
  $(input15).val(localStorage.getItem("3pm"));
  $(input16).val(localStorage.getItem("4pm"));
  $(input17).val(localStorage.getItem("5pm"));
}



$(".saveBtn").click(function(event) { //Checks for a click

    if (element.matches(".saveBtn") === true) { //Checks if click was on save button
        var text = $(element).parent().children(".form-control").val() //sets text to value in textbox currently
        var field = $(element).parent().children(".form-control") //sets field to text box of pressed save button
        
        if ($(field).attr("id") == "9am") { //saves text to memory for appropriate text box
            localStorage.setItem("9am", text);
        } else if ($(field).attr("id") == "10am") {
            localStorage.setItem("10am", text);
        } else if ($(field).attr("id") == "11am") {
            localStorage.setItem("11am", text);
        } else if ($(field).attr("id") == "12pm") {
            localStorage.setItem("12pm", text);
        } else if ($(field).attr("id") == "1pm") {
            localStorage.setItem("1pm", text);
        } else if ($(field).attr("id") == "2pm") {
            localStorage.setItem("2pm", text);
        } else if ($(field).attr("id") == "3pm") {
            localStorage.setItem("3pm", text);
        } else if ($(field).attr("id") == "4pm") {
            localStorage.setItem("4pm", text);
        } else if ($(field).attr("id") == "5pm") {
            localStorage.setItem("5pm", text);
        }
    }
});

renderSaved(); //renders text from memory at start of application