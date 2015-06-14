// JavaScript Document
;(function(obj){
	obj.set({
		name:"procedure",
		par:"a/b/f/e/k",
		tem:["procedure"],
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
			
			$("#centerTitle").html("筹房流程");
			$("#rightButton").html("注册");
			$("#rightButton").unbind("click").bind("click",function(){
				window.location.hash="register";
				});
			app.api.run("getpromotion",null,function(promo){
				var promoArry=[];
						$.each(promo,function(i,n){
							if(n.group=="procedure"){
								promoArry.push(n);
								}
							})
				console.log(promoArry)
				var proTemplate=_.template(data.tem[0])({data:promoArry})
				$("#scroller").html(proTemplate);
			myScroll.refresh();
				},function(){
				alert("获取宣传信息失败")
				})
			
			}
		})
	})(app.control);