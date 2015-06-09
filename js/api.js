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
			if(data&&typeof(data)=="obj"){
				data.time=api[name].cacheTime;
				data=JSON.stingify(data);
				}
			$.ajax({ 
							url:api[name].url,
							dataType:"json",
							method:api[name].method,
							data:data,
							error:function(){
								err();
								},
							success: function(data){
								if(data&&data.code!=0){
									if(data.code==1){
										api[name].cache=data.data;
										api[name].cacheTime=data.time;
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
		add(name,url,data,cache,method);
		}
	obj.run=function(name,data,suc,err){
		run(name,fn);
		}
	})(app.api);