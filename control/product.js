// JavaScript Document
;(function(obj){
	obj.set({
		name:"product",
		par:"a/b/f/e/k",
		tem:["product"],
		fn:function(data){
			if(!app.cookies("user")){
				$("#leftButton").show();
			$("#leftButton").html("登录");
			$("#leftButton").unbind("click").bind("click",function(){
				window.location.hash="index";
				});
				}else{
					$("#leftButton").hide();
					}
			
			$("#centerTitle").html("选择房源");
			$("#rightButton").html("注册");
			$("#rightButton").unbind("click").bind("click",function(){
				window.location.hash="register";
				});
			app.api.run("getProduct",null,function(product){
				var productData={data:product}
				var productTemplate=_.template(data.tem[0])(productData);
				$("#scroller").html(productTemplate);
				$("#scroller").find(".product").unbind("touchstart").bind("touchstart",function(){
					window.location.hash="goodDetail/"+$(this).attr("id")
					})
			myScroll.refresh();
				},function(){
				alert("获取商品失败")
				})
			}
		})
	})(app.control);