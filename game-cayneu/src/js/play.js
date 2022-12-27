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

