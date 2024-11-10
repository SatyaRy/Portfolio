import "../style/AboutR.scss"
import satya from "../assets/satyaR.svg"
import { icon} from "../data/Detail";
import iphone from "../assets/technology/ui.png"
import iphone1 from "../assets/technology/ui1.png"
import {motion} from "framer-motion"
import  { ProjectDetail,ProjectFeature }  from "./Project";
import Skill from "../pages/Skill"
export default function AboutReal(){
    const data = "I'm building up my knowledge and abilities to prepare for a future as an engineer."
    const serksa = "SerkSa App"
    const serksaDetail = "SerkSa is a gamified app that transforms self-learning for high school students with structured lessons, foundational skill-building, and interactive games that keep them motivated."
    return (
            <div className ="realContainer">
                <div className ="realAbout">
                    <div className ="realProfile">
                        <img src={satya} alt="" />
                    </div>
                    <div className ="realFollower">
                        <motion.button whileHover={{scaleY:"1.05",boxShadow: "2px 2px 0px #64ffda"}} whileTap={{boxShadow: "0px 0px 0px #64ffda"}}>Follow</motion.button>
                        <motion.button whileHover={{scaleY:"1.05",boxShadow: "2px 2px 0px #64ffda"}} whileTap={{boxShadow: "0px 0px 0px #64ffda"}}>Contact</motion.button>
                    </div>
                    <div className ="realDescription">
                        <div className ="shortInfo">
                            <span>{data}</span>
                        </div>
                        {icon.map((value)=>
                            <div className ="realDetail" key={value.id}>
                                <span>{value.icon}</span>
                                <span>{value.detail}</span>
                            </div>
                        )}
                    </div>
                </div>
                <div className ="projectOverview">
                    <div className ="projectContainer">            
                        <ProjectDetail name={serksa} detail={serksaDetail}/>
                        <ProjectFeature firstUI={iphone} secondUI={iphone1}/>
                    </div>
                    <div className ="projectContainer">  
                        <ProjectFeature firstUI={iphone} secondUI={iphone1}/>
                        <ProjectDetail name={serksa} detail={serksaDetail}/>
                    </div>
                    <div className ="projectContainer">  
                        <ProjectDetail name={serksa} detail={serksaDetail}/>
                        <ProjectFeature firstUI={iphone} secondUI={iphone1}/>
                    </div>
                    <div className ="projectContainer">
                        <Skill/>
                    </div>
                </div>
            </div>
    )
}