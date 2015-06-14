// JavaScript Document
;(function(obj){
	obj.set({
		name:"userDetail",
		par:"a/b/f/e/k",
		tem:["userDetail"],
		fn:function(data){
			$("#leftButton").hide();
			$("#centerTitle").html("基本信息");
			$("#rightButton").html("返回");
			$("#rightButton").unbind("click").bind("click",function(){
				window.history.go(-1)
				});
			var user=app.cookies("user")
			var userTemplate=_.template(data.tem[0])({data:user});
			$("#scroller").html(userTemplate);
			myScroll.refresh();
			$("#scroller").find("[D_type='simple']").each(
				function(){
					$(this).unbind("change").bind("change",function(){
						user[$(this).attr("D_data")]=$(this).val();
						})
					}
			);
			$("#scroller").find("[D_type='send']").each(
				function(){
					$(this).unbind("click").bind("click",function(){
						app.api.run("editClient",user,function(){
							alert("修改成功")
							app.cookies("user",user)
							window.location.hash="account"
							},function(){
							alert("修改失败")
							})
						})
					})
			}
		})
	})(app.control);