
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
