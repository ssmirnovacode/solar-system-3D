import { POSITIONS } from "../helpers/constants.ts";
import * as THREE from "three";

type PlanetName = keyof typeof POSITIONS;
type Planet = THREE.Mesh<
  THREE.SphereGeometry,
  THREE.MeshBasicMaterial | THREE.MeshStandardMaterial,
  THREE.Object3DEventMap
>;

export type { PlanetName, Planet };
