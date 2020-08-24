import React from "react"
import VideoList from "./VideoList"
import "./body.css"

const Body=({videos})=>

{
    const list = videos.map((video,id)=><VideoList key={id} video={video}/>)
 return(
<div className="rec">
    <h2>Recommended</h2>
    <div className="rec-1">
    {list}
    </div>
    
</div>
 )

}
export default Body