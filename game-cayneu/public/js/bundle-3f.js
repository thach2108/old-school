// libray
(function($) {
  $.fn.getNumbByPx = function(css) {
      var Css = $(this).css(css);
      var length = Css.length;
      var numb = Number(Css.slice(0, (length - 2)));
      return numb;
    },

    $.fn.disable = function() {
      return this.each(function() {
        if ($(this).hasClass("active")) {
          $(this).removeClass("active")
        }
        $(this).addClass("disable");
      });
    },

    $.fn.active = function(s) {
      return this.each(function() {
        if ($(this).hasClass("disable")) {
          $(this).removeClass("disable");
        }
        if (s) {
          $(this).addClass("active");
        } else {
          $(this).removeClass("active");
        }
      });
    }
}(jQuery));

var N = 0;

var App = (function(app) {


  /**
   * init variables
   */
  app.Variables = {};

  app.Variables.messageFromIframe;
  /**
   *  init Game
   */
  app.Variables.Game;
  /**
   * init setinterval
   */
  app.Variables.setInterval = {
    event_listen: "",
    load_percent: "",
    time: 1
  };
  /**
   * 
   */
  app.Variables.firstRunLandscape;
  /**
   * app.Variables.width_window
   */
  app.Variables.width_window = screen.width;
  /**
   * Data 
   */
  app.Variables.Data;
  /**
   * 
   */
  app.Variables.learn_item;
  /**
   * init sound
   */
  app.Variables.sound = {
    count_sound: 0
	};
	/**
	 * 
	 */
	app.Variables.TimePlay = 30;
  return app
}(App || {}));

