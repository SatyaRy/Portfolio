import {useMotionValue,useTransform, animate,motion} from "framer-motion"
import { useEffect,useState} from "react";
import "../style/About.scss"
import bear from "../assets/bear.svg"
import satyaRy from "../assets/satyaR.png"
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
                        <motion.button whileHover={{scaleY:"1.05",boxShadow: "3px 3px 0px #64ffda"}} whileTap={{boxShadow: "0px 0px 0px #64ffda"}} >Turn off Terminal Version</motion.button>
                    </div>: null}
                </div>
                <div className="imageAS">
                    <img src={bear} alt="" />
                </div>
            </div>
    )
}


const description = [
    {
        id: 1,
        detail: "# User Profile: Ry Satya",
    },
    {
        id: 2,
        detail: "> Name: Ry Satya",
    },
    {
        id: 3,
        detail: "> Major: Software Engineer  ",
    },
    {
        id: 4,
        detail: "> Age: 19 (Born: Oct 31, 2005)  ",
    },
    {
        id: 5,
        detail: "> Address: Boeung Chhuk village,  Niroth commune, Cbar ompov  district, Phnom Penh",
    },
    {
        id: 6,
        detail: "## 📌 Objective:",
    },
    {
        id: 7,
        detail: "I want to develop impactful software solutions that bridge gaps in education and technology, while continuously honing technical expertise and contributing to meaningful project",
    },
    {
        id: 8,
        detail: "-----------------------------------",
    },
    {
        id: 9,
        detail: "## 👾 Technical Skills:",
    },
    {
        id: 10,
        detail: "> Languages: JavaScript, TypeScript, Python  ",
    },
    {
        id: 11,
        detail: "> Frontend: React, Zustand, ",
    },
    {
        id: 12,
        detail: "> Backend: Python, Node.js, Firebase",
    },
    {
        id: 13,
        detail: "> Framework & Libraries: Framer motion, FastAPI",
    },
    {
        id: 14,
        detail: "> Databases: Firestore, MongoDB  PostgreSQL",
    },
    {
        id: 15,
        detail: "> Version Control: Git, GitHub  ",
    },
    {
        id: 16,
        detail: "> Other Tools: Vite, Figma, Postman",
    },
    {
        id: 17,
        detail: "-----------------------------------",
    },
    {
        id: 18,
        detail:"[user@Users-MacBook-Pro/Satyary@217 ~ % Type cd projects to check projects",
    },
]