import {createTheme} from '@mui/material/styles'

export const lightTheme = createTheme({
    palette:{
      mode: 'light' , 
      background:{
        default: '#F3FAFE'
      }
    }
})

export const darkTheme= createTheme({
    palette:{
        mode: 'dark',
        background:{
            default: '#151d32'
        }
    }
})