var App = (function(app) {

  // Create Log Module
  app.Log = {
    enable: false
  };

  //Check if Log is Enabled
  app.Log.isEnabled = function() {
    return this.enable;
  };

  //Write log to console
  app.Log.write = function(content, prefix) {
    var _prefix = prefix || "Default Logging";
    if (this.enable) {
      console.log("---BEGIN " + _prefix + "---");
      console.log(content);
      console.log("---END " + _prefix + "---");
    }
  };

  //Write log string in one line
  app.Log.writeString = function(content, prefix) {
    var _prefix = prefix || "Log Tag: ";
    if (this.enable) {
      console.log(_prefix + " : " + content);
    }
  };

  //Write method log
  app.Log.writeMethod = function(name) {
    if (this.enable) {
      console.log("[ Method Logging ] ---" + name + "()");
    }
  }

  //Method aliases
  app.Log = {
    w: app.Log.write,
    ws: app.Log.writeString,
    m: app.Log.writeMethod
  };

  return app;

}(App || {}));
var App = (function(app) {

  //init HTTP object
  app.Http = {};

  //Send Post
  app.Http.post = function(targetUrl, requestData, successCallback, failureCallback) {
    $.ajax({
      url: targetUrl,
      data: requestData,
      type: "POST",
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      success: successCallback,
      failure: failureCallback
    });
  };
  /**
   * 
   * new
   */
  //Send Post with data on header request
  app.Http.postHeaders = function(targetUrl, requestData, successCallback, failureCallback) {
    $.ajax({
      url: targetUrl,
      headers: requestData,
      type: "POST",
      dataType: "json",
      contentType: "application/json; charset=utf-8",
      success: successCallback,
      failure: failureCallback
    });
  };
  //GET
  app.Http.get = function(targetUrl, successCallback, failureCallback) {
    $.ajax({
      url: targetUrl,
      type: "GET",
      success: successCallback,
      failure: failureCallback
    });
  };

  return app;

}(App || {}));
var App = (function(app) {

  /**
   * Init Constants Object;
   */

  app.Constants = {

  };

  app.Constants.linkData0 = './js/data.json';

  
  app.Constants.linkData = 'https://api.edupia.vn/service/exerciseinfo'; 
  app.Constants.upPoint = "https://api.edupia.vn/service/uppoint";
  /**
   * Consntant BASE WIDTH HEIGHT
   */
  app.Constants.BASE_WIDTH = 996;
  app.Constants.BASE_HEIGHT = 561;
  return app;

}(App || {}));
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
var App = (function (app) {

  app.Draw = {};

  var isSet = function(variable){
    return typeof variable != 'undefined';
  }

  //Hàm tạo popup tại vị trí x, y với content và title.
  app.Draw.createPopup = function (x, y, optional) {
    var background = isSet(optional.background) ? optional.background : 'popup_background';
    // var backgroundTitle = isSet(optional.backgroundTitle) ? optional.backgroundTitle : 'title_popup_background';
    var popup = App.Variables.game.add.sprite(x, y, background);
    popup.scale.setTo(2*App.Services.scaleX(), 0.7*App.Services.scaleY());
    popup.anchor.set(0.5);
    if (typeof optional.title === 'string') {
      // var titlePopup = App.Variables.game.add.sprite(-3, -180, backgroundTitle);
      // titlePopup.anchor.set(0.5, 0.85);
      // var textTitle = App.Variables.game.add.text(titlePopup.centerX, titlePopup.centerY + 3, optional.title,
      //   { font: "23px Cabin, sans-serif", fill: "#ffffff" });
      // textTitle.anchor.set(0.5, 0.5);
      // textTitle.fontWeight = 700;
      // textTitle.padding.set(2,2);
      // popup.addChild(titlePopup);
      // popup.addChild(textTitle);
    }
    if (typeof optional.content === 'string') {
      var textContent = App.Variables.game.add.text(0, -34, optional.content,
        {
          font: "28px Cabin, sans-serif", fill: "#ffffff", wordWrap: true,
          wordWrapWidth: 580, align: "center"
        });
      textContent.anchor.set(0.5, 0.8);
      textContent.padding.set(10, 10);
      popup.addChild(textContent);
    }
    App.Variables.game.add.tween(popup.scale).from({ x: 0, y: 0 }, 700, Phaser.Easing.Elastic.Out, true);
    // popup.textContent = textContent;
    // popup.textTitle =  textTitle;
    return popup;
  };

  //Hàm hiển thị popup trợ giúp.
  app.Draw.showPopupHelp = function (data) {
    var world = App.Variables.game.world;
    var popup = App.Draw.createPopup(isSet(data.x) ? data.x : world.centerX, isSet(data.y) ? data.y : world.centerY - 18 * App.Services.scaleY(), {
      content: data.content,
      background: isSet(data.background) ? data.background : undefined
    });
    popup.textContent.addFontWeight('bold', 0);
    popup.textContent.addFontWeight('italic', data.content.indexOf(':')+1);
    var btnBack = App.Variables.game.add.button(-5, 85, isSet(data.btnBack) ? data.btnBack :'btn_back', function () {
      if (isSet(data.onClose)) {
        data.onClose();
      }
      popup.destroy();
    }, 0, 0, 0, 1, 0);
    btnBack.anchor.set(0.5);
    popup.addChild(btnBack);
    App.Draw.applyHoverButton(btnBack);
    return popup;
  };

  //Hàm hiển thị popup let's learn.
  app.Draw.showPopupLearn = function (data) {
    var arrItem = data.items;
    var context = data.context;
    var prefix = data.prefixKey;
    var background = isSet(data.background) ? data.background : undefined;
    var soundAudio = context.soundAudio;
    typeof context.groupButtons == 'object' && (context.groupButtons.visible = false);
    var world = App.Variables.game.world;
    var popup = App.Draw.createPopup(isSet(data.x) ? data.x : world.centerX,isSet(data.y) ? data.y : world.centerY - 18 * App.Services.scaleY(), {
      background: background
    });
    //Khai báo các hằng số cần thiết.
    var VIEW_SCROLL_WIDTH = 568;
    var VIEW_SCROLL_HEIGHT = 312;
    var SCROLLBAR_HEIGHT = 0;
    var SCROLLABLE_HEIGHT = 0;
    var FACTOR_SCROLLBAR = 0;

    //Tạo ra vùng scroll view.
    var viewScrollArea = App.Variables.game.add.graphics(0, 0);
    viewScrollArea.beginFill(0xffffff);
    viewScrollArea.drawRect(0, 0, VIEW_SCROLL_WIDTH, VIEW_SCROLL_HEIGHT);
    viewScrollArea.endFill();
    viewScrollArea.centerX = -7;
    viewScrollArea.centerY = -10;

    //Tạo ra thanh scroll.
    var scrollBar = App.Variables.game.add.sprite(viewScrollArea.right + 8, viewScrollArea.top, isSet(data.scrollBar) ? data.scrollBar : 'scroll_bar');
    scrollBar.anchor.set(0.5, 0);
    scrollBar.height = VIEW_SCROLL_HEIGHT;

    //Tạo ra nút scroll.
    var btnScroll = App.Variables.game.add.sprite(0, 0, isSet(data.btnScroll) ? data.btnScroll : 'btn_scroll');
    btnScroll.anchor.set(0.5);
    scrollBar.addChild(btnScroll);

    var groupItems = App.Variables.game.add.group();
    var MAX_COLS = 4;
    var n = arrItem.length;
    var isPlayAllSound = false;
    var selectedItem = null;
    var innerViewScrollArea = function (item) {
      return item.centerY + groupItems.y > viewScrollArea.top && item.centerY + groupItems.y < viewScrollArea.bottom;
    };

    var playSoundByKey = function (key, onComplete, context) {
      if (soundAudio == null) {
        soundAudio = App.Variables.game.add.audio(key);
      } else {
        soundAudio.key = key;
      }
      soundAudio.onStop.removeAll();
      if (onComplete) {
        soundAudio.onStop.add(onComplete, context);
      }
      soundAudio.play();
    };

    var focusItem = function (item) {
      if (!item) return;
      selectedItem = item;
      var duration = 200;
      if (typeof item.thumb === 'object' && typeof item.textItem === 'object') {
        App.Variables.game.tweens.removeFrom(item.thumb);
        App.Variables.game.tweens.removeFrom(item.textItem);
        App.Variables.game.add.tween(item.thumb.scale).to({ x: 0.6 * item.factor, y: 0.6 * item.factor }, duration).start();
        App.Variables.game.add.tween(item.thumb.anchor).to({ x: 0.5, y: 0.7 }, duration).start();
        App.Variables.game.add.tween(item.textItem).to({ alpha: 1 }, duration).start();
      }
      playSoundByKey(prefix + item.itemID);
    };

    var unFocusItem = function (item) {
      if (!item) return;
      if (selectedItem === item) selectedItem = null;
      var duration = 200;
      if (typeof item.thumb === 'object' && typeof item.textItem === 'object') {
        App.Variables.game.tweens.removeFrom(item.thumb);
        App.Variables.game.tweens.removeFrom(item.textItem);
        App.Variables.game.add.tween(item.thumb.scale).to({ x: 0.8 * item.factor, y: 0.8 * item.factor }, duration).start();
        App.Variables.game.add.tween(item.thumb.anchor).to({ x: 0.5, y: 0.5 }, duration).start();
        App.Variables.game.add.tween(item.textItem).to({ alpha: 0 }, duration).start();
      }
    };

    var clickItem = function (item) {
      if (innerViewScrollArea(item) && item != selectedItem) {
        isPlayAllSound = false;
        if (selectedItem != null) {
          unFocusItem(selectedItem);
        }
        isPlayAllSound = false;
        focusItem(item);
      }
    }

    var hoverItem = function (item) {
      if (innerViewScrollArea(item)) {
        if (selectedItem != null) {
          unFocusItem(selectedItem);
        }
        isPlayAllSound = false;
        focusItem(item);
      }
    }

    var outHoverItem = function (item) {
      if (innerViewScrollArea(item)) {
        if (selectedItem != null) {
          unFocusItem(selectedItem);
          selectedItem = null;
        }
        unFocusItem(item);
      }
    }

    var playAllSound = function (index) {
      if (index < arrItem.length && isPlayAllSound) {
        var item = groupItems.children[index];
        if (isPlayAllSound) {
          if (isPlayAllSound && item.top + groupItems.y < viewScrollArea.top || item.bottom + groupItems.y > viewScrollArea.bottom) {
            var distance = item.top;
            setScrollTo(distance * FACTOR_SCROLLBAR, 200);
          }
          focusItem(item);
          playSoundByKey(prefix + arrItem[index].id, function () {
            setTimeout(function () {
              unFocusItem(item);
              if (isPlayAllSound) playAllSound(index + 1);
            }, 500);
          });
        }
      } else {
        if (selectedItem != null && selectedItem != groupItems.children[index]) {
          unFocusItem(selectedItem);
        }
      }
    };

    //Tạo ra danh sách các từ.
    for (var i = 0; i < n; i++) {
      var item = App.Variables.game.add.sprite(0, 0, isSet(data.backgroundItem) ? data.backgroundItem : 'item_background');
      item.anchor.set(0.5);
      groupItems.add(item);
      var thumb = App.Variables.game.add.sprite(0, 0, prefix + arrItem[i].id);
      var factor = item.height / thumb.height;
      item.factor = factor;
      thumb.scale.set(0.8 * factor);
      thumb.anchor.set(0.5);
      var textItem = App.Variables.game.add.text(0, 24, arrItem[i].description, { font: "18px 'Cabin', sans-serif", fill: "#fc021b" });
      textItem.anchor.set(0.5);
      
      if(textItem.width > item.width){
        textItem.scale.setTo(0.8,1.2);
      }
      textItem.alpha = 0;
      item.addChild(thumb);
      item.thumb = thumb;
      item.addChild(textItem);
      item.textItem = textItem;
      item.inputEnabled = true;
      item.itemID = arrItem[i].id;
      if (App.Variables.game.device.desktop) {
        item.events.onInputOver.add(hoverItem);
        item.events.onInputOut.add(outHoverItem);
      } else {
        item.events.onInputDown.add(clickItem);
      }
    }
    groupItems.align(MAX_COLS, n / MAX_COLS, VIEW_SCROLL_WIDTH / MAX_COLS, 100, Phaser.CENTER);
    groupItems.mask = viewScrollArea;
    groupItems.x = viewScrollArea.left;
    groupItems.y = viewScrollArea.top;

    SCROLLBAR_HEIGHT = scrollBar.height - btnScroll.height;
    SCROLLABLE_HEIGHT = groupItems.height - viewScrollArea.height;
    FACTOR_SCROLLBAR = SCROLLBAR_HEIGHT / SCROLLABLE_HEIGHT;

    var setScrollTo = function (position, duration) {
      position = position < 0 ? 0 : position > SCROLLBAR_HEIGHT + 10 ? SCROLLBAR_HEIGHT + 10 : position;
      if (!duration) {
        btnScroll.top = position;
        groupItems.y = viewScrollArea.top - position / FACTOR_SCROLLBAR;
      } else {
        App.Variables.game.add.tween(btnScroll).to({ top: position }, duration).start();
        App.Variables.game.add.tween(groupItems).to({ y: viewScrollArea.top - position / FACTOR_SCROLLBAR }, duration).start();
      }
    }

    var isScrollable = function () {
      return SCROLLABLE_HEIGHT > 0;
    }

    setScrollTo(0);

    if (isScrollable()) {
      btnScroll.inputEnabled = true;
      btnScroll.input.enableDrag();
      var boundsScrollRect = new Phaser.Rectangle(-btnScroll.width / 2, 0, btnScroll.width, scrollBar.height + 10);
      btnScroll.input.boundsRect = boundsScrollRect;
      btnScroll.events.onDragUpdate.add(function () {
        setScrollTo(btnScroll.top);
      });

      if (App.Variables.game.device.desktop) {
        App.Variables.game.input.mouse.mouseWheelCallback = function () {
          if (App.Variables.game.input.mouse.wheelDelta === Phaser.Mouse.WHEEL_UP) {
            setScrollTo(btnScroll.top - 20);
          } else {
            setScrollTo(btnScroll.top + 20);
          }
        }
      } else {
        var swipeCoordX, swipeCoordY, swipeCoordX2, swipeCoordY2, swipeMinDistance = 40;
        App.Variables.game.input.onDown.add(
          function (pointer) {
            swipeCoordX = pointer.clientX; swipeCoordY = pointer.clientY;
          }, this);
        App.Variables.game.input.onUp.add(function (pointer) {
          swipeCoordX2 = pointer.clientX;
          swipeCoordY2 = pointer.clientY;
          var distance = Math.abs((swipeCoordY2 - swipeCoordY) * App.Services.scaleY());
          if (swipeCoordY2 < swipeCoordY - swipeMinDistance) {
            setScrollTo(btnScroll.top - distance, distance);
          } else if (swipeCoordY2 > swipeCoordY + swipeMinDistance) {
            setScrollTo(btnScroll.top + distance, distance);
          }
        }, this);
      }
    }

    popup.addChild(viewScrollArea);
    popup.addChild(scrollBar);
    popup.addChild(groupItems);

    var btnBack = App.Variables.game.add.button(60, viewScrollArea.bottom + 34, isSet(data.btnBack) ? data.btnBack : 'btn_back', function () {
      playSoundByKey('game_background_music' + App.Variables.Data.data.game_background_music[1].id);
      App.Variables.game.input.mouse.mouseWheelCallback = null;
      App.Variables.game.input.onDown.removeAll();
      App.Variables.game.input.onUp.removeAll();
      typeof context.groupButtons == 'object' && (context.groupButtons.visible = true);
      popup.destroy();
    }, this, 0, 0, 1, 0);
    btnBack.anchor.set(0.5);
    var btnListen = App.Variables.game.add.button(-60, viewScrollArea.bottom + 34, isSet(data.btnListen) ? data.btnListen : 'btn_listen', function () {
      playSoundByKey('game_background_music' + App.Variables.Data.data.game_background_music[1].id);
      isPlayAllSound = true;
      if (App.Variables.game.device.desktop) {
        selectedItem = null;
      }
      playAllSound(0);
    }, this, 0, 0, 1, 0);
    btnListen.anchor.set(0.5);
    popup.addChild(btnBack);
    popup.addChild(btnListen);
    App.Draw.applyHoverButton(btnBack);
    App.Draw.applyHoverButton(btnListen);
    return popup;
  }

  //Hàm tạo hiệu ứng tăng điểm khi trả lời đúng.
  app.Draw.countUpPoint = function (data) {
    var startScore = data.startScore || 0;
    var endScore = data.endScore || 0;
    var duration = data.duration || 1;
    var disScore = endScore - startScore;
    var perTime = duration / disScore;
    var timer = App.Variables.game.time.create(false);
    timer.loop(perTime, function () {
      startScore++;
      if (typeof data.onStep == 'function') data.onStep(startScore);
      if (startScore >= endScore) {
        timer.stop();
        timer.destroy();
        if (typeof data.onComplete == 'function') data.onComplete(startScore);
      }
    });
    timer.start();
  }

  //Hàm tạo hiệu ứng hover button.
  app.Draw.applyHoverButton = function (button, duration, scale) {
    if (!App.Variables.game.device.desktop) return;
    //Đưa anchor về center.
    var centerX = button.centerX;
    var centerY = button.centerY;
    button.anchor.set(0.5);
    button.centerX = centerX;
    button.centerY = centerY;
    //Thiết lập hiệu ứng hover.
    duration = duration || 100;
    scale = scale || 1.1;
    var defaultScale = { x: button.scale.x, y: button.scale.y };
    button.events.onInputOver.add(function () {
      App.Variables.game.tweens.removeFrom(button);
      var tweenZoomOut = App.Variables.game.add.tween(button.scale);
      tweenZoomOut.to({ x: scale * defaultScale.x, y: scale * defaultScale.y }, duration);
      tweenZoomOut.start();
    });
    button.events.onInputOut.add(function () {
      App.Variables.game.tweens.removeFrom(button);
      var tweenZoomIn = App.Variables.game.add.tween(button.scale);
      tweenZoomIn.to({ x: defaultScale.x, y: defaultScale.y }, duration);
      tweenZoomIn.start();
    });
    //Set lại kích thước bân đầu khi click.
    button.events.onInputDown.add(function () {
      button.scale.x = defaultScale.x;
      button.scale.y = defaultScale.y;
    });

  }

  return app
}(App || {}));
var App = (function(app) {
  /**
   * [enable log]
   * @type {Boolean}
   */
  app.Log.enable = true;
  app.jsonKH = false;
  app.shakeEvent = new Shake({threshold: 15});
 
  /**
   * 
   */
  return app;
}(App || {}));

