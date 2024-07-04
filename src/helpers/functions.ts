import * as THREE from "three";
import { PLANETS, SIZES } from "./constants";
import { PlanetName } from "../types/types";

export function getGeometry(radius: number): THREE.SphereGeometry {
  return new THREE.SphereGeometry(radius);
}

export function createPlanet(planetName: PlanetName, color: number) {
  const isSun = planetName === "sun";
  const material = isSun
    ? new THREE.MeshBasicMaterial({ color })
    : new THREE.MeshStandardMaterial({ color });
  const planet = new THREE.Mesh(getGeometry(SIZES[planetName]), material);
  planet.castShadow = !isSun;
  planet.receiveShadow = !isSun;

  // @ts-ignore
  planet.speed = PLANETS[planetName].speed;

  return planet;
}
