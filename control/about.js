// JavaScript Document
;(function(obj){
	obj.set({
		name:"about",
		par:"a/b/f/e/k",
		tem:["about"],
		fn:function(data){
			$("#scroller").html(data.tem[0]);
			myScroll.refresh();
			}
		})
	})(app.control);