import {useMotionValue,useTransform, animate,motion} from "framer-motion"
import { useEffect,useState} from "react";
import "../style/About.scss"
import bear from "../assets/bear.svg"
import { description } from "../data/Detail";
import { useNavigate } from "react-router-dom";
export default function About(){
    const navigate = useNavigate()
    const [isAnimated, setIsAnimated] = useState(false)
    const [code, setCode] = useState("")
    const [isGenerated, setIsGenerated] = useState(false)
    const [isOn, setIsOn] = useState(false)
    const detail ="[user@Users-MacBook-Pro/Satyary@217 ~ % brew install SatyaDetail"
    const profile = "[user@Users-MacBook-Pro/Satyary@217 ~ % "
    const count = useMotionValue(0)
    const displayText = useTransform(count, (lastest) =>
        detail.slice(0, Math.round(lastest))
      );
    useEffect(() => {
        const controls = animate(count, detail.length, {
          type: "tween",
          duration: 1,
          ease: "easeInOut",
          onComplete: ()=>{
            setIsAnimated(true)
          }
        });
        return controls.stop;
      }, []);
    const generateProfile = (value) =>{
        if(value === "@SatyaProfile"){
            setIsGenerated(true)
            console.log(isGenerated)
        }
        if(value === "cd projects"){
           navigate("/projects")
        }
    }
    return(
            <div className ="terminalContainer">
                <div className ="smallTerminal">
                    <motion.span className="text">{displayText}</motion.span><br/>
                    {isAnimated? 
                       <>
                            <div className ="introduction">
                            {description.map((value)=>(
                                <span key={value.id}>{value.detail}</span>
                            ))}
                            </div>
                            <div className="inputProfile">
                               <span>{profile} </span>
                               <input type="text" value= {code} onChange={(e)=>{
                                setCode(e.target.value)
                               }} onKeyDown={(e)=>{
                                if(e.key ==="Enter"){
                                    generateProfile(code)
                                    console.log(code)
                                }
                               }}/>
                            </div>
                            {isGenerated? <span>Generating...  ⠀⠀⠀⠀⢀⣤⣤⣴⣶⣶⣦⣤⣤⣀⠀⠀</span>:null}
                           
                       </>
                    :null}     
                  {isAnimated?  
                    <div className="offTerminal" >
                        <motion.button whileHover={{scaleY:"1.05",boxShadow: "3px 3px 0px #64ffda"}} whileTap={{boxShadow: "0px 0px 0px #64ffda"}} onClick={()=>{navigate("/offTerminal")}}>Turn off Terminal Version</motion.button>
                    </div>: null}
                </div>
                <div className="imageAS">
                    <img src={bear} alt="" />
                </div>
            </div>
    )
}
