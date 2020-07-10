const THREE = require("three");
​
var scene = new THREE.Scene();
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
​
// 빛을 생성해서
var light1 = new THREE.PointLight(0xffffff, 1, 100);
// 위치를 적당한 지점에 놓고
light1.position.set(5, 5, 5);
// 장면에 추가합니다.
scene.add(light1);
​
// 빛을 또한 생성해서
var light2 = new THREE.PointLight(0xffffff, 1, 100);
// 위치를 적당한 지점에 놓고
light2.position.set(7, -5, 6);
// 장면에 추가합니다.
scene.add(light2);
​
// 빛을 또한 생성해서
var light3 = new THREE.PointLight(0xffffff, 1, 100);
// 위치를 적당한 지점에 놓고
light3.position.set(-7, 3, 3);
// 장면에 추가합니다.
scene.add(light3);
​
var floor = new THREE.Mesh(
  new THREE.BoxGeometry(10, 0.0, 10),
  new THREE.MeshStandardMaterial({ color: 0xffcc99 })
);
scene.add(floor);
​
var cube = Array();
for (var i = 0, x = 0, z = 0; i < 20; ++i) {
  var height = Math.random() * 2 + 1;
  // 정육면체 하나 만들기
  cube.push(
    new THREE.Mesh(
      new THREE.BoxGeometry(0.6, height, 0.6),
      new THREE.MeshStandardMaterial({
        color: Math.round(Math.random() * 0xffffff),
      })
    )
  );
  cube[i].position.x = x - 2.5;
  cube[i].position.y = height / 2;
  cube[i].position.z = z;
​
  x++;
  if (i % 5 == 4) {
    z++;
    x = 0;
  }
​
  // 생성한 모델을 장면에 추가합니다.
  scene.add(cube[i]);
}
​
// 카메라의 Z좌표를 물체에서 7 정도 떨어진 지점에 위치합니다.
camera.position.z = 7;
camera.position.y = 5;
​
camera.rotation.x = -35 * (Math.PI / 180);
​
var framesPerSecond = 60;
​
// 에니메이션 효과를 자동으로 주기 위한 보조 기능입니다.
​
var animate = function () {
  // 프레임 처리
  setTimeout(function () {
    requestAnimationFrame(animate);
  }, 1000 / framesPerSecond);
​
  for (i = 0; i < 20; ++i) {
    cube[i].rotation.y += 0.3 * (Math.PI / 180);
  }
​
  // 랜더링을 수행합니다.
  renderer.render(scene, camera);
};
​
// animate()함수를 최초에 한번은 수행해주어야 합니다.
animate();