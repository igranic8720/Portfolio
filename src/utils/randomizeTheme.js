const palette = [
  'orangered',
  'deepskyblue',
  'mediumspringgreen',
  'gold',
  'mediumpurple',
  'Cyan',
  'lawngreen',
]

const pick = palette[Math.floor(Math.random() * palette.length)]
document.documentElement.style.setProperty('--accent', pick)
