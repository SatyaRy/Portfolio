import "../style/Skill.scss"
import { SkillDetail,framework } from "../data/Detail"
import {easeIn, motion} from "framer-motion"
export default function Skill(){
    const animateParent  = {
        start:{
            transition: {
                staggerChildren: 0.2
            }
        },
        end:{
            transition:{
                staggerChildren: 0.25
            }
        }
    }
    const animateChild ={
        start: {
            y: 10
        },
        end: {
            y: -50
        }
    }
    const tran = {
        duration: 0.4,
        yoyo: Infinity,
        ease: "linear",
    }
    return(
            <div className ="mySkills">
                <span className="skillHead">My Skills</span>
                <motion.div className ="skillBox" variants={animateParent} initial="start" animate="end">
                    {SkillDetail.map((value)=>(
                        <motion.div
                         variants={animateChild} transition={tran}
                         className ="skillIcon" key={value.id}>
                                <img src={value.icon} alt="" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>  
    )
}