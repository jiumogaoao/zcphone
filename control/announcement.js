// JavaScript Document
;(function(obj){
	obj.set({
		name:"announcement",
		par:"a/b/f/e/k",
		tem:["announcement"],
		fn:function(data){
			$("#scroller").html(data.tem[0]);
			myScroll.refresh();
			}
		})
	})(app.control);