// JavaScript Document
;(function(obj){
	obj.control.bind=function(scope,data,eventArry){
		var cdata=$.extend({},data);
		for (var type in eventArry){
			scope.find("[D_type='"+type+"']").each(function(){
				var target=$(this);
				for (var eve in eventArry[type]){
					if(eve=="init"){
					eventArry[type][eve](target,cdata[target.attr("D_data")]);
					}else{
						$(this).unbind(eve).bind(eve,function(e){
							eventArry[type][eve](e,cdata[$(this).attr("D_data")]);
							})
						}
					}	
				});
			} 
		}
	obj.control.set=function(data){
		obj.route.set(data);
		}
	})(app);