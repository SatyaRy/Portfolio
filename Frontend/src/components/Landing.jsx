import "../style/Landing.scss"
import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls,Float } from "@react-three/drei"
import { AmbientLight } from "three"
import { Suspense } from "react"
import {motion} from "framer-motion"
import Cyber from "../../public/panel/Panel"
import pdf from "../assets/satyapdf.pdf"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
export default function Content(){
    const detail = "  I'm a Full Stack Developer passionate about building scalable, user-focused web applications. Skilled in both front-end and back-end development, I enjoy crafting seamless digital experiences and collaborating to solve complex challenges."
    const navigate = useNavigate()
    const handleClick =()=>{
        navigate("/about")
    }
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
                        <motion.a whileHover={{scaleY:"1.05",boxShadow: "3px 3px 0px #64ffda"}} whileTap={{boxShadow: "0px 0px 0px #64ffda"}} download="" href={pdf}>Resume</motion.a>
                        <motion.button whileHover={{scaleY:"1.05",boxShadow: "3px 3px 0px #64ffda"}} whileTap={{boxShadow: "0px 0px 0px #64ffda"}} onClick={handleClick}>Next</motion.button>
                    </div>
                </div>
                <div className ="react3d">
                    <div className ="reactModel">
                       <Suspense fallback={null}>
                        <Canvas>
                                <ambientLight/>
                                <OrbitControls enableZoom={false} enableRotate={true}/>
                                <Cyber/>
                                <Environment preset="sunset"/>
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
