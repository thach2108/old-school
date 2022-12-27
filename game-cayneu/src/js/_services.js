var App = (function (app) {
  /**
   * Init Services Object;
   */

  app.Services = {};

  // addEventListener support for IE8
  app.Services.bindEvent = function(element, eventName, eventHandler) {
    if (element.addEventListener) {
      element.addEventListener(eventName, eventHandler, false);
    } else if (element.attachEvent) {
      element.attachEvent('on' + eventName, eventHandler);
    }
  }

  app.Services.sendMessage = function(msg) {
    // Make sure you are sending a string, and to stringify JSON
    window.parent.postMessage(msg, '*');
  }

  /**
   * Get Number random between min - max
   */
  app.Services.getNumberRandomBetween = function (max, min) {
    min = min || 0;
    return Math.floor(Math.random() * max) + min;
  };

  app.Services.isMobile = function () {
    if (app.Variables.width_window <= 1024) {
      return true;
    }
    return false;
  };

  app.Services.scaleX = function () {
    return App.Variables.game.width / app.Constants.BASE_WIDTH;
  };
  app.Services.scaleY = function () {
    return App.Variables.game.height / app.Constants.BASE_HEIGHT;
  };

  /**
   * lấy thông tin từ 1 đường link bằng tên sư dụng cách tách chuỗi
   */
  app.Services.getParameterByName = function (name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  /**
   * get info from current url
   */
  app.Services.GetObjectFromUrl = function () {
    var currentURL = document.URL;
    var urlIdExercise = App.Services.getParameterByName("exercise_id", currentURL);
    var urlToken = App.Services.getParameterByName("token", currentURL);
    var urlusername = App.Services.getParameterByName("username", currentURL);

    return { username: urlusername, token: urlToken, exerciseid: urlIdExercise };
  }

  /**
   * call json
   */
  app.Services.getDataRes = function (callback, callerr) {
    if (App.jsonKH) {

      var dataObj = app.Services.GetObjectFromUrl();

      App.Http.postHeaders(app.Constants.linkData, dataObj,
        function (data) {
          App.Log.w(data, 'DATA');
          if (typeof data === "object") {

            callback(data);
          } else {
            callback(JSON.parse(data));
          }
        },
        function (err) {
          App.Log.w(err, 'ERR');
          callerr(err);
        }
      );

    } else {
      App.Http.get(app.Constants.linkData0,
        function (data) {
          App.Log.w(data, 'DATA');
          if (typeof data === "object") {

            callback(data);
          } else {
            callback(JSON.parse(data));
          }
        },
        function (err) {
          App.Log.w(err, 'ERR');
          callerr(err);
        }
      );
    }
  }
  return app;

}(App || {}));