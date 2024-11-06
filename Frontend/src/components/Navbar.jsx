import "../style/Header.scss"
import {motion} from "framer-motion"
import name from "../assets/name.svg"
export default function Navbar(){
    return(
            <div className ="header">
                <div className ="headLogo">
                  <img src={name} alt="" />
                </div>
                <div className ="headDetail">
                    {detail.map((value)=>(
                        <span><span className="headID" key ={value.id}>{value.id}</span>. {value.path}</span>
                    ))}
                    <motion.div className ="resume" 
                    whileHover ={{top:"200px",boxShadow: "3px 3px 0px #64ffda",scaleY:"1.03",
                                  transition:{duration:0.2}}}>
                    <span>Resume</span>
                    </motion.div>
                </div>
            </div>
    )
}
const detail =[
    {
        id: "01",
        path: "About"
    },
    {
        id: "02",
        path: "Projects"
    },
    {
        id: "03",
        path: "Education"
    },
    {
        id: "04",
        path: "Contact"
    },
]