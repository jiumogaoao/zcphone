// JavaScript Document
;(function(obj){
	obj.set({
		name:"index",
		par:"a/b/f/e/k",
		tem:["index"],
		fn:function(data){
			$("#scroller").html(data.tem[0]);
			myScroll.refresh();
			$("#scroller").find("#send").unbind("click").bind("click",function(){
				var sendData = {"userName":$("#scroller").find("#userName").val(),/*登录名/手机/邮箱*/
				"passWord":$("#scroller").find("#userPass").val()}/*密码*/
				app.api.run("login",sendData,function(rdata){
		window.location.hash="account";
	},function(error){
		alert("账号或密码错误")
		});
				})
			
			
			}
		})
	})(app.control);