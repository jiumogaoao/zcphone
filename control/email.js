// JavaScript Document
;(function(obj){
	obj.set({
		name:"email",
		par:"a/b/f/e/k",
		tem:["email"],
		fn:function(data){
			$("#leftButton").hide();
			$("#centerTitle").html("绑定邮箱");
			$("#rightButton").html("返回");
			$("#rightButton").unbind("tap").bind("tap",function(){
				window.history.go(-1)
				});
			var user=app.cookies("user")
			app.api.run("getBind",user.id,function(bind){
				user.bind=bind;
				var emailTemplate=_.template(data.tem[0])({data:user})
				$("#scroller").html(emailTemplate);
				myScroll.refresh();
				function sendBind(){
				$("#scroller").find("button").html("绑定")	
				$("#scroller").find("button").unbind("tap").bind("tap",function(){
					
					var sendData={"type":"email","number":$("#scroller").find("input").val()}
					app.api.run("getBindCode",sendData,function(){
						$("#scroller").find("button").unbind("tap")
						var sendTime=30;
					var sendI=setInterval(function(){
						$("#scroller").find("button").html(sendTime+"秒后可重新发送");
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
				sendBind();
				},function(){
				alert("获取绑定信息失败")
				})
			
			}
		})
	})(app.control);