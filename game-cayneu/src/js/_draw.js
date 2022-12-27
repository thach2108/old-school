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