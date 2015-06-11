// JavaScript Document
;(function(obj){
	obj.set({
		name:"idea",
		par:"a/b/f/e/k",
		tem:["idea"],
		fn:function(data){
			app.api.run("getpromotion",null,function(promotion){
				var promoArryI=[];
				$.each(promotion,function(i,n){
							if(n.group=="idea"){
								promoArryI.push(n);
								}
							})
					console.log(promoArryI)
				var ideaTemplate=_.template(data.tem[0])({data:promoArryI});
				$("#scroller").html(ideaTemplate);
				myScroll.refresh();
				},function(){
				alert("获取宣传信息失败")
				})
			
			
			}
		})
	})(app.control);