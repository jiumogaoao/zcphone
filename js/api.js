// JavaScript Document
;(function(obj){
	var api={};
	var add=function(name,url,data,method){
		if(!api[name]){
			api[name]={url:url||"",
						data:data||null,
						cache:null,
						method:method||"get",
						cacheTime:0
			}
			return api[name];
			}
		}
	var run=function(name,data,suc,err){
		if(api[name]){
			if(!data){
				data=api[name].cacheTime
				}
			if(data&&typeof(data)=="object"){
				data.time=api[name].cacheTime;
				data=JSON.stringify(data);
				}
				var sendData=$.extend({},api[name].data);
				sendData.data=data;
			$.ajax({ 
							url:api[name].url,
							dataType:"json",
							method:api[name].method,
							data:sendData,
							error:function(){
								err();
								},
							success: function(returnData){
								if(returnData&&returnData.code!=0){
									if(returnData.code==1){
										api[name].cache=returnData.data;
										api[name].cacheTime=returnData.time;
										}
									suc($.extend({},api[name].cache));
								}else{
									err();
									}
								}
						});	
			}else{
				return false;
				}
		}
	obj.add=function(name,url,data,method){
		add(name,url,data,method);
		}
	obj.run=function(name,data,suc,err){
		run(name,data,suc,err);
		}
	})(app.api);