App.shakeEvent.start();

var App = (function (app) {
	
	app.Boot = {
		preload: function () {
			this.game.load.crossOrigin = 'anonymous';
			this.game.stage.disableVisibilityChange = true;
			App.Variables.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
			App.Variables.game.scale.forceOrientation(false, true);
			App.Variables.game.load.image("game_load", App.Variables.Data.data.game_load.images);
			App.Variables.game.load.image('progress_background', 'images/design/progress_background.jpg');
			App.Variables.game.load.image('progress', 'images/design/progress.png');
		},

		create: function () {
			App.Variables.game.state.start('Load');
		},

	}
	return app
}(App || {}))

var App = (function (app) {
  /**
   * init Load
   */
  app.Load = {

    loadBar: null,
    soundAudio: null,
    groupButtons: null,

    preload: function () {
      this.showBackground();
      this.startLoading();
    },

    create: function () {
			this.groupButtons = this.game.add.group();
			
      var btnLetsplay = this.game.add.button(this.game.world.centerX , 374.5 * App.Services.scaleY(), 'btn_letsplay', this.letsplay.bind(this), this, 0, 0, 1, 0);
			btnLetsplay.scale.setTo(App.Services.scaleX(), App.Services.scaleY());
			btnLetsplay.anchor.set(1,  0.5);
			btnLetsplay.time = 30;
			this.groupButtons.add(btnLetsplay);
			
      var btnHowToPlay = this.game.add.button(0, 0, 'btn_howto', this.howToPlay, this, 0, 0, 1, 0);
      btnHowToPlay.scale.setTo(App.Services.scaleX(), App.Services.scaleY());
			btnHowToPlay.alignTo(btnLetsplay, Phaser.RIGHT_CENTER, 14 * App.Services.scaleX());
			this.groupButtons.add(btnHowToPlay);
			
      App.Draw.applyHoverButton(btnLetsplay, 100);
      App.Draw.applyHoverButton(btnHowToPlay, 100);
    },

    update: function () { },

    showBackground: function () {
      this.background = this.game.add.image(0, 0, 'game_load');
      this.background.width = this.game.width;
      this.background.height = this.game.height;
    },

    startLoading: function () {
      this.loadBar = this.createLoadBar();
      this.game.load.onFileComplete.add(this.fileComplete, this);
      this.game.load.onLoadComplete.add(this.loadComplete, this);
      this.loadResource();
      this.game.load.start();
    },

    createLoadBar: function () {
      var progressBar = this.game.add.sprite(this.game.world.centerX, 438 * App.Services.scaleY(), 'progress_background');
      progressBar.anchor.set(0.5);
      progressBar.scale.setTo(App.Services.scaleX(), App.Services.scaleY());
      var progress = this.game.add.sprite(0, 0, 'progress');
      var maskProgress = this.roundedRectangle(0, 0, progress.width, progress.height);
      maskProgress.centerX = 0;
      maskProgress.centerY = 0;
      progress.mask = maskProgress;
      progress.right = maskProgress.left;
      progress.centerY = maskProgress.centerY;
      var text = this.game.add.text(0, 2, "", { fill: "#ffffff", font: "15px 'Cabin', sans-serif" });
      text.anchor.setTo(0.5);
      progressBar.addChild(maskProgress);
      progressBar.addChild(progress)
      progressBar.addChild(text);
      progressBar.text = text;
      progressBar.progress = progress;
      progressBar.minValue = maskProgress.left;
      progressBar.maxValue = maskProgress.right;
      return progressBar;
    },

    roundedRectangle: function (x, y, width, height) {
      var halfHeight = height / 2;
      var graphicsObj = this.game.add.graphics(x, y);
      graphicsObj.beginFill(0xffffff);
      graphicsObj.drawCircle(halfHeight, halfHeight, height);
      graphicsObj.drawRect(halfHeight, 0, width-halfHeight, height);
      graphicsObj.endFill();
      return graphicsObj;
    },

    fileComplete: function (progress, cacheKey, success, totalLoaded, totalFiles) {
      this.loadBar.text.setText(progress + "%");
      this.loadBar.progress.right = this.loadBar.minValue + (this.loadBar.maxValue-this.loadBar.minValue)*progress/100;
    },

    loadComplete: function () {
      this.loadBar.visible = false;
      this.background.loadTexture('game_background' + App.Variables.Data.data.game_background[0].id);
      this.background.width = this.game.width;
      this.background.height = this.game.height;
      // this.playSoundByKey('game_background_music' + App.Variables.Data.data.game_background_music[0].id);
      App.Variables.game.state.start('letsPlay');
      window.addEventListener('shake', function(){
        App.Play.shakeCayNeu();
      }, false);
    },

    playSoundByKey: function (key) {
      if (this.soundAudio == null) {
        this.soundAudio = this.game.add.audio(key);
      } else {
        this.soundAudio.key = key;
      }
      this.soundAudio.play();
    },

    howToPlay: function () {
      this.playSoundByKey('game_background_music' + App.Variables.Data.data.game_background_music[1].id);
      this.groupButtons.visible = false;
      App.Draw.showPopupHelp({
        content: App.Variables.Data.data.game_help.description,
        onClose: function () {
          this.playSoundByKey('game_background_music' + App.Variables.Data.data.game_background_music[1].id);
          this.groupButtons.visible = true;
        }.bind(this)
      });
    },

    letsplay: function (e) {
      App.Load.playSoundByKey('game_background_music' + App.Variables.Data.data.game_background_music[1].id);
      App.Variables.game.state.start('letsPlay');
			App.Variables.TimePlay = e.time; 
    },

    letslearn: function () {
      this.playSoundByKey('game_background_music' + App.Variables.Data.data.game_background_music[1].id);
      App.Draw.showPopupLearn({
        items: App.Variables.Data.data.game_question,
        context: this,
        prefixKey: 'game_question',
        btnBack: 'btn_back_popup'
      });
    },

    loadResource: function () {

      var data = App.Variables.Data.data;

      this.game.load.spritesheet('btn_letsplay', 'images/design/btn_lestplay_all.png', 125, 43, 2);
      this.game.load.spritesheet('btn_howto', 'images/design/btn_howto_all.png', 125, 43, 2);
      this.game.load.spritesheet('btn_back', 'images/design/btn_back_all.png', 95, 35, 2);
      this.game.load.spritesheet('btn_back_popup', 'images/design/btn_back_all_popup.png', 105, 35, 2);
      this.game.load.spritesheet('cayneu', 'images/design/the-mau-tu.jpg');

      this.game.load.image('title_popup_background', 'images/design/background_title_popup.jpg');
      // this.game.load.image('circle_score', 'images/design/bao-li-xi.jpg');
      this.game.load.image('speaker', 'images/design/speaker.png');
      this.game.load.image('popup_background', 'images/design/bao-li-xi.jpg');
      this.game.load.image('photo_background', 'images/design/background_photo.jpg');
      this.game.load.image('score_background', 'images/design/background_score.jpg');
      this.game.load.image('time_background', 'images/design/background_time.png');
      this.game.load.image('quest_background', 'images/design/background_quest.png');
      this.game.load.image('btn_submit', 'images/design/btn_submit.png');

      App.Variables.Data.data.game_background.forEach(function (background) {
				App.Variables.game.load.image('game_background' + background.id, background.images);
			});

      data.game_background_music.forEach(function (music) {
        App.Variables.game.load.audio('game_background_music' + music.id, music.voice);
      });

      data.game_image_win.forEach(function (gameWin) {
        App.Variables.game.load.image('game_image_win' + gameWin.id, gameWin.images);
        App.Variables.game.load.audio('game_image_win' + gameWin.id, gameWin.voice);
      });
    }
  };

  return app
}(App || {}));
var App = (function (app) {
  /**
   *  init Play
   */
  app.Play = {

    background: null,
    soundAudio: null,
    cayneu: null,
    isOnShake: false,
    tweenCayNeu: null,
    bounces: 7,
    lixi: [10, 10, 10, 10, 10, 20, 20, 20, 50, 50, 100],
    poup: null,
    isPlay: true,

    preload: function () {
      App.Variables.game.stage.disableVisibilityChange = false;
      this.background = this.game.add.image(0, 0, 'game_background' + App.Variables.Data.data.game_background[2].id);
      this.background.width = this.game.width;
      this.background.height = this.game.height;
    },

    shakeCayNeu(){      
      App.Variables.game.camera.shake(0.04, 3500);
      App.Variables.game.camera.onShakeComplete.removeAll();
      App.Variables.game.camera.onShakeComplete.add(App.Play.onComplete, this);
      if(this.poup){
        this.poup.destroy();
      }
    },
    onComplete(){
      var rand = this.randLiXi();
      var getLiXi = this.lixi[rand];
      this.showEndGame(getLiXi);
    },
    /**
     * return  0 <= number <= 10
     */
    randLiXi(){
      return Math.floor(Math.random() * 11) + 0  ;
    },

    /* 
      Khởi tạo game
    */
    create: function () {

      var world = App.Variables.game.world;
      this.cayneu = this.game.add.sprite(world.centerX,world.centerY, "cayneu" );
      this.cayneu.anchor.setTo(0.5);
      this.cayneu.scale.set(1.63* App.Services.scaleX(), 0.81*App.Services.scaleY());

      this.btnSpeaker = this.game.add.button( 
        12 * App.Services.scaleX(),  
        5* App.Services.scaleY(), 
        'speaker',
        this.clickSpeaker, this
      );
      this.btnSpeaker.scale.setTo(2.3*App.Services.scaleX(), App.Services.scaleY());
      this.btnSpeaker.anchor.set(0);
      App.Draw.applyHoverButton(this.btnSpeaker);
      if(!!this.soundAnswer){
        this.soundAnswer.stop();
      }
			this.soundAnswer = this.game.add.audio("game_background_music"+ App.Variables.Data.data.game_background_music[8].id);
			this.soundAnswer.play();

      this.initGame();

    },

    update: function () {
    },

    /* 
      Khởi tạo game
    */
    initGame: function () {
 
    },

    /* 
      Chạy âm thanh với key.
    */
    playSoundByKey: function (key, complete) {
      if (this.soundAudio == null) {
        this.soundAudio = this.game.add.audio(key);
      } else {
        this.soundAudio.key = key;
      }
      if (complete) {
        this.soundAudio.onStop.addOnce(complete, this);
      }
      this.soundAudio.play();
    },


    clickSpeaker: function () {
      if (App.Play.isPlay) {
				App.Play.isPlay = false;
				this.soundAnswer.pause();
      }else{
				App.Play.isPlay = true;
				this.soundAnswer.resume();
			}
    },

    /* 
      Chơi lại
    */
    showEndGame: function (lixi) {
      this.playSoundByKey('game_image_win' + App.Variables.Data.data.game_image_win[0].id);
      this.showPopupEnd(lixi);
      //up point
      // var dataObj = app.Services.GetObjectFromUrl();
      // dataObj.point = this.textScore.score;
      // App.Http.postHeaders(app.Constants.upPoint, dataObj,
      //   function (data) {
      //     App.Log.ws(data, 'upPoint:SUCCESS');
      //     App.Services.sendMessage('exerciseid=' + dataObj.exerciseid + '&point=' + dataObj.point);
      //   },
      //   function (err) {
      //     App.Log.ws(err, 'upPoint:ERR');

      //   }
      // );
    },

    showPopupEnd: function (score, onClose, onReplay, onLetsLearn) {
      var world = App.Variables.game.world;
      var popup = App.Draw.createPopup(world.centerX, world.centerY - 0 * App.Services.scaleY(), {
        title: 'Chúc mừng năm mới!'
      });
      var stringScore = score + 'K';
      var textScore = App.Variables.game.add.text(0, -150, stringScore,
        {
          font: "96px Cabin, sans-serif", fontWeight: 'bold', fill: "#ffffff", wordWrap: true,
          wordWrapWidth: 270, align: "center"
        });
      textScore.anchor.set(0.5, 0.6);

			var btn_replay = App.Variables.game.add.button(
				-5, 
				228 , 
				"btn_letsplay",
				App.Play.replay,
				this
			);
			btn_replay.anchor.set(0.5);
      popup.addChild(textScore);
      App.Variables.game.world.bringToTop(textScore);
      popup.addChild(btn_replay);
      this.poup = popup;
			App.Draw.applyHoverButton(btn_replay, 100);
    },

    replay: function () {				
        App.Play.isPlay = false;
        this.soundAnswer.stop();
        this.playSoundByKey('game_background_music' + App.Variables.Data.data.game_background_music[1].id);
      this.game.state.start('letsPlay');
      
    },
  };

  return app
}(App || {}));


