const THREE = require("./three");

// ==========================
// 초기화 부분 시작 ( 이 부분은 문서에서 한번만 수행되면 됩니다 )
// ==========================
// 3차원 세계
var scene = new THREE.Scene();

// 카메라 ( 카메라 수직 시야 각도, 가로세로 종횡비율, 시야거리 시작지점, 시야거리 끝지점
var camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// 렌더러 정의 및 크기 지정, 문서에 추가하기
var renderer = new THREE.WebGLRenderer({
  antialias: true,
  preserveDrawingBuffer: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

// 빛을 생성해서
var light1 = new THREE.PointLight(0xffffff, 1, 100);
// 위치를 적당한 지점에 놓고
light1.position.set(5, 5, 5);
// 장면에 추가합니다.
scene.add(light1);

// 빛을 또한 생성해서
var light2 = new THREE.PointLight(0xffffff, 1, 100);
// 위치를 적당한 지점에 놓고
light2.position.set(7, -5, 6);
// 장면에 추가합니다.
scene.add(light2);

// 빛을 또한 생성해서
var light3 = new THREE.PointLight(0xffffff, 1, 100);
// 위치를 적당한 지점에 놓고
light3.position.set(-7, 3, 3);
// 장면에 추가합니다.
scene.add(light3);

var loader = new THREE.TextureLoader();

var mesh;
loader.load(
  "file:///C://Documents/guess-mine/assets/photos/PS17100100497.jpg",
  function (texture) {
    mesh = new THREE.Mesh(
      new THREE.BoxGeometry(3, 3, 3),
      new THREE.MeshStandardMaterial({ map: texture })
    );
    mesh.name = "Box1";
    scene.add(mesh);
  }
);

// 카메라의 Z좌표를 물체에서 7 정도 떨어진 지점에 위치합니다.
camera.position.z = 7;

camera.position.y = 5;
camera.rotation.x = -35 * (Math.PI / 180);

camera.position.x = 5;
camera.rotation.y = 35 * (Math.PI / 180);

// ==========================
// 초기화 부분 끝
// ==========================

var framesPerSecond = 60;
var speed = 0;

// 에니메이션 효과를 자동으로 주기 위한 보조 기능입니다.
var animate = function () {
  // 프레임 처리
  setTimeout(function () {
    requestAnimationFrame(animate);
  }, 1000 / framesPerSecond);

  if (speed > 0) {
    mesh.rotation.y += speed;
    speed -= 0.001;
  }

  // 랜더링을 수행합니다.
  renderer.render(scene, camera);
};

// animate()함수를 최초에 한번은 수행해주어야 합니다.
animate();

function onDocumentMouseDown(event) {
  event.preventDefault();
  var mouse = new THREE.Vector2(
    (event.clientX / window.innerWidth) * 2 - 1,
    -(event.clientY / window.innerHeight) * 2 + 1
  );
  var raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(mouse, camera);
  var intersects = raycaster.intersectObjects(scene.children);
  if (intersects.length > 0) {
    if (intersects[0].object.name == "Box1") {
      speed += 0.05;
    }
  }
}

document.addEventListener("mousedown", onDocumentMouseDown, false);
