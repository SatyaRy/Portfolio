import { FaFolderOpen } from "react-icons/fa6";
import "../style/Dot.scss"
export default function Folder(){
    return (
            <div className="folder">
                <FaFolderOpen color="#4CC9FE" fontSize={"1.2rem"}/> 
                <span>User--Satya@217</span>
            </div>
    )
}