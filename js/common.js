// JavaScript Document
;(function(){
	window.app={};
	app.route={};
	app.control={};
	app.cache={};
	app.api={}
	app.cookies=function(key,value){
		if(value&&typeof(value)=="object"){
			Cookies("xz_"+key,JSON.stringify(value),{expires:60*30});
			}else if(Cookies("xz_"+key)){
				return JSON.parse(Cookies("xz_"+key));
				}else{
					return false;
					}
		}
	})();