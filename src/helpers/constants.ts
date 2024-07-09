// const multiplier = 3.5; // 1 AU (for viewing purposes)

// const EARTH_RADIUS = 0.15; // 1
// const SUN_RADIUS = EARTH_RADIUS * 1; // 109 For viewing purposes, we will imagine that the sun is 10 times smaller than in reality
// const MERCURY_RADIUS = EARTH_RADIUS * 0.38;
// const MARS_RADIUS = EARTH_RADIUS * 0.53;
// const VENUS_RADIUS = EARTH_RADIUS * 0.95;
// const JUPITER_RADIUS = EARTH_RADIUS * 11.21;
// const SATURN_RADIUS = EARTH_RADIUS * 9.45;
// const URANUS_RADIUS = EARTH_RADIUS * 4.01;
// const NEPTUNE_RADIUS = EARTH_RADIUS * 3.88;

const EARTH_RADIUS = 1;
const SUN_RADIUS = EARTH_RADIUS * 7; // 109 For viewing purposes, we will imagine that the sun is 10 times smaller than in reality
const MERCURY_RADIUS = EARTH_RADIUS * 0.38;
const MARS_RADIUS = EARTH_RADIUS * 0.53;
const VENUS_RADIUS = EARTH_RADIUS * 0.95;
const JUPITER_RADIUS = EARTH_RADIUS * 2;
const SATURN_RADIUS = EARTH_RADIUS * 1.7;
const URANUS_RADIUS = EARTH_RADIUS * 1.4;
const NEPTUNE_RADIUS = EARTH_RADIUS * 1.3;

const POSITIONS = {
  sun: {
    x: 0,
    y: 0,
    z: 0,
  },

  mercury: {
    x: SUN_RADIUS / 3 + 4, // 0.39 * multiplier + 1, // move further from sun
    y: 2,
    z: 1,
  },
  venus: {
    x: SUN_RADIUS / 3 + 7, // 0.72 * multiplier + 1, // move further from sun
    y: 0,
    z: 1.5,
  },
  earth: {
    x: SUN_RADIUS / 3 + 10, // 1 * multiplier + 1, // move further from sun
    y: 0,
    z: 0,
  },
  mars: {
    x: SUN_RADIUS / 3 + 15, // 1.52 * multiplier + 1, // move further from sun
    y: 0,
    z: 2,
  },
  jupiter: {
    x: 30, // 5.2 * multiplier,
    y: 0,
    z: 3,
  },
  saturn: {
    x: 50, // 9.58 * multiplier,
    y: 0,
    z: -1,
  },
  uranus: {
    x: 70, // 19.58 * multiplier,
    y: 5,
    z: -7,
  },
  neptune: {
    x: 90, // 30.07 * multiplier,
    y: 2,
    z: -9,
  },
};

const SPEED = {
  earth: 1,
  sun: 1,
  mercury: 0.24,
  venus: 0.62,
  mars: 1.88,
  jupiter: 11.86,
  saturn: 29.46,
  uranus: 84.01,
  neptune: 164.79,
};

const SIZES = {
  earth: EARTH_RADIUS, // 1
  sun: SUN_RADIUS, // 109,
  mercury: MERCURY_RADIUS, // .38
  venus: VENUS_RADIUS, // 0.95
  mars: MARS_RADIUS, // 0.53
  jupiter: JUPITER_RADIUS,
  saturn: SATURN_RADIUS,
  uranus: URANUS_RADIUS,
  neptune: NEPTUNE_RADIUS,
};

const PLANETS = {
  earth: {
    size: SIZES.earth,
    coords: POSITIONS.earth,
    color: 0x33afff,
    speed: SPEED.earth,
  },
  sun: {
    size: SIZES.sun,
    coords: POSITIONS.sun,
    color: 0xffff33,
    speed: SPEED.sun,
  },
  mars: {
    size: SIZES.mars,
    coords: POSITIONS.mars,
    color: 0xff6633,
    speed: SPEED.mars,
  },
  mercury: {
    size: SIZES.mercury,
    coords: POSITIONS.mercury,
    color: 0x666699,
    speed: SPEED.mercury,
  },
  venus: {
    size: SIZES.venus,
    coords: POSITIONS.venus,
    color: 0xff99ff,
    speed: SPEED.venus,
  },
  jupiter: {
    size: SIZES.jupiter,
    coords: POSITIONS.jupiter,
    color: 0x993333,
    speed: SPEED.jupiter,
  },
  saturn: {
    size: SIZES.saturn,
    coords: POSITIONS.saturn,
    color: 0x996633,
    speed: SPEED.saturn,
  },
  uranus: {
    size: SIZES.uranus,
    coords: POSITIONS.uranus,
    color: 0x003399,
    speed: SPEED.uranus,
  },
  neptune: {
    size: SIZES.neptune,
    coords: POSITIONS.neptune,
    color: 0x339966,
    speed: SPEED.neptune,
  },
};

export { POSITIONS, SIZES, PLANETS };
