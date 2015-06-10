// JavaScript Document
;(function(obj){
	obj.set({
		name:"product",
		par:"a/b/f/e/k",
		tem:["product"],
		fn:function(data){
			app.api.run("getProduct",null,function(product){
				debugger;
				},function(){
				alert("获取商品失败")
				})
			$("#scroller").html(data.tem[0]);
			myScroll.refresh();
			}
		})
	})(app.control);