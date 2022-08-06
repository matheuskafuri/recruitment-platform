import { red } from '@mui/material/colors'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'

let lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: '#0072f0',
      main: '#0a7abf',
      dark: '#0c2240',
      contrastText: '#FFFFFF',
    },
    secondary: {
      light: '#FF958C',
      main: '#FA7268',
      dark: '#e05959',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#0c2240',
      secondary: '#182D3D',
    },
    info: {
      main: '#182D3D',
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: 'Montserrat'
  }
})
lightTheme = responsiveFontSizes(lightTheme)

let darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FF6559',
      light: '#FF958C',
      dark: '#FA7268',
      contrastText: '#FFFFFF',
    },
    secondary: {
      light: '#757ce8',
      main: '#5E5CE5',
      dark: '#6461FF',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#182D3D',
      paper: '#476382',
    },
    text: {
      primary: '#EBF1F7',
      secondary: '#FCFEFF',
    },
    info: {
      main: '#5E5CE5',
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: 'Montserrat'
  }
})

darkTheme = responsiveFontSizes(darkTheme)
export { lightTheme, darkTheme }
