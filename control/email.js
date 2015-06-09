// JavaScript Document
;(function(obj){
	obj.set({
		name:"email",
		par:"a/b/f/e/k",
		tem:["email"],
		fn:function(data){
			$("#scroller").html(data.tem[0]);
			myScroll.refresh();
			}
		})
	})(app.control);