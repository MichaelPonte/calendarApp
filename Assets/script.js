var currentDay = moment("2022111216", "YYYYMMDDH").format("MMMM Do YYYY, h:mm:ss a");
var todaysHour = moment("2022111216", "YYYYMMDDH").format() //YYYY-MM-DDThh:mm:ss-hh:mm
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

console.log(inputArray);

setInterval(function timeUpdate() { //1 second ticks, function runs every tick
   // currentDay = moment().format("MMMM Do YYYY, h:mm:ss a");
   // $("#currentDay").text(`Today is: ${currentDay}`);

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

}, 1000);
