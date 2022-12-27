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