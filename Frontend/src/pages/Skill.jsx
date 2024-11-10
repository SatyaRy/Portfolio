import "../style/Skill.scss"
import { SkillDetail,framework } from "../data/Detail"
export default function Skill(){
    return(
            <div className ="mySkills">
                <span className="skillHead">Programming Languages & DataBase</span>
                <div className ="skillBox">
                    {SkillDetail.map((value)=>(
                        <div className ="skillIcon" key={value.id}>
                            <img src={value.icon} alt="" />
                            <span>{value.name}</span>
                        </div>
                    ))}
                </div>
                <span className="skillHead">Framework & Libraries</span>
                <div className ="skillBox">
                    {framework.map((value)=>(
                        <div className ="skillIcon" key={value.id}>
                            <img src={value.icon} alt="" />
                            <span>{value.name}</span>
                        </div>
                    ))}
                </div>
            </div>  
    )
}