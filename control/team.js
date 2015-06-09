// JavaScript Document
;(function(obj){
	obj.set({
		name:"team",
		par:"a/b/f/e/k",
		tem:["team"],
		fn:function(data){
			$("#scroller").html(data.tem[0]);
			myScroll.refresh();
			}
		})
	})(app.control);