// JavaScript Document
;(function(obj){
	obj.set({
		name:"phone",
		par:"a/b/f/e/k",
		tem:["phone"],
		fn:function(data){
			$("#scroller").html(data.tem[0]);
			myScroll.refresh();
			}
		})
	})(app.control);