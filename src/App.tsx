
import { createBrowserRouter, RouterProvider} from 'react-router-dom'

import {route} from "./router";
import {ToastContainer} from "react-toastify";
function App() {
    const router=createBrowserRouter(route())
  return (
    <>
        <RouterProvider router={router} />
        <ToastContainer position="top-right" />
    </>

  )
}

export default App
