// JavaScript Document
;(function(obj){
	obj.set({
		name:"about",
		par:"a/b/f/e/k",
		tem:["about"],
		fn:function(data){
			$("#scroller").html(data.tem[0]);
			$("#scroller").find("[D_type='navPoint']").each(function(){
				$(this).unbind("touchstart").bind("touchstart",function(){
					window.location.hash=$(this).attr("D_data");
					})
				});
			myScroll.refresh();
			}
		})
	})(app.control);