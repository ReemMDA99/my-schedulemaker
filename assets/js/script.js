//Get current day using moment.js
var currentDay = moment().format("dddd, MMMM Do");

//Set each timeblock in the daily schedule using moment.js
var hour6 = moment().hour(6);
var hour7 = moment().hour(7);
var hour8 = moment().hour(8);
var hour9 = moment().hour(9);
var hour10 = moment().hour(10);
var hour11 = moment().hour(11);
var hour12 = moment().hour(12);
var hour13 = moment().hour(13);
var hour14 = moment().hour(14);
var hour15 = moment().hour(15);
var hour16 = moment().hour(16);
var hour17 = moment().hour(17);


//Create an array of hour blocks for code generation
var hours = [hour6, hour7, hour8, hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17];

//Get local storage data or set to empty
var events6 = JSON.parse(localStorage.getItem('hour6')) || "";
var events7 = JSON.parse(localStorage.getItem('hour7')) || "";
var events8 = JSON.parse(localStorage.getItem('hour8')) || "";
var events9 = JSON.parse(localStorage.getItem('hour9')) || "";
var events10 = JSON.parse(localStorage.getItem('hour10')) || "";
var events11 = JSON.parse(localStorage.getItem('hour11')) || "";
var events12 = JSON.parse(localStorage.getItem('hour12')) || "";
var events13 = JSON.parse(localStorage.getItem('hour13')) || "";
var events14 = JSON.parse(localStorage.getItem('hour14')) || "";
var events15 = JSON.parse(localStorage.getItem('hour15')) || "";
var events16 = JSON.parse(localStorage.getItem('hour16')) || "";
var events17 = JSON.parse(localStorage.getItem('hour17')) || "";

//Generate all timeblocks and insert saved local storage data
$.each(hours, function (index, value) {
    events = [events6, events7, events8, events9, events10, events11, events12, events13, events14, events15, events16, events17]
    $(".container").append("<div class= 'row'><div class = 'col-2 hour text-right' id= 'hour" +
    (index + 6) + "'><span>" + value.format("h A") + "</span></div><div class='col-8 event-group' id='timeblock" +
    (index + 6) + "'><textarea class='events col-12' id='eventblock" + (index + 9) + "'>" + events[index] + "</textarea></div>" +
    "<div class='col-2 save-delete' id='save-delete" + (index + 9) + "'><i class='fas fa-save' title='Save Event'></i> <i class='fas fa-trash alt' title='Remove Event'></i></div></div></div>");
});

// Display current day at top of planner
$("#currentDay").text(currentDay);

//Audit each time block to display current, past and future timeblocks

var auditTime = function () {
    currentTime = moment().format("hh:mm:ss");
 $("#currentDay").text(currentTime);

}
auditTime();