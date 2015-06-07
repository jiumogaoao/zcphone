// JavaScript Document
;(function(obj){
	obj.set({
		name:"register",
		par:"a/b/f/e/k",
		tem:["register"],
		fn:function(data){
			$("#scroller").html(data.tem[0]);
			myScroll.refresh();
			}
		})
	})(app.control);