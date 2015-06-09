// JavaScript Document
;(function(obj){
	obj.set({
		name:"dealList",
		par:"a/b/f/e/k",
		tem:["dealList"],
		fn:function(data){
			$("#scroller").html(data.tem[0]);
			myScroll.refresh();
			}
		})
	})(app.control);