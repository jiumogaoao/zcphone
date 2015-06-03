// JavaScript Document
;(function(obj){
	var api={};
	var add=function(name,url,data,cache,method){
		if(!api[name]){
			api[name]={url:url||"",
						data:data||null,
						cache:cache||null,
						method:method||"get"
			}
			return api[name];
			}
		}
	var run=function(name,data,suc,err){
		if(api[name]){
			$.ajax({ 
							url:api[name].url,
							dataType:"json",
							method:api[name].method,
							data:data,
							error:function(){
								err();
								},
							success: function(data){
								if(data.code!=0){
									if(api[name].cache&&app.cache.get(api[name].cache)){
									app.cache.set(api[name].cache,data.data);
									suc(app.cache.get(api[name].cache));
									}else{
										suc(data.data);
										}
								}else{
									err();
									}
								}
						});	
			}else{
				return false;
				}
		}
	obj.add=function(name,fn){
		add(name,fn);
		}
	obj.run=function(name,data,suc,err){
		run(name,fn);
		}
	})(app.api);