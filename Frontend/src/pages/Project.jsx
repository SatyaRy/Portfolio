import "../style/Project.scss"
import { IoMdLink } from "react-icons/io";
export default function Project(){
    const data = "The Resort Finder App is a user-friendly platform designed to help travelers discover the perfect resort for their next vacation"
    return(
            <div className ="projectShow">
                <div className ="projectMenu">
                    <span>My Personal Project</span>
                </div>
                <div className ="projectBox">
                    <div className ="projectName">
                        <IoMdLink color="#8892b0" fontSize={"1.5rem"}/>
                        <span>Resort Finder</span>
                    </div>
                    <div className ="projectDescription">
                        <span>{data}</span>
                    </div>
                    <div className ="projectTech">

                    </div>
                </div>
            </div>
    )
}