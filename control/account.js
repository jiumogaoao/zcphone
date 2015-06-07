// JavaScript Document
;(function(obj){
	obj.set({
		name:"account",
		par:"a/b/f/e/k",
		tem:["account"],
		fn:function(data){
			$("#scroller").html(data.tem[0]);
			myScroll.refresh();
			}
		})
	})(app.control);