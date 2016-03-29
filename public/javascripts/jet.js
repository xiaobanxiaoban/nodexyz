var renderer;//声明全局变量（对象）
var displayObject;
var camera;
var scene;
var sceneWidth;
var sceneHeight;

$(function () {
	initThree();
	initCamera();
	initScene();
	initLine();
	initObject();
	renderer.clear();
	renderer.render(scene, camera);
	var i = 0;
	var move = function () {
		displayObject.rotation.set(3.1415926 / 180 * i++, 0, 0);
		renderer.render(scene, camera);
	}
	setInterval(move, 1);
});

function initThree() {
	sceneWidth = document.getElementById('canvas3d').clientWidth;//获取画布「canvas3d」的宽
	sceneHeight = document.getElementById('canvas3d').clientHeight;//获取画布「canvas3d」的高
	renderer = new THREE.WebGLRenderer({antialias: true});//生成渲染器对象（属性：抗锯齿效果为设置有效）
	renderer.setSize(sceneWidth, sceneHeight);//指定渲染器的高宽（和画布框大小一致）
	document.getElementById('canvas3d').appendChild(renderer.domElement);//追加 【canvas】 元素到 【canvas3d】 元素中。
//	renderer.setClearColor(0xBDDEFD, 1.0);//设置canvas背景色(clearColor)
}

function initCamera() {
	/**
	 * left, right, top, bottom, near, far
	 */
	camera = new THREE.PerspectiveCamera(90, 1, -10, 10);
	camera.position.set(5, 5, 20);
	camera.lookAt(new THREE.Vector3(5, 5, 0));
}

function initScene() {
	scene = new THREE.Scene();
}

//设置物体
function initObject() {
	displayObject = new THREE.Mesh(new THREE.CubeGeometry(6, 4, 3),
		new THREE.MeshBasicMaterial({
			color: 0x0000FF,
			wireframe: true
		})
	);
	displayObject.position.set(3, 3, 3);
	displayObject.rotation.set(3.1415926 / 180 * 10, 0, 0);
	scene.add(displayObject);
}

var initLine=function(){
	createLine(100, 0, 0, 0xFF0000);
	createLine(0, 100, 0, 0x208E24);
	createLine(0, 0, 100, 0xFFCE44);
}

var createLine = function (x, y, z, color) {
	var geometry = new THREE.Geometry();
	var material = new THREE.LineBasicMaterial({ vertexColors: true });
	var color1 = new THREE.Color(color), color2 = new THREE.Color(color);
	var p1 = new THREE.Vector3(0, 0, 0);
	var p2 = new THREE.Vector3(x, y, z);
	geometry.vertices.push(p1);
	geometry.vertices.push(p2);
	geometry.colors.push(color1, color2);
	var line = new THREE.Line(geometry, material, THREE.LinePieces);
	scene.add(line);
}