import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { PLANETS, POSITIONS } from "./helpers/constants";
import { Planet, PlanetName } from "./types/types";
import { setupGui } from "./setupGui";
import { createPlanet } from "./helpers/functions";
import { Lensflare, LensflareElement } from "three/addons/objects/Lensflare.js";

const scene = new THREE.Scene();

// scene.add(new THREE.GridHelper());

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.set(-5, 30, -5);

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

const pointLight = new THREE.PointLight(0xffffff, 25.7, 0, 0.6);
pointLight.castShadow = true;

pointLight.position.set(POSITIONS.sun.x, POSITIONS.sun.y, POSITIONS.sun.z);
pointLight.visible = true;
scene.add(pointLight);

const textureLoader = new THREE.TextureLoader();
const textureFlare0 = textureLoader.load(
  "https://cdn.jsdelivr.net/gh/Sean-Bradley/First-Car-Shooter@main/dist/client/img/lensflare0.png"
);

const lensflare = new Lensflare();
lensflare.addElement(new LensflareElement(textureFlare0, 100, 15));
//pointLight.add(lensflare);

setupGui(scene, pointLight, camera);

const planets: Planet[] = Object.entries(PLANETS).map(([key, value]) => {
  const planet = createPlanet(key as PlanetName, value.color);
  planet.position.set(value.coords.x, value.coords.y, value.coords.z);
  return planet;
});

scene.add(...planets);

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
