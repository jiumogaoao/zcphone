// JavaScript Document
;(function(obj){
	obj.set({
		name:"company",
		par:"a/b/f/e/k",
		tem:["company"],
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
			
			$("#centerTitle").html("公司信息");
			$("#rightButton").html("返回");
			$("#rightButton").unbind("click").bind("click",function(){
				window.history.go(-1)
				});
			app.api.run("getcompany",null,function(company){
				console.log(company)
				var companyTemplate=_.template(data.tem[0])({data:company});
				$("#scroller").html(companyTemplate);
			myScroll.refresh();
				},function(){
				alert("获取企业信息失败");
				});
			
			}
		})
	})(app.control);