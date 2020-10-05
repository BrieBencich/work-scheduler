$(document).ready(function(){ 
    // eventlistener for save button 
    $(".saveBtn").on("click", function() { 
        // get values of value and time 
        var value = $(this).siblings(".description").val(); 
        var time = $(this).parent().attr("id"); 

        // save to localstorage
        localStorage.setItem(time, value); 
    });

    hourUpdater(); 

// see if intervals on time need to be updated 
var interval = setInterval(hourUpdater, 15000); 

// save hourly schedule to localstorage 
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10")); 
$("#hour-11 .description").val(localStorage.getItem("hour-11")); 
$("#hour-12 .description").val(localStorage.getItem("hour-12")); 
$("#hour-13 .description").val(localStorage.getItem("hour-13")); 
$("#hour-14 .description").val(localStorage.getItem("hour-14")); 
$("#hour-15 .description").val(localStorage.getItem("hour-15")); 
$("#hour-16 .description").val(localStorage.getItem("hour-16")); 
$("#hour-17 .description").val(localStorage.getItem("hour-17")); 

//dispaly current day on top of the page 
$("#currentDay").text(moment().format("dddd, MMMM Do")); 
}); 

    function hourUpdater() { 
        // current number of hours 
        var currentHour = moment().hours(); 

        //loop each time block 
        $(".time-block").each(function() { 
            var blockHour = parseInt($(this).attr("id").split("-")[1]); 

            // see if we are past this time 

        if (blockHour < currentHour) { 
            $(this).addClass("past"); 
        }

    else if (blockHour === currentHour) { 
        $(this).removeClass("past"); 
        $(this).addClass("present"); 
       }
       else { 
           $(this).removeClass("past"); 
           $(this).removeClass("present"); 
           $(this).addClass("future"); 
        }
    });
} 
