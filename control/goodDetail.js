// JavaScript Document
;(function(obj){
	obj.set({
		name:"goodDetail",
		par:"id/b/f/e/k",
		tem:["goodDetail"],
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
			
			$("#centerTitle").html("产品详情");
			$("#rightButton").html("返回");
			$("#rightButton").unbind("click").bind("click",function(){
				window.history.go(-1)
				});
			app.api.run("getProduct",null,function(product){
				product=_.indexBy(product,"id");
				console.log(product[data.id])
				var detailTemplate=_.template(data.tem[0])({data:product[data.id]});
				$("#scroller").html(detailTemplate);
			myScroll.refresh();
			$('.carousel').carousel()
			$("#scroller").find("[D_type='buybutton']").unbind("touchstart").bind("touchstart",function(){
				if(app.cookies("user")){
		window.location.hash="buy/"+data.id+"/"+$("#crowdCount").val();
		}else{
			alert("请先登录再购买");
			window.location.hash="login";
			}
				})
				},function(){
				alert("获取交易信息失败");
				});
			
			}
		})
	})(app.control);