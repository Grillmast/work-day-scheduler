$(document).ready(function () {
    let currentDate = dayjs().format("MM-DD-YYYY");
    $('#currentDay').text(currentDate);
    let presentTime = dayjs().format("H");
    hourColor();
    function hourColor() {
      $(".row").each(function() {
        let userInput = parseInt($(this).attr("value"));
        if (userInput < presentTime) {
          $(this).addClass("past");
        } else if (userInput == presentTime) {
          $(this).addClass("present");
        } else if (userInput > presentTime) {
          $(this).addClass("future");
        }
      })
    }
  
    $(".saveBtn").on("click", function () {
      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
  
      localStorage.setItem(time, text);
  })
  
  
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    $("#hour-18 .description").val(localStorage.getItem("hour-18"));
  
  })