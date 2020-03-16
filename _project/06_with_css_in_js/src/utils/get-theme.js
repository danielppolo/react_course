import colors from './colors'

const getTheme = (color = colors.primary) => ({
  ...colors,
  primary: color,
})

export default getTheme
