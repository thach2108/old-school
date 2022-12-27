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
