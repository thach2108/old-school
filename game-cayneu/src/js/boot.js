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
