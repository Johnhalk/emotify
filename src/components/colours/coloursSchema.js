const COLOUR = {
  off: {
    hue: 0,
    saturation: 0,
    brightness: 0
  },
  red: {
    hue: 0,
    saturation: 100,
    brightness: 50,
    type: "red"
  },
  yellow: {
    hue: 59,
    saturation: 100,
    brightness: 50,
    type: "yellow"
  },
  blueDeep: {
    hue: 221,
    saturation: 92,
    brightness: 60,
    type: "blue"
  },
  aqua: { //hsl(158, 100%, 67%)
    hue: 158,
    saturation: 100,
    brightness: 67,
    type: "cyan"
  },
  lightPink: { //hsl(55, 50%, 69%)
    hue: 55,
    saturation: 50,
    brightness: 69,
    type: "pink"
  },
  fuchsia: { //hsl(31, 32%, 50%)
    hue: 31,
    saturation: 32,
    brightness: 50,
    type: "purple"
  },
  greenArmy: { // hsl(120°, 100%, 29%)
    hue: 120,
    saturation: 100,
    brightness: 29,
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
