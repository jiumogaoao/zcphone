// JavaScript Document
;(function(obj){
	obj.set({
		name:"userDetail",
		par:"a/b/f/e/k",
		tem:["userDetail"],
		fn:function(data){
			$("#scroller").html(data.tem[0]);
			myScroll.refresh();
			}
		})
	})(app.control);