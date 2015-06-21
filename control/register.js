// JavaScript Document
;(function(obj){
	obj.set({
		name:"register",
		par:"a/b/f/e/k",
		tem:["register"],
		fn:function(data){
			$("#leftButton").hide();
			$("#centerTitle").html("请填写基本信息并注册");
			$("#rightButton").html("登录");
			$("#rightButton").unbind("tap").bind("tap",function(){
				window.location.hash="index";
				});
			var code="";
		var userCheck=false;
		var phoneCheck=false;
		var emailCheck=false;
		var templateData = {
		"id":uuid(),/*id*/
		"type":1,/*类型,1普通用户2管理用户*/
		"userName":"",/*用户名*/
		"image":"",/*头像*/
		"sex":"1",/*性别*/
		"place":"",/*地址*/
		"phone":"",/*手机*/
		"email":"",/*邮箱*/
		"name":"",/*真实姓名*/
		"contacts":"",/*联系人*/
		"contactsPhone":"",/*联系人电话*/
		"record":"",/*学历*/
		"university":"",/*毕业院校*/
		"job":"",/*职位*/
		"company":"",/*公司*/
		"password":"",
		"password2":"",
		"code":""/*验证码*/
	}
			$("#scroller").html(data.tem[0]);
			myScroll.refresh();
			var getcodeTime;
		  function getcode(){
			  $("#scroller").find("#btnSendmsg").html("获取验证码");
			  $("#scroller").find("#btnSendmsg").unbind("tap").bind("tap",function(){
				  
			  app.api.run("getBindCode",{"type":"phone",number:$(this).parents("form").find("[D_data='phone']").val()},function(data){
				  console.log(data)
				  code=data;
				  var totalTime=60;
				  $("#scroller").find("#btnSendmsg").unbind("click")
				  getcodeTime=setInterval(function(){
					  $("#btnSendmsg").html(totalTime+"秒后可重新发送验证码")
					  totalTime--;
					  if(totalTime==0){
						  clearInterval(getcodeTime);
						  getcode();
						  }
					  },1000)
				  },function(){
					  alert("发送失败，请检查手机号是否有效")
					  })
			  }) 
			  }
		  getcode()
		 $("#scroller").find("[D_type='simple']").each(function(i,n){
			  $(this).unbind("change").bind("change",function(){
				  templateData[$(this).attr("D_data")]=$(this).val();
				  })
			  });
		$("#scroller").find("[D_data='userName']").on("change",function(){
			  app.api.run("checkUser",$(this).val(),function(){
				  userCheck=true;
				  },function(){
					  userCheck=false;
					  alert("账号已注册")
					  })
			  });
		  $("#scroller").find("[D_data='email']").on("change",function(){
			  app.api.run("checkEmail",$(this).val(),function(){
				  emailCheck=true;
				  },function(){
					  emailCheck=false;
					  alert("邮箱已注册")
					  })
			  });
		$("#scroller").find("[D_data='phone']").on("change",function(){
			  app.api.run("checkPhone",$(this).val(),function(){
				  phoneCheck=true;
				  },function(){
					  phoneCheck=false;
					  alert("手机已注册")
					  })
			  });
		$("#scroller").find("#registerSend").unbind("tap").bind("tap",function(){
			if(!userCheck){
				alert("请填写唯一的用户名")
				return false;
				}
			if(!phoneCheck){
				alert("请填写唯一的手机号")
				return false;
				}
			if(!emailCheck){
				alert("请填写唯一的邮箱")
				return false;
				}
			if(!code||code!=templateData.code){
				alert("请填写正确验证码")
				return false;
				}
			app.api.run("register",templateData,function(){
				alert("注册成功");
				window.location.hash="login";
				},function(){alert("err")});
			})
			}
		})
	})(app.control);