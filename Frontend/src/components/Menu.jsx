import "../style/Menu.scss"
import { MenuIcon } from "../data/Detail"
import {Link, useNavigate} from "react-router-dom"
import {motion} from "framer-motion"
export default function Menu(){
    const navigate = useNavigate()
    const handleClick = (link)=>{
        navigate(`${link}`)
    }
    return(
            <div className ="mainMenu">
               <div className ="contactLink">
                    {MenuIcon.map((value)=>(
                        <motion.div 
                        whileTap={{boxShadow:"0px 0px 0px grey"}}
                        whileHover={{boxShadow:"3px 3px 0px grey"}}
                        key={value.id} className ="icon" onClick={()=>{handleClick(value.link)}}>
                             {value.image}
                        </motion.div>
                    )
                    )}
               </div>
            </div>
    )
}