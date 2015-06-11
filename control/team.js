// JavaScript Document
;(function(obj){
	obj.set({
		name:"team",
		par:"a/b/f/e/k",
		tem:["team"],
		fn:function(data){
			app.api.run("getpromotion",null,function(promotion){
				var promoArry=[];
				$.each(promotion,function(i,n){
							if(n.group=="team"){
								promoArry.push(n);
								}
							})
				
				promoArry=_.indexBy(promoArry,"id");
				console.log(promoArry);
				var teamTamplate=_.template(data.tem[0])({data:promoArry});
				$("#scroller").html(teamTamplate);
			myScroll.refresh();
				},function(){
					alert("获取宣传数据失败")
					})
			
			}
		})
	})(app.control);