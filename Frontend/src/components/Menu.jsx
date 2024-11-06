import "../style/Menu.scss"
import { LuGithub } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";
import { TbBrandTelegram } from "react-icons/tb";
import { RiFacebookBoxLine } from "react-icons/ri";
export default function Menu(){
    return(
            <div className ="mainMenu">
               <div className ="contactLink">
                    {contactLink.map((value)=>(
                        <div key={value.id} className ="icon">{value.image}</div>
                    )
                    )}
               </div>
            </div>
    )
}
const contactLink =[
    {
        id: 1,
        image: <LuGithub fontSize={"2rem"}/>,
    },
    {
        id: 2,
        image: <CiLinkedin fontSize={"2rem"}/>,
    },
    {
        id: 3,
        image: <TbBrandTelegram fontSize={"2rem"}/>,
    },
    {
        id: 4,
        image: <RiFacebookBoxLine fontSize={"2rem"}/>,
    }
]