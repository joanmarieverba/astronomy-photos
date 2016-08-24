
var url = "https://api.nasa.gov/planetary/apod?api_key=qyWNL5v6NxLOzatBHuyHwGmptvveVEGLGIi6hUGf";
var months = ["placeholder", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

$body = $("body");

$(document).bind({
   ajaxStart: function() { $body.addClass("loading");   },
   ajaxStop:  function() { $body.removeClass("loading");}
});


$.ajax({

  url: url,
  success: function(result){
    console.log(result);
  if("copyright" in result) {
    $("#copyright").text("Image Credits: " + result.copyright);
  }
  else {
    $("#copyright").text("Image Credits: " + "Public Domain");
  }

  if(result.media_type == "video") {
    $("#apod_img_id").css("display", "none");
    $("#apod_vid_id").attr("src", result.url);
  }
  else {
    $("#apod_vid_id").css("display", "none");
    $("#apod_img_id").attr("src", result.url);
  }
  // $("#reqObject").text(url);
  // $("#returnObject").text(JSON.stringify(result, null, 4));
  $("#apod_explanation").text(result.explanation);
  $("#apod_title").text(result.title);
  // $("#apod_date").text(result.date);
  var date = result.date
  var year = date.substr(0,4);
  var monthDigit = date.substr(5,2);
  var day = date.substr(8,2);
  var monthNumber = parseInt(monthDigit,10);
  var month = months[monthNumber];
  console.log(day, monthDigit);
  var dateString = month + " " + day + ", " + year;
  $("#apod_date").text(dateString);

}
});
