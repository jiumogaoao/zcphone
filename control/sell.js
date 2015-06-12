// JavaScript Document
;(function(obj){
	obj.set({
		name:"sell",
		par:"id/count/f/e/k",
		tem:["sell"],
		fn:function(data){
			function getproduct(deal){
				app.api.run("getProduct",null,function(product){
				product=_.indexBy(product,"id");
				console.log(product[deal.productId])
				deal.sellPrice=product[deal.productId].minUnit;
				deal.title=product[deal.productId].title;
				deal.subhead=product[deal.productId].subhead;
				var detailTemplate=_.template(data.tem[0])({data:deal});
				$("#scroller").html(detailTemplate);
			myScroll.refresh();
			$("#scroller").find("[D_type='sellbutton']").unbind("touchstart").bind("touchstart",function(){
				if(app.cookies("user")){app.api.run("editdeal",deal,function(){
					alert("交易成功")
					window.location.hash="account";
					},function(){
					alert("交易失败")
					})
		
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