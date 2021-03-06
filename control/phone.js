// JavaScript Document
;(function(obj){
	obj.set({
		name:"phone",
		par:"a/b/f/e/k",
		tem:["phone"],
		fn:function(data){
			$("#leftButton").hide();
			$("#centerTitle").html("绑定手机");
			$("#rightButton").html("返回");
			$("#rightButton").unbind("tap").bind("tap",function(){
				window.history.go(-1)
				});
			var user=app.cookies("user")
			var phoneTemplate=_.template(data.tem[0])({data:user});
			$("#scroller").html(phoneTemplate);
			myScroll.refresh();
			var code=false;
			function sendBind(){
			$("#scroller").find("#btnSendmsg").html("获取验证码")
			$("#scroller").find("#btnSendmsg").unbind("tap").bind("tap",function(){
				app.api.run("getBindCode",{"type":"phone","number":$("#phoneNumber").val()},function(data){
					$("#scroller").find("#btnSendmsg").unbind("touchstart")
					alert("信息已发送")
					console.log(data)
					code=data;
					var sendTime=30;
					var sendI=setInterval(function(){
						$("#btnSendmsg").html(sendTime+"秒后可重新发送");
						sendTime--;
						if(sendTime<0){
							clearInterval(sendI)
							sendBind();
							}
						},1000)
					
				},function(){
					alert("发送失败")
					})
				})
			}	
			sendBind()
			$("#scroller").find(".bankcard_confirm").unbind("tap").bind("tap",function(){
				if(code&&code==$("#msgValidCode").val()){
					app.api.run("bind",{
					"type":"phone","id":user.id,"code":code,"number":$("#phoneNumber").val()
					},function(){
						alert("绑定成功")
						user.phone=$("#phoneNumber").val();
						app.cookies("user",user);
						window.location.hash="account";
						},function(){
							alert("绑定失败")
							}
				)
					}
			})
			}
		})
	})(app.control);