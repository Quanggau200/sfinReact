
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import {route} from "./router";
import {ToastContainer} from "react-toastify";
import {PageTitleProvider} from "./context/pageTitleContext";
function App() {
    const router=createBrowserRouter(route())
  return (
    <>
       <PageTitleProvider>
           <RouterProvider router={router} />
           <ToastContainer position="top-right" />
       </PageTitleProvider>
    </>

  )
}

export default App
