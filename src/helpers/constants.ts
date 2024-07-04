// positions

const SUN_SIZE = 2; // 109
const EARTH_SIZE = 0.2; // 1
const MERCURY_SIZE = 0.08; // .38
//const MARS_SIZE = 0.13; // 0.53
const VENUS_SIZE = 0.18; // 0.95

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
  //   sun: {
  //     x: 0,
  //     y: 0,
  //     z: 0,
  //   },
};

const SIZES = {
  // TODO add formula depending on sun size
  earth: 0.2, // 1
  sun: SUN_SIZE, // 109,
  mercury: 0.08, // .38
  venus: 0.18, // 0.95
  mars: 0.13, // 0.53
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
};

export { POSITIONS, SIZES, PLANETS };
