// JavaScript Document
;(function(obj){
	var cache={};
	var set=function(name,data){
		if(cache[name]){
			cache[name]=data;
			return cache[name];
			}else{
				return false;
				}
		}
	var get=function(name){
		if(cache[name]){
			return cache[name];
			}else{
				return false;
				}
		}
	var add=function(name,data){
		if(!cache[name]){
			cache[name]=data||{};
			return cache[name];
			}else{
				return false;
				}
		}
		obj.set=function(name,data){
			set(name,data)
			}
		obj.get=function(name){
			get(name)
			}
		obj.add=function(name,data){
			add(name,data)
			}
	})(app.cache);