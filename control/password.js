// JavaScript Document
;(function(obj){
	obj.set({
		name:"password",
		par:"a/b/f/e/k",
		tem:["password"],
		fn:function(data){
			$("#scroller").html(data.tem[0]);
			myScroll.refresh();
			var sendData={id:app.cookies("user").id,/*用户id*/
				oldKey:"",/*旧密码*/
				newKey:"",/*新密码*/
				newKey2:""/*新密码*/}
			$("#scroller").find("[D_type='simple']").each(function(){
				$(this).unbind("change").bind("change",function(){
					sendData[$(this).attr("D_data")]=$(this).val();
					})
				})
			$("#scroller").find("button").unbind("click").bind("click",function(){
				if(sendData["newKey"]&&sendData["newKey"]==sendData["newKey2"]){
					app.api.run("resetKey",sendData,function(){
						alert("修改成功")
						window.location.hash="account";
						},function(){
						alert("修改不成功")
						})
					}
				})
			}
		})
	})(app.control);