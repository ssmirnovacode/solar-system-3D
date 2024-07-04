import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { PLANETS, SIZES } from "./helpers/constants";
import { Planet, PlanetName } from "./types/types";
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
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

const pointLight = new THREE.PointLight(0xffffff, 25.7, 0, 1.31);
pointLight.castShadow = true;

setupGui(scene, pointLight, camera);

const planets: Planet[] = Object.entries(PLANETS).map(([key, value]) => {
  const planet = createPlanet(key as PlanetName, value.color);
  planet.position.set(value.coords.x, value.coords.y, value.coords.z);
  return planet;
});
console.log(planets[3]);
scene.add(...planets);
// let radius = 2;
// let angle = 0;
let speed = 0.01;

const balls = planets.map((planet) => buildAnimationObject(planet));

function buildAnimationObject(planet: Planet) {
  return {
    mesh: planet,
    radius: planet.position.x,
    angle: 0,
  };
}

function animate() {
  requestAnimationFrame(animate);

  balls.forEach((planet) => {
    // Calculate the new position
    // @ts-ignore
    planet.angle += speed / planet.mesh.speed;
    planet.mesh.position.x = planet.radius * Math.cos(planet.angle);
    planet.mesh.position.y = planet.radius * Math.sin(planet.angle);
    // planet.mesh.position.z = planet.radius * Math.sin(planet.angle);
  });

  // Render the scene
  renderer.render(scene, camera);
  controls.update();

  //renderer.render(scene, camera);
}

animate();
