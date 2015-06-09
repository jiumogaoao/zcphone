// JavaScript Document
;(function(obj){
	obj.set({
		name:"card",
		par:"a/b/f/e/k",
		tem:["card"],
		fn:function(data){
			$("#scroller").html(data.tem[0]);
			myScroll.refresh();
			}
		})
	})(app.control);