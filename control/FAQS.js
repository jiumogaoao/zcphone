// JavaScript Document
;(function(obj){
	obj.set({
		name:"FAQS",
		par:"a/b/f/e/k",
		tem:["FAQS"],
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
			
			$("#centerTitle").html("常见问题");
			$("#rightButton").html("注册");
			$("#rightButton").unbind("tap").bind("tap",function(){
				window.location.hash="register";
				});
			app.api.run("getpromotion",null,function(promotion){
				var promoArry=[];
						$.each(promotion,function(i,n){
							if(n.group=="FAQS"){
								promoArry.push(n);
								}
							})
						console.log(promoArry)
					var FAQStemplate=_.template(data.tem[0])({data:promoArry})
					$("#scroller").html(FAQStemplate);
					myScroll.refresh();
				},function(){
				alert("获取信息失败")
				})
			
			
			}
		})
	})(app.control);