// JavaScript Document
;(function(obj){
	obj.set({
		name:"contact",
		par:"a/b/f/e/k",
		tem:["contact"],
		fn:function(data){
			if(!app.cookies("user")){
				$("#leftButton").show();
			$("#leftButton").html("登录");
			$("#leftButton").unbind("tap").bind("tap",function(){
				window.location.hash="index";
				});
				}else{
					$("#leftButton").hide();
					}
			
			$("#centerTitle").html("联系方式");
			$("#rightButton").html("注册");
			$("#rightButton").unbind("tap").bind("tap",function(){
				window.location.hash="register";
				});
			$("#scroller").html(data.tem[0]);
			myScroll.refresh();
			}
		})
	})(app.control);