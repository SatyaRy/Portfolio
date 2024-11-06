import {RouterProvider, createBrowserRouter,Outlet} from "react-router-dom"
import "./style/Global.scss"
import Navbar from "./components/Navbar"
import Menu from "./components/Menu"
import About from "./components/About"
import Dot from "./components/DotModel"
import Folder from "./components/Folder"
function App() {
  const Layout =()=>{
    return(
            <div className ="container">
                <Navbar/>
                <div className ="contentContainer">
                   <Menu/>
                   <div className="mainContent">
                      <div className ="bar">
                        <Dot/>
                        <Folder/>
                      </div>
                      <Outlet/>
                   </div>
                   <Menu/>
                </div>
            </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path: "/about",
          element: <About/>
        }
      ]
    }
  ])
  
  return (
    <RouterProvider router={router}>
      <Layout/>
    </RouterProvider>
  )
}

export default App
