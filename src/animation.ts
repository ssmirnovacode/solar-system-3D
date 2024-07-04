import * as THREE from "three";
import { Planet } from "./types/types";

export function runAnimation(
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.Camera,
  body: Planet
) {
  return function animate() {
    requestAnimationFrame(animate);

    // Calculate the new position
    // angle += speed;
    // body.position.x = radius * Math.cos(angle);
    // body.position.y = radius * Math.sin(angle);

    // Render the scene
    renderer.render(scene, camera);
  };
}
