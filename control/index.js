// JavaScript Document
;(function(obj){
	obj.set({
		name:"index",
		par:"a/b/f/e/k",
		tem:["index","indexB"],
		fn:function(data){
			$("body").html(data.tem[1])
			}
		})
	})(app.control);