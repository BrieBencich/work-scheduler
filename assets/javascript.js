$(document).ready(function(){ 
    // eventlistener for save button 
    $(".saveBtn").on("click", function() { 
        // get values of value and time 
        var value = $(this).siblings(".desctiption").val(); 
        var time = $(this).parent().attr("id"); 

        // save to localstorage
        localStorage.setItem(time, value); 
    });
})