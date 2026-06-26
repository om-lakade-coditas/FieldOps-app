import { RouterProvider } from "react-router";

import { router } from "./routes/router";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
      <ToastContainer position='top-center'/>
    </>
  )
}

export default App;