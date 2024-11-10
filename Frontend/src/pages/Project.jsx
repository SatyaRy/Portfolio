import "../style/Project.scss"
import { IoMdLink } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import iphone from "../assets/technology/ui.png"
import iphone1 from "../assets/technology/ui1.png"
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
    return(
            <div className ="projectDescription">
                <span>{name}</span>
                <span>
                   {detail}
                </span>
                <button className="readMore">
                    <span style={{color:"#8892b0",fontSize:"1.2rem"}}>Read Me</span>     
                    <FaArrowRightLong color="#8892b0" fontSize={"1.2rem"}/>
                </button>
            </div>
    )
}