$(document).ready(function(){
  //code in here
});

App.Services.bindEvent(window, 'message', function (e) {
  App.Variables.messageFromIframe = e.data;
});

$(window).bind('resize load', function() {
  if ($(window).width() <= 1366) {
    $(".bg--learn").css("zoom", $(window).width() / 1366);    
    App.Log.w(screen.width,"auto zoom");
    App.Log.w($(window).width(),"auto zoom");
  }
});
