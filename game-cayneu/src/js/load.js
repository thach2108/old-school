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