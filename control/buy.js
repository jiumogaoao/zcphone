// JavaScript Document
;(function(obj){
	obj.set({
		name:"buy",
		par:"id/count/f/e/k",
		tem:["buy"],
		fn:function(data){
			$("#leftButton").hide();
			$("#centerTitle").html("请确认购买");
			$("#rightButton").html("返回");
			$("#rightButton").unbind("tap").bind("tap",function(){
				window.history.go(-1)
				});
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
								buyPrice:product[data.id].UnitPrice,
								endTime:null,
								sellPrice:null}
				var detailTemplate=_.template(data.tem[0])({data:dealData});
				$("#scroller").html(detailTemplate);
			myScroll.refresh();
			
			$("#scroller").find("button").unbind("tap").bind("tap",function(){
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