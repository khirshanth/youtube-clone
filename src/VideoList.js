import React from "react"
import {Avatar} from "@material-ui/core"
import "./body.css"
import {Link } from "react-router-dom"
const VideoList=({video})=>{
    return(
     <div className="videocard">
       <Link to="/SelectedVideo"> 
       <img className="videocard-thumbnail"src={video.snippet.thumbnails.medium.url} alt="thumbnail"/>
       </Link> 
         <div className="videocard-info">
             <Avatar
             className="vc-avatar"
             alt=""
             src={video.snippet.thumbnails.default.url}/>
             <div className="video-text">
                  <h4>{video.snippet.title}</h4>
                  <p>{video.snippet.channelTitle}</p>
                   <p>{video.snippet.publishedAt}</p>
             </div>
         </div>
     </div>


    )
}
export default VideoList