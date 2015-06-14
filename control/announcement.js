// JavaScript Document
;(function(obj){
	obj.set({
		name:"announcement",
		par:"a/b/f/e/k",
		tem:["announcement"],
		fn:function(data){
			if(!app.cookies("user")){
				$("#leftButton").show();
			$("#leftButton").html("登录");
			$("#leftButton").unbind("click").bind("click",function(){
				window.location.hash="index";
				});
				}else{
					$("#leftButton").hide();
					}
			
			$("#centerTitle").html("企业公告");
			$("#rightButton").html("返回");
			$("#rightButton").unbind("click").bind("click",function(){
				window.history.go(-1)
				});
			app.api.run("getannouncement",null,function(announcement){
				console.log(announcement)
				var announTemplate=_.template(data.tem[0])({data:announcement});
				$("#scroller").html(announTemplate);
			myScroll.refresh();
				},function(){
				alert("获取公告信息失败")
				})
			
			}
		})
	})(app.control);