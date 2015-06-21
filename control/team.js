// JavaScript Document
;(function(obj){
	obj.set({
		name:"team",
		par:"a/b/f/e/k",
		tem:["team"],
		fn:function(data){
			if(!app.cookies("user")){
				$("#leftButton").show();
			$("#leftButton").html("登录");
			$("#leftButton").unbind("tap").bind("tap",function(){
				window.location.hash="index";
				});
				}else{
					$("#leftButton").hide();
					}
			
			$("#centerTitle").html("团队介绍");
			$("#rightButton").html("返回");
			$("#rightButton").unbind("tap").bind("tap",function(){
				window.history.go(-1)
				});
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