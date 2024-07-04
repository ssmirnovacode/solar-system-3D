const multiplier = 3; // 1 AU (for viewing purposes)

const EARTH_RADIUS = 0.15; // 1
const SUN_RADIUS = EARTH_RADIUS * 10; // 109 For viewing purposes, we will imagine that the sun is 10 times smaller than in reality
const MERCURY_RADIUS = EARTH_RADIUS * 0.38;
const MARS_RADIUS = EARTH_RADIUS * 0.53;
const VENUS_RADIUS = EARTH_RADIUS * 0.95;
const JUPITER_RADIUS = EARTH_RADIUS * 11.21;
const SATURN_RADIUS = EARTH_RADIUS * 9.45;
const URANUS_RADIUS = EARTH_RADIUS * 4.01;
const NEPTUNE_RADIUS = EARTH_RADIUS * 3.88;

const POSITIONS = {
  sun: {
    x: 0,
    y: 0,
    z: 0,
  },

  mercury: {
    x: 0.39 * multiplier,
    y: 2,
    z: 0,
  },
  venus: {
    x: 0.72 * multiplier,
    y: 0,
    z: 1.5,
  },
  earth: {
    x: 1 * multiplier,
    y: 0,
    z: 0,
  },
  mars: {
    x: 1.52 * multiplier,
    y: 0,
    z: 2,
  },
  jupiter: {
    x: 5.2 * multiplier,
    y: 0,
    z: 3,
  },
  saturn: {
    x: 9.58 * multiplier,
    y: 0,
    z: -1,
  },
  uranus: {
    x: 19.58 * multiplier,
    y: 5,
    z: -7,
  },
  neptune: {
    x: 30.07 * multiplier,
    y: 2,
    z: -9,
  },
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
  },
  sun: {
    size: SIZES.sun,
    coords: POSITIONS.sun,
    color: 0xffff33,
  },
  mars: {
    size: SIZES.mars,
    coords: POSITIONS.mars,
    color: 0xff6633,
  },
  mercury: {
    size: SIZES.mercury,
    coords: POSITIONS.mercury,
    color: 0x666699,
  },
  venus: {
    size: SIZES.venus,
    coords: POSITIONS.venus,
    color: 0xff99ff,
  },
  jupiter: {
    size: SIZES.jupiter,
    coords: POSITIONS.jupiter,
    color: 0x993333,
  },
  saturn: {
    size: SIZES.saturn,
    coords: POSITIONS.saturn,
    color: 0x996633,
  },
  uranus: {
    size: SIZES.uranus,
    coords: POSITIONS.uranus,
    color: 0x003399,
  },
  neptune: {
    size: SIZES.neptune,
    coords: POSITIONS.neptune,
    color: 0x339966,
  },
};

export { POSITIONS, SIZES, PLANETS };
