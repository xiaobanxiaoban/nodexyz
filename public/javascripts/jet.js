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
		var angle = 3.1415926 / 180 * i++;
		displayObject.rotation.set(angle, angle, angle);
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
	 * fov, aspect, near, far
	 */
	camera = new THREE.PerspectiveCamera(120, sceneWidth / sceneHeight, -15, 10);
	camera.position.set(8, 8, 30);
	camera.lookAt(new THREE.Vector3(8, 8, 2));
}

function initScene() {
	scene = new THREE.Scene();
}

//设置物体
function initObject() {

	var geometry = new THREE.BoxGeometry(9, 6, 4);
	var faceColors = [0xDE5B25, 0x1BA261, 0x05E6FC, 0xFFFFD7, 0xFF0000, 0x5348B7];
	for (var i = 0; i < geometry.faces.length; i += 2) {
		geometry.faces[ i ].color.setHex(faceColors[i / 2]);
		geometry.faces[ i + 1 ].color.setHex(faceColors[i / 2]);
	}
	var material = new THREE.MeshBasicMaterial({ vertexColors: THREE.FaceColors, overdraw: 0.5 });
	var cube = new THREE.Mesh(geometry, material);
	displayObject = cube;


//	displayObject = new THREE.Mesh(new THREE.CubeGeometry(8, 4, 3),
//		new THREE.MeshBasicMaterial({
//			color: 0x0000FF,
//			wireframe: true
//		})
//	);
	displayObject.position.set(-4, 5, 5);
	scene.add(displayObject);
}

/**
 * 创建XYZ三个轴
 */
var initLine = function () {
	createLine(100, 0, 0, 0xFF0000);
	createLine(0, 100, 0, 0x208E24);
	createLine(0, 0, 100, 0xFFCE44);
}

var createLine = function (x, y, z, color) {
	{
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

}