// JavaScript Document
;(function(obj){
	obj.set({
		name:"goodList",
		par:"a/b/f/e/k",
		tem:["goodList"],
		fn:function(data){
			function getDeal(product){
				app.api.run("getdealList",app.cookies("user").id,function(dealList){
					if(dealList){
						_.each(dealList,function(deal){
							deal.title=product[deal.productId].title;
							deal.subhead=product[deal.productId].subhead;
							deal.minUnit=product[deal.productId].minUnit;
							})
						}
						console.log(dealList)
					var dealTemplate=_.template(data.tem[0])({data:dealList});
					$("#scroller").html(dealTemplate);
			myScroll.refresh();	
					$("#scroller").find("[D_type='sellButton']").unbind("touchstart").bind("touchstart",function(){
						window.location.hash="sell/"+$(this).attr("D_data")
						})
					$("#scroller").find("[D_type='changeButton']").unbind("touchstart").bind("touchstart",function(){
						window.location.hash="change/"+$(this).attr("D_data")
						})
					},function(){
					alert("获取交易信息失败")
					})
				}
			app.api.run("getProduct",null,function(product){
				product=_.indexBy(product,"id");
				getDeal(product);
				},function(){
				alert("获取商品信息失败")
				})
			
			}
		})
	})(app.control);