import { Camera, PointLight, Scene } from "three";
import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";
import * as THREE from "three";

export function setupGui(scene: Scene, pointLight: PointLight, camera: Camera) {
  const gui = new GUI();

  const cameraFolder = gui.addFolder("Camera");
  cameraFolder.add(camera.position, "x", -10, 10);
  cameraFolder.add(camera.position, "y", -10, 10);
  cameraFolder.add(camera.position, "z", -10, 10);

  cameraFolder.close();

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

  pointLightFolder.close();

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

  // const flareFolder = gui.addFolder("Lens Flare");

  // const flareParams = {
  //   color: pointLight.color.getHex(),
  //   intensity: pointLight.intensity,
  //   distance: pointLight.distance,
  // };

  // flareFolder.addColor(flareParams, "color").onChange((value) => {
  //   pointLight.color.setHex(value);
  // });
  // flareFolder.add(flareParams, "intensity", 0, 2).onChange((value) => {
  //   pointLight.intensity = value;
  // });
  // flareFolder.add(flareParams, "distance", 0, 5000).onChange((value) => {
  //   pointLight.distance = value;
  // });
  // flareFolder.open();

  // gui.hide();
}
