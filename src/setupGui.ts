import { Camera, PointLight, Scene } from "three";
import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";
import { POSITIONS } from "./helpers/constants";
import * as THREE from "three";

export function setupGui(scene: Scene, pointLight: PointLight, camera: Camera) {
  const gui = new GUI();

  const cameraFolder = gui.addFolder("Camera");
  cameraFolder.add(camera.position, "x", -10, 10);
  cameraFolder.add(camera.position, "y", -10, 10);
  cameraFolder.add(camera.position, "z", -10, 10);
  cameraFolder.open();

  pointLight.position.set(POSITIONS.sun.x, POSITIONS.sun.y, POSITIONS.sun.z);
  pointLight.visible = true;
  scene.add(pointLight);

  const data = { color: 0x00ff00, lightColor: 0xffffff };

  const pointLightHelper = new THREE.PointLightHelper(pointLight);
  pointLightHelper.visible = false;
  scene.add(pointLightHelper);

  const pointLightFolder = gui.addFolder("Pointlight");
  pointLightFolder.add(pointLight, "visible");
  pointLightFolder.addColor(data, "lightColor").onChange(() => {
    pointLight.color.set(data.lightColor);
  });
  pointLightFolder.add(pointLight, "intensity", 0, Math.PI * 10);

  const pointLightFolderControls = pointLightFolder.addFolder("Controls");
  pointLightFolderControls.add(pointLight.position, "x", -10, 10);
  pointLightFolderControls.add(pointLight.position, "y", -10, 10);
  pointLightFolderControls.add(pointLight.position, "z", -10, 10);
  pointLightFolderControls.add(pointLight, "distance", 0, 20).onChange(() => {
    pointLightHelper.update();
  });
  pointLightFolderControls.add(pointLight, "decay", 0, 10).onChange(() => {
    pointLightHelper.update();
  });
  pointLightFolderControls
    .add(pointLightHelper, "visible")
    .name("Helper Visible");
  pointLightFolderControls.close();
}
