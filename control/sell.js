// JavaScript Document
;(function(obj){
	obj.set({
		name:"sell",
		par:"id/count/f/e/k",
		tem:["sell"],
		fn:function(data){
			function getproduct(deal){debugger;
				app.api.run("getProduct",null,function(product){
				product=_.indexBy(product,"id");
				console.log(product[deal.productId])
				deal.sellPrice=product[deal.productId].minUnit;
				deal.title=product[deal.productId].title;
				deal.subhead=product[deal.productId].subhead;
				var detailTemplate=_.template(data.tem[0])({data:deal});
				$("#scroller").html(detailTemplate);
			myScroll.refresh();
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
			app.api.run("getdealList",app.cookies("user").id,function(deal){debugger;
				deal=_.indexBy(deal,"id");
				getproduct(deal[data.id])
				},function(){
				alert("获取交易信息失败")
				})
			
			}
		})
	})(app.control);