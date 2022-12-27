!function(e){e.fn.getNumbByPx=function(a){var t=e(this).css(a),i=t.length;return Number(t.slice(0,i-2))},e.fn.disable=function(){return this.each(function(){e(this).hasClass("active")&&e(this).removeClass("active"),e(this).addClass("disable")})},e.fn.active=function(a){return this.each(function(){e(this).hasClass("disable")&&e(this).removeClass("disable"),a?e(this).addClass("active"):e(this).removeClass("active")})}}(jQuery);var N=0;(App=function(e){return e.Log.enable=!0,e.jsonKH=!1,e.shakeEvent=new Shake({threshold:15}),e}((App=function(e){e.Draw={};var a=function(e){return void 0!==e};return e.Draw.createPopup=function(e,t,i){var n=a(i.background)?i.background:"popup_background",s=App.Variables.game.add.sprite(e,t,n);if(s.scale.setTo(2*App.Services.scaleX(),.7*App.Services.scaleY()),s.anchor.set(.5),i.title,"string"==typeof i.content){var o=App.Variables.game.add.text(0,-34,i.content,{font:"28px Cabin, sans-serif",fill:"#ffffff",wordWrap:!0,wordWrapWidth:580,align:"center"});o.anchor.set(.5,.8),o.padding.set(10,10),s.addChild(o)}return App.Variables.game.add.tween(s.scale).from({x:0,y:0},700,Phaser.Easing.Elastic.Out,!0),s},e.Draw.showPopupHelp=function(e){var t=App.Variables.game.world,i=App.Draw.createPopup(a(e.x)?e.x:t.centerX,a(e.y)?e.y:t.centerY-18*App.Services.scaleY(),{content:e.content,background:a(e.background)?e.background:void 0});i.textContent.addFontWeight("bold",0),i.textContent.addFontWeight("italic",e.content.indexOf(":")+1);var n=App.Variables.game.add.button(-5,85,a(e.btnBack)?e.btnBack:"btn_back",function(){a(e.onClose)&&e.onClose(),i.destroy()},0,0,0,1,0);return n.anchor.set(.5),i.addChild(n),App.Draw.applyHoverButton(n),i},e.Draw.showPopupLearn=function(e){var t=e.items,i=e.context,n=e.prefixKey,s=a(e.background)?e.background:void 0,o=i.soundAudio;"object"==typeof i.groupButtons&&(i.groupButtons.visible=!1);var r=App.Variables.game.world,p=App.Draw.createPopup(a(e.x)?e.x:r.centerX,a(e.y)?e.y:r.centerY-18*App.Services.scaleY(),{background:s}),d=0,l=0,c=0,u=App.Variables.game.add.graphics(0,0);u.beginFill(16777215),u.drawRect(0,0,568,312),u.endFill(),u.centerX=-7,u.centerY=-10;var g=App.Variables.game.add.sprite(u.right+8,u.top,a(e.scrollBar)?e.scrollBar:"scroll_bar");g.anchor.set(.5,0),g.height=312;var m=App.Variables.game.add.sprite(0,0,a(e.btnScroll)?e.btnScroll:"btn_scroll");m.anchor.set(.5),g.addChild(m);for(var h=App.Variables.game.add.group(),b=t.length,A=!1,f=null,w=function(e){return e.centerY+h.y>u.top&&e.centerY+h.y<u.bottom},v=function(e,a,t){null==o?o=App.Variables.game.add.audio(e):o.key=e,o.onStop.removeAll(),a&&o.onStop.add(a,t),o.play()},y=function(e){if(e){f=e;"object"==typeof e.thumb&&"object"==typeof e.textItem&&(App.Variables.game.tweens.removeFrom(e.thumb),App.Variables.game.tweens.removeFrom(e.textItem),App.Variables.game.add.tween(e.thumb.scale).to({x:.6*e.factor,y:.6*e.factor},200).start(),App.Variables.game.add.tween(e.thumb.anchor).to({x:.5,y:.7},200).start(),App.Variables.game.add.tween(e.textItem).to({alpha:1},200).start()),v(n+e.itemID)}},_=function(e){if(e){f===e&&(f=null);"object"==typeof e.thumb&&"object"==typeof e.textItem&&(App.Variables.game.tweens.removeFrom(e.thumb),App.Variables.game.tweens.removeFrom(e.textItem),App.Variables.game.add.tween(e.thumb.scale).to({x:.8*e.factor,y:.8*e.factor},200).start(),App.Variables.game.add.tween(e.thumb.anchor).to({x:.5,y:.5},200).start(),App.Variables.game.add.tween(e.textItem).to({alpha:0},200).start())}},k=function(e){w(e)&&e!=f&&(A=!1,null!=f&&_(f),A=!1,y(e))},V=function(e){w(e)&&(null!=f&&_(f),A=!1,y(e))},S=function(e){w(e)&&(null!=f&&(_(f),f=null),_(e))},C=function(e){if(e<t.length&&A){var a=h.children[e];if(A){if(A&&a.top+h.y<u.top||a.bottom+h.y>u.bottom){var i=a.top;E(i*c,200)}y(a),v(n+t[e].id,function(){setTimeout(function(){_(a),A&&C(e+1)},500)})}}else null!=f&&f!=h.children[e]&&_(f)},x=0;x<b;x++){var B=App.Variables.game.add.sprite(0,0,a(e.backgroundItem)?e.backgroundItem:"item_background");B.anchor.set(.5),h.add(B);var D=App.Variables.game.add.sprite(0,0,n+t[x].id),P=B.height/D.height;B.factor=P,D.scale.set(.8*P),D.anchor.set(.5);var L=App.Variables.game.add.text(0,24,t[x].description,{font:"18px 'Cabin', sans-serif",fill:"#fc021b"});L.anchor.set(.5),L.width>B.width&&L.scale.setTo(.8,1.2),L.alpha=0,B.addChild(D),B.thumb=D,B.addChild(L),B.textItem=L,B.inputEnabled=!0,B.itemID=t[x].id,App.Variables.game.device.desktop?(B.events.onInputOver.add(V),B.events.onInputOut.add(S)):B.events.onInputDown.add(k)}h.align(4,b/4,142,100,Phaser.CENTER),h.mask=u,h.x=u.left,h.y=u.top,d=g.height-m.height,l=h.height-u.height,c=d/l;var E=function(e,a){e=e<0?0:e>d+10?d+10:e,a?(App.Variables.game.add.tween(m).to({top:e},a).start(),App.Variables.game.add.tween(h).to({y:u.top-e/c},a).start()):(m.top=e,h.y=u.top-e/c)};if(E(0),l>0){m.inputEnabled=!0,m.input.enableDrag();var T=new Phaser.Rectangle(-m.width/2,0,m.width,g.height+10);if(m.input.boundsRect=T,m.events.onDragUpdate.add(function(){E(m.top)}),App.Variables.game.device.desktop)App.Variables.game.input.mouse.mouseWheelCallback=function(){App.Variables.game.input.mouse.wheelDelta===Phaser.Mouse.WHEEL_UP?E(m.top-20):E(m.top+20)};else{var H,j;App.Variables.game.input.onDown.add(function(e){e.clientX,H=e.clientY},this),App.Variables.game.input.onUp.add(function(e){e.clientX,j=e.clientY;var a=Math.abs((j-H)*App.Services.scaleY());j<H-40?E(m.top-a,a):j>H+40&&E(m.top+a,a)},this)}}p.addChild(u),p.addChild(g),p.addChild(h);var Y=App.Variables.game.add.button(60,u.bottom+34,a(e.btnBack)?e.btnBack:"btn_back",function(){v("game_background_music"+App.Variables.Data.data.game_background_music[1].id),App.Variables.game.input.mouse.mouseWheelCallback=null,App.Variables.game.input.onDown.removeAll(),App.Variables.game.input.onUp.removeAll(),"object"==typeof i.groupButtons&&(i.groupButtons.visible=!0),p.destroy()},this,0,0,1,0);Y.anchor.set(.5);var I=App.Variables.game.add.button(-60,u.bottom+34,a(e.btnListen)?e.btnListen:"btn_listen",function(){v("game_background_music"+App.Variables.Data.data.game_background_music[1].id),A=!0,App.Variables.game.device.desktop&&(f=null),C(0)},this,0,0,1,0);return I.anchor.set(.5),p.addChild(Y),p.addChild(I),App.Draw.applyHoverButton(Y),App.Draw.applyHoverButton(I),p},e.Draw.countUpPoint=function(e){var a=e.startScore||0,t=e.endScore||0,i=(e.duration||1)/(t-a),n=App.Variables.game.time.create(!1);n.loop(i,function(){a++,"function"==typeof e.onStep&&e.onStep(a),a>=t&&(n.stop(),n.destroy(),"function"==typeof e.onComplete&&e.onComplete(a))}),n.start()},e.Draw.applyHoverButton=function(e,a,t){if(App.Variables.game.device.desktop){var i=e.centerX,n=e.centerY;e.anchor.set(.5),e.centerX=i,e.centerY=n,a=a||100,t=t||1.1;var s={x:e.scale.x,y:e.scale.y};e.events.onInputOver.add(function(){App.Variables.game.tweens.removeFrom(e);var i=App.Variables.game.add.tween(e.scale);i.to({x:t*s.x,y:t*s.y},a),i.start()}),e.events.onInputOut.add(function(){App.Variables.game.tweens.removeFrom(e);var t=App.Variables.game.add.tween(e.scale);t.to({x:s.x,y:s.y},a),t.start()}),e.events.onInputDown.add(function(){e.scale.x=s.x,e.scale.y=s.y})}},e}((App=function(e){return e.Services={},e.Services.bindEvent=function(e,a,t){e.addEventListener?e.addEventListener(a,t,!1):e.attachEvent&&e.attachEvent("on"+a,t)},e.Services.sendMessage=function(e){window.parent.postMessage(e,"*")},e.Services.getNumberRandomBetween=function(e,a){return a=a||0,Math.floor(Math.random()*e)+a},e.Services.isMobile=function(){return e.Variables.width_window<=1024},e.Services.scaleX=function(){return App.Variables.game.width/e.Constants.BASE_WIDTH},e.Services.scaleY=function(){return App.Variables.game.height/e.Constants.BASE_HEIGHT},e.Services.getParameterByName=function(e,a){a||(a=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var t=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(a);return t?t[2]?decodeURIComponent(t[2].replace(/\+/g," ")):"":null},e.Services.GetObjectFromUrl=function(){var e=document.URL,a=App.Services.getParameterByName("exercise_id",e),t=App.Services.getParameterByName("token",e);return{username:App.Services.getParameterByName("username",e),token:t,exerciseid:a}},e.Services.getDataRes=function(a,t){if(App.jsonKH){var i=e.Services.GetObjectFromUrl();App.Http.postHeaders(e.Constants.linkData,i,function(e){App.Log.w(e,"DATA"),a("object"==typeof e?e:JSON.parse(e))},function(e){App.Log.w(e,"ERR"),t(e)})}else App.Http.get(e.Constants.linkData0,function(e){App.Log.w(e,"DATA"),a("object"==typeof e?e:JSON.parse(e))},function(e){App.Log.w(e,"ERR"),t(e)})},e}((App=function(e){return e.Constants={},e.Constants.linkData0="./js/data.json",e.Constants.linkData="https://api.edupia.vn/service/exerciseinfo",e.Constants.upPoint="https://api.edupia.vn/service/uppoint",e.Constants.BASE_WIDTH=996,e.Constants.BASE_HEIGHT=561,e}((App=function(e){return e.Http={},e.Http.post=function(e,a,t,i){$.ajax({url:e,data:a,type:"POST",dataType:"json",contentType:"application/json; charset=utf-8",success:t,failure:i})},e.Http.postHeaders=function(e,a,t,i){$.ajax({url:e,headers:a,type:"POST",dataType:"json",contentType:"application/json; charset=utf-8",success:t,failure:i})},e.Http.get=function(e,a,t){$.ajax({url:e,type:"GET",success:a,failure:t})},e}((App=function(e){return e.Log={enable:!1},e.Log.isEnabled=function(){return this.enable},e.Log.write=function(e,a){var t=a||"Default Logging";this.enable&&(console.log("---BEGIN "+t+"---"),console.log(e),console.log("---END "+t+"---"))},e.Log.writeString=function(e,a){var t=a||"Log Tag: ";this.enable&&console.log(t+" : "+e)},e.Log.writeMethod=function(e){this.enable&&console.log("[ Method Logging ] ---"+e+"()")},e.Log={w:e.Log.write,ws:e.Log.writeString,m:e.Log.writeMethod},e}((App=function(e){return e.Variables={},e.Variables.messageFromIframe,e.Variables.Game,e.Variables.setInterval={event_listen:"",load_percent:"",time:1},e.Variables.firstRunLandscape,e.Variables.width_window=screen.width,e.Variables.Data,e.Variables.learn_item,e.Variables.sound={count_sound:0},e.Variables.TimePlay=30,e}(App||{}))||{}))||{}))||{}))||{}))||{}))||{})).shakeEvent.start();var App=function(e){return e.Play={background:null,soundAudio:null,cayneu:null,isOnShake:!1,tweenCayNeu:null,bounces:7,lixi:[10,10,10,10,10,20,20,20,50,50,100],poup:null,isPlay:!0,preload:function(){App.Variables.game.stage.disableVisibilityChange=!1,this.background=this.game.add.image(0,0,"game_background"+App.Variables.Data.data.game_background[2].id),this.background.width=this.game.width,this.background.height=this.game.height},shakeCayNeu(){App.Variables.game.camera.shake(.04,3500),App.Variables.game.camera.onShakeComplete.removeAll(),App.Variables.game.camera.onShakeComplete.add(App.Play.onComplete,this),this.poup&&this.poup.destroy()},onComplete(){var e=this.randLiXi(),a=this.lixi[e];this.showEndGame(a)},randLiXi:()=>Math.floor(11*Math.random())+0,create:function(){var e=App.Variables.game.world;this.cayneu=this.game.add.sprite(e.centerX,e.centerY,"cayneu"),this.cayneu.anchor.setTo(.5),this.cayneu.scale.set(1.63*App.Services.scaleX(),.81*App.Services.scaleY()),this.btnSpeaker=this.game.add.button(12*App.Services.scaleX(),5*App.Services.scaleY(),"speaker",this.clickSpeaker,this),this.btnSpeaker.scale.setTo(2.3*App.Services.scaleX(),App.Services.scaleY()),this.btnSpeaker.anchor.set(0),App.Draw.applyHoverButton(this.btnSpeaker),this.soundAnswer&&this.soundAnswer.stop(),this.soundAnswer=this.game.add.audio("game_background_music"+App.Variables.Data.data.game_background_music[8].id),this.soundAnswer.play(),this.initGame()},update:function(){},initGame:function(){},playSoundByKey:function(e,a){null==this.soundAudio?this.soundAudio=this.game.add.audio(e):this.soundAudio.key=e,a&&this.soundAudio.onStop.addOnce(a,this),this.soundAudio.play()},clickSpeaker:function(){App.Play.isPlay?(App.Play.isPlay=!1,this.soundAnswer.pause()):(App.Play.isPlay=!0,this.soundAnswer.resume())},showEndGame:function(e){this.playSoundByKey("game_image_win"+App.Variables.Data.data.game_image_win[0].id),this.showPopupEnd(e)},showPopupEnd:function(e,a,t,i){var n=App.Variables.game.world,s=App.Draw.createPopup(n.centerX,n.centerY-0*App.Services.scaleY(),{title:"Chúc mừng năm mới!"}),o=e+"K",r=App.Variables.game.add.text(0,-150,o,{font:"96px Cabin, sans-serif",fontWeight:"bold",fill:"#ffffff",wordWrap:!0,wordWrapWidth:270,align:"center"});r.anchor.set(.5,.6);var p=App.Variables.game.add.button(-5,228,"btn_letsplay",App.Play.replay,this);p.anchor.set(.5),s.addChild(r),App.Variables.game.world.bringToTop(r),s.addChild(p),this.poup=s,App.Draw.applyHoverButton(p,100)},replay:function(){App.Play.isPlay=!1,this.soundAnswer.stop(),this.playSoundByKey("game_background_music"+App.Variables.Data.data.game_background_music[1].id),this.game.state.start("letsPlay")}},e}((App=function(e){return e.Load={loadBar:null,soundAudio:null,groupButtons:null,preload:function(){this.showBackground(),this.startLoading()},create:function(){this.groupButtons=this.game.add.group();var e=this.game.add.button(this.game.world.centerX,374.5*App.Services.scaleY(),"btn_letsplay",this.letsplay.bind(this),this,0,0,1,0);e.scale.setTo(App.Services.scaleX(),App.Services.scaleY()),e.anchor.set(1,.5),e.time=30,this.groupButtons.add(e);var a=this.game.add.button(0,0,"btn_howto",this.howToPlay,this,0,0,1,0);a.scale.setTo(App.Services.scaleX(),App.Services.scaleY()),a.alignTo(e,Phaser.RIGHT_CENTER,14*App.Services.scaleX()),this.groupButtons.add(a),App.Draw.applyHoverButton(e,100),App.Draw.applyHoverButton(a,100)},update:function(){},showBackground:function(){this.background=this.game.add.image(0,0,"game_load"),this.background.width=this.game.width,this.background.height=this.game.height},startLoading:function(){this.loadBar=this.createLoadBar(),this.game.load.onFileComplete.add(this.fileComplete,this),this.game.load.onLoadComplete.add(this.loadComplete,this),this.loadResource(),this.game.load.start()},createLoadBar:function(){var e=this.game.add.sprite(this.game.world.centerX,438*App.Services.scaleY(),"progress_background");e.anchor.set(.5),e.scale.setTo(App.Services.scaleX(),App.Services.scaleY());var a=this.game.add.sprite(0,0,"progress"),t=this.roundedRectangle(0,0,a.width,a.height);t.centerX=0,t.centerY=0,a.mask=t,a.right=t.left,a.centerY=t.centerY;var i=this.game.add.text(0,2,"",{fill:"#ffffff",font:"15px 'Cabin', sans-serif"});return i.anchor.setTo(.5),e.addChild(t),e.addChild(a),e.addChild(i),e.text=i,e.progress=a,e.minValue=t.left,e.maxValue=t.right,e},roundedRectangle:function(e,a,t,i){var n=i/2,s=this.game.add.graphics(e,a);return s.beginFill(16777215),s.drawCircle(n,n,i),s.drawRect(n,0,t-n,i),s.endFill(),s},fileComplete:function(e,a,t,i,n){this.loadBar.text.setText(e+"%"),this.loadBar.progress.right=this.loadBar.minValue+(this.loadBar.maxValue-this.loadBar.minValue)*e/100},loadComplete:function(){this.loadBar.visible=!1,this.background.loadTexture("game_background"+App.Variables.Data.data.game_background[0].id),this.background.width=this.game.width,this.background.height=this.game.height,App.Variables.game.state.start("letsPlay"),window.addEventListener("shake",function(){App.Play.shakeCayNeu()},!1)},playSoundByKey:function(e){null==this.soundAudio?this.soundAudio=this.game.add.audio(e):this.soundAudio.key=e,this.soundAudio.play()},howToPlay:function(){this.playSoundByKey("game_background_music"+App.Variables.Data.data.game_background_music[1].id),this.groupButtons.visible=!1,App.Draw.showPopupHelp({content:App.Variables.Data.data.game_help.description,onClose:function(){this.playSoundByKey("game_background_music"+App.Variables.Data.data.game_background_music[1].id),this.groupButtons.visible=!0}.bind(this)})},letsplay:function(e){App.Load.playSoundByKey("game_background_music"+App.Variables.Data.data.game_background_music[1].id),App.Variables.game.state.start("letsPlay"),App.Variables.TimePlay=e.time},letslearn:function(){this.playSoundByKey("game_background_music"+App.Variables.Data.data.game_background_music[1].id),App.Draw.showPopupLearn({items:App.Variables.Data.data.game_question,context:this,prefixKey:"game_question",btnBack:"btn_back_popup"})},loadResource:function(){var e=App.Variables.Data.data;this.game.load.spritesheet("btn_letsplay","images/design/btn_lestplay_all.png",125,43,2),this.game.load.spritesheet("btn_howto","images/design/btn_howto_all.png",125,43,2),this.game.load.spritesheet("btn_back","images/design/btn_back_all.png",95,35,2),this.game.load.spritesheet("btn_back_popup","images/design/btn_back_all_popup.png",105,35,2),this.game.load.spritesheet("cayneu","images/design/the-mau-tu.jpg"),this.game.load.image("title_popup_background","images/design/background_title_popup.jpg"),this.game.load.image("speaker","images/design/speaker.png"),this.game.load.image("popup_background","images/design/bao-li-xi.jpg"),this.game.load.image("photo_background","images/design/background_photo.jpg"),this.game.load.image("score_background","images/design/background_score.jpg"),this.game.load.image("time_background","images/design/background_time.png"),this.game.load.image("quest_background","images/design/background_quest.png"),this.game.load.image("btn_submit","images/design/btn_submit.png"),App.Variables.Data.data.game_background.forEach(function(e){App.Variables.game.load.image("game_background"+e.id,e.images)}),e.game_background_music.forEach(function(e){App.Variables.game.load.audio("game_background_music"+e.id,e.voice)}),e.game_image_win.forEach(function(e){App.Variables.game.load.image("game_image_win"+e.id,e.images),App.Variables.game.load.audio("game_image_win"+e.id,e.voice)})}},e}((App=function(e){return e.Boot={preload:function(){this.game.load.crossOrigin="anonymous",this.game.stage.disableVisibilityChange=!0,App.Variables.game.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL,App.Variables.game.scale.forceOrientation(!1,!0),App.Variables.game.load.image("game_load",App.Variables.Data.data.game_load.images),App.Variables.game.load.image("progress_background","images/design/progress_background.jpg"),App.Variables.game.load.image("progress","images/design/progress.png")},create:function(){App.Variables.game.state.start("Load")}},e}(App||{}))||{}))||{});window.onload=function(){function e(){App.Services.getDataRes(function(e){App.Log.ws(e,"Get data success"),App.Variables.Data=e,App.Variables.game=new Phaser.Game(window.innerWidth*window.devicePixelRatio,window.innerHeight*window.devicePixelRatio,"CANVAS","wrapper"),App.Variables.game.state.add("Boot",App.Boot,!0),App.Variables.game.state.add("Load",App.Load,!1),App.Variables.game.state.add("letsPlay",App.Play,!1)},function(e){App.Log.ws(e,"Get data error")})}WebFont.load({custom:{families:["Cabin:n4,i4,n5,i5,n6,i6,n7,i7"]},active:function(){e()},inactive:function(a){App.Log.ws(a,"Lỗi load font"),e()}})},$(document).ready(function(){}),App.Services.bindEvent(window,"message",function(e){App.Variables.messageFromIframe=e.data}),$(window).bind("resize load",function(){$(window).width()<=1366&&($(".bg--learn").css("zoom",$(window).width()/1366),App.Log.w(screen.width,"auto zoom"),App.Log.w($(window).width(),"auto zoom"))});