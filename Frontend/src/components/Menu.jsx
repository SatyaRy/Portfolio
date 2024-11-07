import "../style/Menu.scss"
import { VscVscodeInsiders } from "react-icons/vsc";
import { IoTerminal } from "react-icons/io5";
import { FaGithubSquare } from "react-icons/fa";
import {Link, useNavigate} from "react-router-dom"
import { FaHome } from "react-icons/fa";
import {motion} from "framer-motion"
export default function Menu(){
    const navigate = useNavigate()
    const handleClick = (link)=>{
        navigate(`${link}`)
    }
    return(
            <div className ="mainMenu">
               <div className ="contactLink">
                    {contactLink.map((value)=>(
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
const contactLink =[
    {
        id: 1,
        link: "/",
        image: <FaHome fontSize={"3.5rem"} color="#181C14"/>,
    },
    {
        id: 2,
        link: "/about",
        image: <IoTerminal fontSize={"3.5rem"} color="black"/>,
    },
    {
        id: 3,
        link: "/skill",
        image: <VscVscodeInsiders fontSize={"3.5rem"} color ="#0078d7"/>,
    },
    {
        id: 4,
        link: "/projects",
        image: <FaGithubSquare fontSize={"3.5rem"} color ="#6e5494"/>,
    },
]