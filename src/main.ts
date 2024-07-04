import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import Stats from "three/addons/libs/stats.module.js";
import { GUI } from "three/addons/libs/lil-gui.module.min.js";
import { PLANETS, POSITIONS, SIZES } from "./helpers/constants";
import { PlanetName } from "./types/types";

const scene = new THREE.Scene();

scene.add(new THREE.GridHelper());

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.set(5, 5, 5);

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

function createPlanet(planetName: PlanetName, color: number) {
  return new THREE.Mesh(
    getGeometry(SIZES[planetName]),
    new THREE.MeshBasicMaterial({ color })
  );
}

const planets = Object.entries(PLANETS).map(([key, value]) => {
  const planet = createPlanet(key as PlanetName, value.color);
  planet.position.set(value.coords.x, value.coords.y, value.coords.z);
  return planet;
});

scene.add(...planets);

// const sun = createPlanet("sun", 0xffff33);
// // new THREE.Mesh(
// //   getGeometry(SIZES.sun),
// //   new THREE.MeshBasicMaterial({ color: 0xffff33 })
// // );

// sun.position.set(POSITIONS.sun.x, POSITIONS.sun.y, POSITIONS.sun.z);

// scene.add(sun);

// const earth = new THREE.Mesh(
//   getGeometry(SIZES.earth),
//   new THREE.MeshBasicMaterial({ color: 0x33afff })
// );

// earth.position.set(POSITIONS.earth.x, POSITIONS.earth.y, POSITIONS.earth.z);

// scene.add(earth);

const gui = new GUI();

const cameraFolder = gui.addFolder("Camera");
cameraFolder.add(camera.position, "z", 0, 20);
cameraFolder.open();

function animate() {
  requestAnimationFrame(animate);

  controls.update();

  renderer.render(scene, camera);
}

animate();
