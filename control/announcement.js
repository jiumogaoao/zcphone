// JavaScript Document
;(function(obj){
	obj.set({
		name:"announcement",
		par:"a/b/f/e/k",
		tem:["announcement"],
		fn:function(data){
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