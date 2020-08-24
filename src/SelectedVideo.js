import React from "react"
import {Typography} from "@material-ui/core"
import "./body.css"
const SelectedVideo = ({video}) => {
    if(!video)return<div>Loading</div>
    console.log(video.id.videoId)

    const VideoSrc =`https://www.youtube.com/embed/${video.id.videoId}`
    return(
      
           <div className="video">
                <iframe frameBorder="0" height="100%" width="80%" src={VideoSrc} title="video player" />
                <Typography variant="h4">{video.snippet.title}</Typography>
                      <Typography variant="subtitle1">{video.snippet.channelTitle}</Typography>
                      <Typography variant="subtitle1">{video.snippet.description}</Typography> 
           </div>
              
                   
    

                
              
           
       
        
           
     
    )
}


export default SelectedVideo