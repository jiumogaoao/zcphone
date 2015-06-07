// JavaScript Document
;(function(obj){
	obj.set({
		name:"contact",
		par:"a/b/f/e/k",
		tem:["contact"],
		fn:function(data){
			$("#scroller").html(data.tem[0]);
			myScroll.refresh();
			}
		})
	})(app.control);