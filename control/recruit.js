// JavaScript Document
;(function(obj){
	obj.set({
		name:"recruit",
		par:"a/b/f/e/k",
		tem:["recruit"],
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
			
			$("#centerTitle").html("招贤纳士");
			$("#rightButton").html("返回");
			$("#rightButton").unbind("tap").bind("tap",function(){
				window.history.go(-1)
				});
			app.api.run("getrecruit",null,function(recruit){
				console.log(recruit);
				var recruitTemplate=_.template(data.tem[0])({data:recruit});
				$("#scroller").html(recruitTemplate);
			myScroll.refresh();
				},function(){
				alert("获取招聘信息失败")
				})
			
			}
		})
	})(app.control);