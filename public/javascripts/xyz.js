if(window.WebSocket){
	var ws = new WebSocket('ws://localhost:8001');
	ws.onopen = function(e){
		console.log("连接服务器成功");
		ws.send("game1");
	}
	ws.onclose = function(e){
		console.log("服务器关闭");
	}
	ws.onerror = function(){
		console.log("连接出错");
	}
	ws.onmessage = function(e,value){
		$("#date").text(e.data);
	}
}else{
	alert("该浏览器不支持websocket，无法支持本程序，请换用其他的浏览器，推荐Chrome浏览器！");
	throw "browser not supported";
}

$(function(){
	$("#btn").click(function(){
		ws.send($(":text").val());
	});
});