// JavaScript Document
;(function(obj){
	obj.set({
		name:"index",
		par:"a/b/f/e/k",
		tem:["index"],
		fn:function(data){
			$("#scroller").html(data.tem[0]);
			myScroll.refresh();
			}
		})
	})(app.control);