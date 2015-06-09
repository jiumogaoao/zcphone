// JavaScript Document
;(function(obj){
	obj.set({
		name:"idea",
		par:"a/b/f/e/k",
		tem:["idea"],
		fn:function(data){
			$("#scroller").html(data.tem[0]);
			myScroll.refresh();
			}
		})
	})(app.control);