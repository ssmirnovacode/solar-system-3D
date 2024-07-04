import * as THREE from "three";
import { SIZES } from "./constants";
import { PlanetName } from "../types/types";

export function getGeometry(radius: number): THREE.SphereGeometry {
  return new THREE.SphereGeometry(radius);
}

export function createPlanet(planetName: PlanetName, color: number) {
  const material =
    planetName === "sun"
      ? new THREE.MeshBasicMaterial({ color })
      : new THREE.MeshStandardMaterial({ color });
  return new THREE.Mesh(getGeometry(SIZES[planetName]), material);
}
