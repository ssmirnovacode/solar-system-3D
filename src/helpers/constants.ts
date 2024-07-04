// positions

const SUN_SIZE = 2; // 109
const EARTH_SIZE = 0.2; // 1
const MERCURY_SIZE = 0.08; // .38
const MARS_SIZE = 0.13; // 0.53
const VENUS_SIZE = 0.18; // 0.95
const JUPITER_SIZE = 1.2; // 11.21
const SATURN_SIZE = 0.9; // 9.45
const URANUS_SIZE = 0.8; // 4.01
const NEPTUNE_SIZE = 0.7; // 3.88

const POSITIONS = {
  earth: {
    x: SUN_SIZE + (MERCURY_SIZE + VENUS_SIZE) * 2 + 1,
    y: 0,
    z: 0,
  },
  sun: {
    x: 0,
    y: 0,
    z: 0,
  },
  mercury: {
    x: SUN_SIZE + 0.39, //0.39
    y: 0,
    z: 0,
  },
  venus: {
    x: SUN_SIZE + MERCURY_SIZE * 2 + 0.72,
    y: 0,
    z: 0,
  },
  mars: {
    x: SUN_SIZE + (MERCURY_SIZE + VENUS_SIZE + EARTH_SIZE) * 2 + 1.52,
    y: 0,
    z: 0,
  },
  jupiter: {
    x:
      SUN_SIZE + (MERCURY_SIZE + VENUS_SIZE + EARTH_SIZE + MARS_SIZE) * 2 + 5.2,
    y: 0,
    z: 0,
  },
  saturn: {
    x:
      SUN_SIZE +
      (MERCURY_SIZE + VENUS_SIZE + EARTH_SIZE + MARS_SIZE + JUPITER_SIZE) * 2 +
      9.58,
    y: 0,
    z: 0,
  },
  uranus: {
    x:
      SUN_SIZE +
      (MERCURY_SIZE +
        VENUS_SIZE +
        EARTH_SIZE +
        MARS_SIZE +
        JUPITER_SIZE +
        SATURN_SIZE) *
        2 +
      19.58,
    y: 0,
    z: 0,
  },
  neptune: {
    x:
      SUN_SIZE +
      (MERCURY_SIZE +
        VENUS_SIZE +
        EARTH_SIZE +
        MARS_SIZE +
        JUPITER_SIZE +
        URANUS_SIZE) *
        2 +
      30.07,
    y: 0,
    z: 0,
  },
  //   sun: {
  //     x: 0,
  //     y: 0,
  //     z: 0,
  //   },
};

const SIZES = {
  // TODO add formula depending on sun size
  earth: EARTH_SIZE, // 1
  sun: SUN_SIZE, // 109,
  mercury: MERCURY_SIZE, // .38
  venus: VENUS_SIZE, // 0.95
  mars: MARS_SIZE, // 0.53
  jupiter: JUPITER_SIZE,
  saturn: SATURN_SIZE,
  uranus: URANUS_SIZE,
  neptune: NEPTUNE_SIZE,
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
