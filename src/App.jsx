import './App.css'
import Auth from "./layouts/auth"
import Main from "./layouts/main"

import { RouterProvider } from 'react-router'
import { routes } from './routes'
function App() {
    return (
    <>
      <RouterProvider router={routes} />
    </>
    )
}

export default App
