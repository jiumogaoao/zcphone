// JavaScript Document
;(function(obj){
	obj.set({
		name:"FAQS",
		par:"a/b/f/e/k",
		tem:["FAQS"],
		fn:function(data){
			$("#scroller").html(data.tem[0]);
			myScroll.refresh();
			}
		})
	})(app.control);