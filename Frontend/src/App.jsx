import {RouterProvider, createBrowserRouter,Outlet} from "react-router-dom"
import "./style/Global.scss"
import Navbar from "./components/Navbar"
import Menu from "./components/Menu"
import Landing from "./components/Landing"
import Dot from "./components/DotModel"
import Folder from "./components/Folder"
import About from "./pages/About"
import Skill from "./pages/Skill"
import AboutReal from "./pages/AboutR"
function App() {
  const Layout =()=>{
    return(
            <div className ="container">
                <div className ="contentContainer">
                  <Menu/>
                   <div className="mainContent">
                      <div className ="bar">
                        <Dot/>
                        <Folder/>
                      </div>
                      <Outlet/>
                   </div>
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
          path: "/",
          element: <Landing/>
        },
        {
          path: "/About",
          element: <About/>
        },
        {
          path: "/Projects",
          element: <About/>
        },
        {
          path: "/skill",
          element: <AboutReal/>
        },
        {
          path: "/offTerminal",
          element: <AboutReal/>
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
