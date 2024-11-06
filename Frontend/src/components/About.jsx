import "../style/About.scss"
import  React  from "../../public/React"
import Python from "../../public/python/Python"
import { Canvas } from "@react-three/fiber"
import Robot from "../../public/robotModel/Robot"
import { Environment, OrbitControls } from "@react-three/drei"
import { AmbientLight } from "three"
import { Suspense } from "react"
import {motion} from "framer-motion"
export default function Content(){
    const detail = "  I'm a Full Stack Developer passionate about building scalable, user-focused web applications. Skilled in both front-end and back-end development, I enjoy crafting seamless digital experiences and collaborating to solve complex challenges."
    return(
           <>
            <div className="aboutMe">
                <div className ="aboutMeDetail">
                    <span>Hi, my name is</span>
                    <div className="intro">
                        <span>Ry Satya</span>
                        <span>I'm a Software Engineer</span>
                    </div>
                    <div className ="aboutDescription">
                        {detail}
                    </div>
                    <div className ="paginate" whileHover={{boxShadow: "10px 5px 0px #64ffda"}} >
                        <motion.button whileHover={{scaleY:"1.05",boxShadow: "3px 3px 0px #64ffda"}} whileTap={{boxShadow: "0px 0px 0px #64ffda"}}>Previous</motion.button>
                        <motion.button whileHover={{scaleY:"1.05",boxShadow: "3px 3px 0px #64ffda"}} whileTap={{boxShadow: "0px 0px 0px #64ffda"}}>Next</motion.button>
                    </div>
                </div>
                <div className ="react3d">
                    <div className ="reactModel">
                       <Suspense fallback={null}>
                        <Canvas>
                                <ambientLight/>
                                <OrbitControls enableZoom={false} enableRotate={true}/>
                                <Robot/>
                                <Environment preset="forest"/>
                            </Canvas>
                       </Suspense>
                     </div>
                    <div>

                    </div>
                </div>
            </div>
           </>
    )
}

const Model = [
    {
        id: 1,
        model: <React/>
    },
    {
        id: 2,
        model: <Python/>
    }
]