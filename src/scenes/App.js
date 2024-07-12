import { GLTFLoader, OrbitControls } from 'three/examples/jsm/Addons.js';
import * as THREE from 'three'


function App() {

  //renderer
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: false,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  
  //scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xffffff);

  
  //camera
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 0, 3);


  //control
  const controls = new OrbitControls( camera, renderer.domElement);
  controls.update();
  

  //mesh
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
  const cube = new THREE.Mesh(geometry, material);

  const light = new THREE.DirectionalLight(0xffff00, 10);
  scene.add(light);

  const loader = new GLTFLoader();
  loader.load('/shiba/scene.gltf', function(gltf) {
    scene.add(gltf.scene);

    function animate() {
      requestAnimationFrame(animate);
      // gltf.scene.rotation.y += 0.005;
      // gltf.scene.rotation.z += 0.005;
      controls.update();
      renderer.render(scene, camera);
    }
    animate();
  });
  document.body.appendChild(renderer.domElement);
  //scene.add(cube);


  // function animate() {
  //   requestAnimationFrame(animate);
  //   renderer.render(scene, camera);
  //   cube.rotation.y += 0.01;
  // }
  // animate();


  // 반응형 처리
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  window.addEventListener("resize", onWindowResize);

  return (
    <div className="App">
    </div>
  );
}

export default App;
