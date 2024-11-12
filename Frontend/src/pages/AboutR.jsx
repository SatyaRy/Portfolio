import "../style/AboutR.scss"
import satya from "../assets/satyaR.svg"
import { icon} from "../data/Detail";
import { SERKSADETAIL,SERKSANAME,TOSDERNAME,TOSDERDETAIL,EXPENSE,EXPENSEDETAIL } from "../data/Contant";
import iphone from "../assets/technology/ui.png"
import iphone1 from "../assets/technology/ui1.png"
import {motion} from "framer-motion"
import  { ProjectDetail,ProjectFeature }  from "./Project";
import {useMediaQuery} from "react-responsive"
import Skill from "../pages/Skill"
export default function AboutReal(){
    const isDesktop = useMediaQuery({query:"(min-width: 1180px "})
    const isMobile = useMediaQuery({query:"(max-width: 768px "})
    const data = "I'm building up my knowledge and abilities to prepare for a future as an engineer."
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
                    <div
                        className ="projectContainer">            
                        <ProjectDetail name={SERKSANAME} detail={SERKSADETAIL}/>
                        <ProjectFeature/>
                    </div>
                    <div className ="projectContainer">  
                       {isMobile? 
                        <>
                            <ProjectDetail name={TOSDERNAME} detail={TOSDERDETAIL}/>
                            <ProjectFeature />
                        </>
                        :
                        <>
                            <ProjectFeature />
                            <ProjectDetail name={TOSDERNAME} detail={TOSDERDETAIL}/>
                        </>

                    }
                    </div>
                    <div className ="projectContainer">  
                        <ProjectDetail name={EXPENSE} detail={EXPENSEDETAIL}/>
                        <ProjectFeature />
                    </div>
                    <div className ="projectContainer">
                        <Skill/>
                    </div>
                </div>
            </div>
    )
}