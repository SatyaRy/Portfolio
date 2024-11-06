import "../style/Dot.scss"
export default function DotModel(){
    return(
            <div className ="mainDot">
              <div className ="dot" style={{background:"red"}}></div>
              <div className ="dot" style={{background:"yellow"}}></div>
              <div className ="dot" style={{background:"green"}}></div>
            </div>
    )
}
