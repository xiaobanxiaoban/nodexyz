if(window.WebSocket){
	var ws = new WebSocket('ws://192.168.1.1:8001');
	ws.onopen = function(e){
		console.log("连接服务器成功");
	}
	ws.onclose = function(e){
		console.log("服务器关闭");
	}
	ws.onerror = function(){
		console.log("连接出错");
	}
	ws.onmessage = function(e,value){
		var imu=$.parseJSON(e.data);
		for(var x in imu){
			for(var y in imu[x]){
				var value=imu[x][y];
				if(typeof value=="object"){
					for(var z in value){
						$("[name='"+x+"_"+y+"_"+z+"']").val(value[z]);
					}
					continue;
				}
				if(typeof value=="number"){
					value=parseFloat(value).toFixed(4);
				}
				$("[name='"+x+"_"+y+"']").val(value);
			}
		}
		$("#date").text();
	}
}else{
	alert("该浏览器不支持websocket，无法支持本程序，请换用其他的浏览器，推荐Chrome浏览器！");
	throw new Error("browser not supported!");
}

$(function(){
	//ws.send($(":text").val());
});