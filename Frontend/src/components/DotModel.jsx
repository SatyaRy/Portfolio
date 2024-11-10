import "../style/Dot.scss"
import {motion} from "framer-motion"
import { useState } from "react"
import { MacSymbol } from "../data/Detail"
export default function DotModel(){
    const [isHover, setIsHover] = useState(false)
    return(
            <div className ="mainDot">
              {MacSymbol.map((value,index)=>(
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