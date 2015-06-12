// JavaScript Document
;(function(obj){
	obj.set({
		name:"change",
		par:"id/count/f/e/k",
		tem:["change"],
		fn:function(data){
			function getproduct(deal){
				app.api.run("getProduct",null,function(product){
				product=_.indexBy(product,"id");
				console.log(product[deal.productId])
				deal.sellPrice=product[deal.productId].minUnit;
				deal.title=product[deal.productId].title;
				deal.subhead=product[deal.productId].subhead;
				deal.change=product[deal.productId].change;
				var detailTemplate=_.template(data.tem[0])({data:deal});
				$("#scroller").html(detailTemplate);
			myScroll.refresh();
			
			$("#scroller").find("[D_type='changebutton']").unbind("click").bind("click",function(){
			function editdeal(){
				app.apis.editdeal(deal,function(){
				alert("转移成功");
				window.location.hash="account";
				},function(){
				alert("转移失败");
				})
				}
			app.apis.checkUserName($("[D_data='changeMember']").val(),function(data){
				deal.userId=data[0].id
				editdeal()
				},function(){
				alert("找不到该用户")
				})
			
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