const COLOUR = {
  off: {
    hue: 0,
    saturation: 0,
    brightness: 0
  },
  red: {
    hue: 0,
    saturation: 100,
    brightness: 100,
    type: "red"
  },
  yellow: {
    hue: 59,
    saturation: 100,
    brightness: 100,
    type: "yellow"
  },
  blueDeep: {
    hue: 221,
    saturation: 92,
    brightness: 100,
    type: "blue"
  },
  aqua: {
    hue: 158,
    saturation: 100,
    brightness: 100,
    type: "cyan"
  },
  lightPink: {
    hue: 55,
    saturation: 50,
    brightness: 100,
    type: "pink"
  },
  fuchsia: {
    hue: 31,
    saturation: 32,
    brightness: 100,
    type: "purple"
  },
  greenArmy: {
    hue: 120,
    saturation: 100,
    brightness: 100,
    type: "green"
  }
}

export const EMOTION = {
  happiness: COLOUR.yellow,
  anger: COLOUR.red,
  sadness: COLOUR.blueDeep,
  surprise: COLOUR.aqua,
  contempt: COLOUR.lightPink,
  disgust: COLOUR.fuchsia,
  fear: COLOUR.greenArmy
}
