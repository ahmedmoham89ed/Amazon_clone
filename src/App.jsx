import './App.css'
import Auth from "./layouts/auth"
import Main from "./layouts/main"
//router provider
import { RouterProvider } from 'react-router'

//mui theme 
import { ThemeProvider } from '@mui/material/styles'

//theme
import theme from './Theme'

//base style
import { CssBaseline } from '@mui/material'

import { routes } from './routes'
function App() {
    return (
    <>
      <ThemeProvider theme={theme}>
             <CssBaseline/>
             <RouterProvider router={routes} />
      </ThemeProvider>
    </>
    )
}

export default App
