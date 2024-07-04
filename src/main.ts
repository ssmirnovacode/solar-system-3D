import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import Stats from "three/addons/libs/stats.module.js";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";
import { POSITIONS, SIZES } from "./helpers/constants";

const scene = new THREE.Scene();

scene.add(new THREE.GridHelper());

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.set(-1, 4, 2.5);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

function getGeometry(radius: number): THREE.SphereGeometry {
  return new THREE.SphereGeometry(radius);
}

const sun = new THREE.Mesh(
  getGeometry(SIZES.sun),
  new THREE.MeshBasicMaterial({ color: 0xffff33 })
);

sun.position.set(POSITIONS.sun.x, POSITIONS.sun.y, POSITIONS.sun.z);

scene.add(sun);

const earth = new THREE.Mesh(
  getGeometry(SIZES.earth),
  new THREE.MeshBasicMaterial({ color: 0x33afff })
);

earth.position.set(POSITIONS.earth.x, POSITIONS.earth.y, POSITIONS.earth.z);

scene.add(earth);

const gui = new GUI();

const earthFolder = gui.addFolder("earth");
earthFolder.add(earth.rotation, "x", 0, Math.PI * 2);
earthFolder.add(earth.rotation, "y", 0, Math.PI * 2);
earthFolder.add(earth.rotation, "z", 0, Math.PI * 2);
earthFolder.open();

const cameraFolder = gui.addFolder("Camera");
cameraFolder.add(camera.position, "z", 0, 20);
cameraFolder.open();

function animate() {
  requestAnimationFrame(animate);

  controls.update();

  renderer.render(scene, camera);
}

animate();
