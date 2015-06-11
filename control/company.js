// JavaScript Document
;(function(obj){
	obj.set({
		name:"company",
		par:"a/b/f/e/k",
		tem:["company"],
		fn:function(data){
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