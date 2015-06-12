// JavaScript Document
;(function(obj){
	obj.set({
		name:"buy",
		par:"id/count/f/e/k",
		tem:["buy"],
		fn:function(data){
			app.api.run("getProduct",null,function(product){
				product=_.indexBy(product,"id");
				console.log(product[data.id])
				var dealData={id:uuid(),
								productId:data.id,
								userId:app.cookies("user").id,
								title:product[data.id].title,
								subhead:product[data.id].subhead,
								count:Number(data.count),
								startTime:new Date().getTime(),
								buyPrice:product[data.id].minUnit,
								endTime:null,
								sellPrice:null}
				var detailTemplate=_.template(data.tem[0])({data:dealData});
				$("#scroller").html(detailTemplate);
			myScroll.refresh();
			
			$("#scroller").find("button").unbind("touchstart").bind("touchstart",function(){
				app.api.run("adddeal",dealData,function(){
					alert("交易成功")
					window.location.hash="goodList"
					},function(){
					alert("交易失败")
					})
				})
				},function(){
				alert("获取交易信息失败");
				});
			
			}
		})
	})(app.control);