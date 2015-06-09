// JavaScript Document
;(function(obj){
	obj.set({
		name:"company",
		par:"a/b/f/e/k",
		tem:["company"],
		fn:function(data){
			$("#scroller").html(data.tem[0]);
			myScroll.refresh();
			}
		})
	})(app.control);