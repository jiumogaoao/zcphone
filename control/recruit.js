// JavaScript Document
;(function(obj){
	obj.set({
		name:"recruit",
		par:"a/b/f/e/k",
		tem:["recruit"],
		fn:function(data){
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