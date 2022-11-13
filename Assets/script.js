var currentDay = moment().format("MMMM Do YYYY, h:mm:ss a");
$("#currentDay").text(`Today is: ${currentDay}`);

setInterval(function timeUpdate() {
    currentDay = moment().format("MMMM Do YYYY, h:mm:ss a");
    $("#currentDay").text(`Today is: ${currentDay}`);
}, 1000);


