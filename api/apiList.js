// JavaScript Document
//获取商品
app.api.add("getProduct","http://"+config.sour+":8888/",{model:"product",action:"get"},"get");
//修改客户
app.api.add("editClient","http://"+config.sour+":8888/",{model:"client",action:"edit"},"get");
//检查用户
app.api.add("checkUser","http://"+config.sour+":8888/",{model:"client",action:"checkUser"},"get");
/*检测用户名*/
app.api.add("checkUserName","http://"+config.sour+":8888/",{model:"client",action:"checkUserName"},"get");
/*检测手机号*/
app.api.add("checkPhone","http://"+config.sour+":8888/",{model:"client",action:"checkPhone"},"get");
/*检测邮箱*/
app.api.add("checkEmail","http://"+config.sour+":8888/",{model:"client",action:"checkEmail"},"get");
/*登录*/
app.api.add("login","http://"+config.sour+":8888/",{model:"client",action:"login"},"get");
/*注册*/
app.api.add("register","http://"+config.sour+":8888/",{model:"client",action:"register"},"get");
/*重置密码*/
app.api.add("resetKey","http://"+config.sour+":8888/",{model:"client",action:"resetKey"},"get");
/*获取绑定*/
app.api.add("getBind","http://"+config.sour+":8888/",{model:"client",action:"getBind"},"get");
/*获取验证码*/
app.api.add("getBindCode","http://"+config.sour+":8888/",{model:"client",action:"getBindCode"},"get");
/*绑定*/
app.api.add("bind","http://"+config.sour+":8888/",{model:"client",action:"bind"},"get");
/*获取安全问题*/
app.api.add("bind","http://"+config.sour+":8888/",{model:"client",action:"getSafeQusetion"},"get");
/*设置安全问题*/
app.api.add("setSafeQusetion","http://"+config.sour+":8888/",{model:"client",action:"getSafeQusetion"},"get");
/*验证安全问题*/
app.api.add("checkSafeQusetion","http://"+config.sour+":8888/",{model:"client",action:"checkSafeQusetion"},"get");
/*获取公告*/
app.api.add("getannouncement","http://"+config.sour+":8888/",{model:"announcement",action:"get"},"get");
/*获取招聘*/
app.api.add("getrecruit","http://"+config.sour+":8888/",{model:"recruit",action:"get"},"get");
/*获取企业资料*/
app.api.add("getcompany","http://"+config.sour+":8888/",{model:"company",action:"get"},"get");
/*获取宣传*/
app.api.add("getpromotion","http://"+config.sour+":8888/",{model:"promotion",action:"get"},"get");
/*获取单用户红包*/
app.api.add("redPacketDetail","http://"+config.sour+":8888/",{model:"redPacket",action:"detail"},"get");
/*添加订单*/
app.api.add("adddeal","http://"+config.sour+":8888/",{model:"deal",action:"add"},"get");
/*修改订单*/
app.api.add("editdeal","http://"+config.sour+":8888/",{model:"deal",action:"edit"},"get");
/*获取交易记录*/
app.api.add("getdealList","http://"+config.sour+":8888/",{model:"deal",action:"list"},"get");