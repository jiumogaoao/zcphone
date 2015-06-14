// JavaScript Document
;(function(obj){
	obj.set({
		name:"idea",
		par:"a/b/f/e/k",
		tem:["idea"],
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
			
			$("#centerTitle").html("经营理念");
			$("#rightButton").html("返回");
			$("#rightButton").unbind("click").bind("click",function(){
				window.history.go(-1)
				});
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