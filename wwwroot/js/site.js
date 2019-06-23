// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


function UpdateCTime(){
    $.get("https://localhost:5001/Test/Updater", function(data){
        $("#TimerSlot_id").html(data);
    })
}
let ButtonSwitch=false;
let timer;
function SetAuto(){
    ButtonSwitch = ! ButtonSwitch;
    if(ButtonSwitch){
        $("#SetAuto_id").attr("class", "btn btn-primary");
        timer = setInterval(() => {
            UpdateCTime();
        }, 1000);
    }
    else{
        $("#SetAuto_id").attr("class", "btn btn-danger");
        clearInterval(timer);
    }
}