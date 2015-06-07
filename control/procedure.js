// JavaScript Document
;(function(obj){
	obj.set({
		name:"procedure",
		par:"a/b/f/e/k",
		tem:["procedure"],
		fn:function(data){
			$("#scroller").html(data.tem[0]);
			myScroll.refresh();
			}
		})
	})(app.control);