const COLOR = {
  off: {
    hue: 0,
    saturation: 0,
    lightness: 0
  },
  red: {
    hue: 0,
    saturation: 100,
    lightness: 50
  },
  yellow: {
    hue: 59,
    saturation: 100,
    lightness: 50
  },
  blueDeep: {
    hue: 221,
    saturation: 92,
    lightness: 60
  },
  aqua: { //hsl(158, 100%, 67%)
    hue: 158,
    saturation: 100,
    lightness: 67
  },
  lightPink: { //hsl(55, 50%, 69%)
    hue: 55,
    saturation: 50,
    lightness: 69
  },
  fuchsia: { //hsl(31, 32%, 50%)
    hue: 31,
    saturation: 32,
    lightness: 50
  },
  greenArmy: { // hsl(120°, 100%, 29%)
    hue: 120,
    saturation: 100,
    lightness: 29
  }
}

export const EMOTION = {
  happiness: COLOR.yellow,
  anger: COLOR.red,
  sadness: COLOR.blueDeep,
  surprise: COLOR.aqua,
  contempt: COLOR.lightPink,
  disgust: COLOR.fuchsia,
  fear: COLOR.greenArmy
}
