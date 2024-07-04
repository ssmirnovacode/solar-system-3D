import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { PLANETS, SIZES } from "./helpers/constants";
import { PlanetName } from "./types/types";
import { setupGui } from "./setupGui";
import { createPlanet } from "./helpers/functions";

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

const pointLight = new THREE.PointLight(0xffffff, 25.7, 0, 1.31);

setupGui(scene, pointLight, camera);

const planets = Object.entries(PLANETS).map(([key, value]) => {
  const planet = createPlanet(key as PlanetName, value.color);
  planet.position.set(value.coords.x, value.coords.y, value.coords.z);
  return planet;
});

scene.add(...planets);

function animate() {
  requestAnimationFrame(animate);

  controls.update();

  renderer.render(scene, camera);
}

animate();