window.onload = function () {
  //Khởi tạo game với Phaser.
  function initGame() {

    App.Variables.game = new Phaser.Game(
      window.innerWidth * window.devicePixelRatio, // width in device
      window.innerHeight * window.devicePixelRatio, //height in device
      'CANVAS', 'wrapper'
    );

    //Màn hình boot.
    App.Variables.game.state.add('Boot', App.Boot, true);

    //Màn hình load game.
    App.Variables.game.state.add('Load', App.Load, false);

    //Màn hình play game.
    App.Variables.game.state.add('letsPlay', App.Play, false);

  }

  //Load dữ liệu json trên server.
  function loadData() {
    App.Services.getDataRes(
      function (data) {
        App.Log.ws(data, 'Get data success');
        App.Variables.Data = data;
        initGame();
      },
      function (err) {
        App.Log.ws(err, 'Get data error');
      }
    );
  }

  //Hàm khởi tạo từ load fonts đến khởi tạo game.
  function initAll() {
    WebFont.load({
      custom: {
        families: ['Cabin:n4,i4,n5,i5,n6,i6,n7,i7']
      },
      active: function () {
        loadData();
      },
      inactive: function(err){
        App.Log.ws(err,'Lỗi load font');
        loadData();
      }
    });
  }

  initAll();

  // // Nếu không phải mobile.
  // if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
  //   App.Log.ws(true, 'ON Desktop');
  //   document.body.className = 'isDesktop';
  //   initAll();
  // } else {//Nếu là mobile.
  //   App.Log.ws(true, 'ON Mobile');
  //   document.body.className = 'isMobile';
  //   //Nếu màn hình đã xoay ngang.
  //   if (window.innerWidth > window.innerHeight) {
  //     App.Log.ws('','Màn hình ngang');
  //     initAll();
  //   } else {//Nếu màn hình chưa xoay ngang.
  //     //Bắt sự kiện xoay màn hình.
  //     App.Log.ws('','Màn hình dọc');
  //     $(window).on("orientationchange", function (event) {
  //       App.Log.ws('','Xoay');
  //       setTimeout(function () {
  //         if (window.innerWidth > window.innerHeight) {
  //           initAll();
  //           $(this).unbind("orientationchange");
  //         }
  //       }.bind(this), 1000);
  //     });
  //   }
  // }
}
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
