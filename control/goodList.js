// JavaScript Document
;(function(obj){
	obj.set({
		name:"goodList",
		par:"a/b/f/e/k",
		tem:["goodList"],
		fn:function(data){
			$("#scroller").html(data.tem[0]);
			myScroll.refresh();
			}
		})
	})(app.control);