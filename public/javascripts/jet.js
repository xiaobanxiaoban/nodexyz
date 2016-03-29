//开启Three.js渲染器
var renderer;//声明全局变量（对象）
var cube;
function initThree() {
	width = document.getElementById('canvas3d').clientWidth;//获取画布「canvas3d」的宽
	height = document.getElementById('canvas3d').clientHeight;//获取画布「canvas3d」的高
	renderer = new THREE.WebGLRenderer({antialias: true});//生成渲染器对象（属性：抗锯齿效果为设置有效）
	renderer.setSize(width, height);//指定渲染器的高宽（和画布框大小一致）
	document.getElementById('canvas3d').appendChild(renderer.domElement);//追加 【canvas】 元素到 【canvas3d】 元素中。
//        renderer.setClearColor(0xBDDEFD, 1.0);//设置canvas背景色(clearColor)
}
//设置相机
var camera;
function initCamera() {
	/**
	 * left, right, top, bottom, near, far
	 * @type {THREE.OrthographicCamera}
	 */
	camera = new THREE.PerspectiveCamera(90, 1, -10, 10);
	camera.position.set(5, 5, 20);
	camera.lookAt(new THREE.Vector3(5, 5, 0));
}
//设置场景
var scene;
function initScene() {
	scene = new THREE.Scene();
}

//设置物体
function initObject() {
	cube = new THREE.Mesh(new THREE.CubeGeometry(2, 4, 6),
		new THREE.MeshBasicMaterial({
			color: 0x0000FF,
			wireframe: true
		})
	);
	cube.position.set(0, 1, 0);
	cube.rotation.set(3.1415926/180*10, 0, 0);
	scene.add(cube);

	var geometry = new THREE.Geometry();
	var material = new THREE.LineBasicMaterial({ vertexColors: true });


	{
		var color1 = new THREE.Color(0xFF0000), color2 = new THREE.Color(0xFF0000);
		var p1 = new THREE.Vector3(0, 0, 0);
		var p2 = new THREE.Vector3(100, 0, 0);
		geometry.vertices.push(p1);
		geometry.vertices.push(p2);
		geometry.colors.push(color1, color2);
		var line = new THREE.Line(geometry, material, THREE.LinePieces);
		scene.add(line);
	}
	{
		var color1 = new THREE.Color(0x208E24), color2 = new THREE.Color(0x208E24);
		var p1 = new THREE.Vector3(0, 0, 0);
		var p2 = new THREE.Vector3(0, 100, 0);
		geometry.vertices.push(p1);
		geometry.vertices.push(p2);
		geometry.colors.push(color1, color2);
		var line = new THREE.Line(geometry, material, THREE.LinePieces);
		scene.add(line);
	}
	{
		var color1 = new THREE.Color(0xFFCE44), color2 = new THREE.Color(0xFFCE44);
		var p1 = new THREE.Vector3(0, 0, 0);
		var p2 = new THREE.Vector3(0, 0, 100);
		geometry.vertices.push(p1);
		geometry.vertices.push(p2);
		geometry.colors.push(color1, color2);
		var line = new THREE.Line(geometry, material, THREE.LinePieces);
		scene.add(line);
	}

}
//执行
function threeStart() {
	initThree();
	initCamera();
	initScene();
	initObject();
	renderer.clear();
	renderer.render(scene, camera);


	var i=0;
	var move=function(){
		cube.rotation.set(3.1415926/180*i++, 0, 0);
		renderer.render(scene, camera);
//            setTimeout(move,1);
	}
	setInterval(move,1);
}


$(function(){
	threeStart();
});