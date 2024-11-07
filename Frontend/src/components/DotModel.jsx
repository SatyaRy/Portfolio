import "../style/Dot.scss"
import {motion} from "framer-motion"
import { useState } from "react"
import { ImCross } from "react-icons/im";
import { FaMinus } from "react-icons/fa";
import { PiCaretUpDownFill } from "react-icons/pi";
export default function DotModel(){
    const [isHover, setIsHover] = useState(false)
    return(
            <div className ="mainDot">
              {childSymbol.map((value,index)=>(
                <motion.div 
                onMouseLeave={()=>{setIsHover(false)}}
                key={index}
                className="dot" style={{background:`${value.background}`}} onMouseMove={()=>{setIsHover(true)}}>
                   {isHover?  <div>
                      {value.icon}
                    </div> : null}
                </motion.div>
              ))}
            </div>
    )
}
const childSymbol = [
  {
    background: "#EE4E4E",
    icon: <ImCross fontSize={"10px"}/>
  },
  {
    background: "#FABC3F",
    icon: <FaMinus fontSize={"12px"}/>
  },
  {
    background: "#A1DD70",
    icon: <PiCaretUpDownFill fontSize={"12.5px"}/>
  },
]