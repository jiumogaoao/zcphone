// JavaScript Document
;(function(obj){
	obj.set({
		name:"recruit",
		par:"a/b/f/e/k",
		tem:["recruit"],
		fn:function(data){
			$("#scroller").html(data.tem[0]);
			myScroll.refresh();
			}
		})
	})(app.control);