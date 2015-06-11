// JavaScript Document
;(function(obj){
	obj.set({
		name:"email",
		par:"a/b/f/e/k",
		tem:["email"],
		fn:function(data){
			var user=app.cookies("user")
			app.api.run("getBind",user.id,function(bind){
				user.bind=bind;
				var emailTemplate=_.template(data.tem[0])({data:user})
				$("#scroller").html(emailTemplate);
				myScroll.refresh();
				function sendBind(){
				$("#scroller").find("button").html("绑定")	
				$("#scroller").find("button").unbind("touchstart").bind("touchstart",function(){
					
					var sendData={"type":"email","number":$("#scroller").find("input").val()}
					app.api.run("getBindCode",sendData,function(){
						$("#scroller").find("button").unbind("touchstart")
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