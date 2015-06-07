// JavaScript Document
;(function(obj){
	obj.set({
		name:"product",
		par:"a/b/f/e/k",
		tem:["product"],
		fn:function(data){
			$("#scroller").html(data.tem[0]);
			myScroll.refresh();
			}
		})
	})(app.control);