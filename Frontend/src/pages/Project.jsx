import "../style/Project.scss"
import { IoMdLink } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import {delay, inView, motion} from "framer-motion"
export const ProjectFeature = ({firstUI,secondUI})=>{
    return (
            <div className ="projectUI">
                    <div className="borderProject">
                        <div className="projectShow">
                        <img src={firstUI} alt="" />
                        <img src={secondUI} alt="" />
                        </div>
                    </div>
            </div>
    )
}

export const ProjectDetail = ({name, detail}) =>{
    const animate = {
        hidden: {
            opacity: 0,
            x: -100,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
               delay: 0.1,
               duration: 1,
            }
        }
    }
    return(
            <div className ="projectDescription">
                <motion.span 
                viewport={{ once: true }}
                initial={{x:-100,opacity:0}} whileInView={{x:0,opacity:1,transition:{duration: 1}}}>{name}</motion.span>
                <motion.span initial={{y: 100}} whileInView = {{y: 0,opacity:1, transition:{duration:1 }}} viewport={{ once: true }}>
                   {detail}
                </motion.span>
                <button className="readMore">
                    <span className="readButton">Read Me</span>     
                    <FaArrowRightLong color="#8892b0" fontSize={"1.2rem"}/>
                </button>
            </div>
    )
}

