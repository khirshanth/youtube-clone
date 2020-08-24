import React from 'react';
import "./h.css"
import MenuIcon from'@material-ui/icons/Menu'
import {Link,BrowserRouter as Router} from "react-router-dom"
import VideoCallIcon from'@material-ui/icons/VideoCall'
import AppsIcon from'@material-ui/icons/Apps'
import NotificationsIcon from'@material-ui/icons/Notifications'
import Avatar from'@material-ui/core/Avatar'
import {InputGroup,Input,InputGroupAddon,Button} from "reactstrap"

export default class Header extends React.Component{
     constructor(){
       super()
         this.state={
           search:""
          
         }
       
     }
    
   
   handleClick=(e)=>
     this.setState({
       search:e.target.value
     })
  
   
  render(){
    return (
      <div className="header">
        <div className="h-l">
        <MenuIcon className="h"/>
        <Router>
        <Link to="/"> 
               <img 
                className="logo"
                src="data:image/png;base64,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"
                 alt=""/>
        </Link>
        </Router>
         
        
        </div>
        <div style={{width:"40%"}}>
          <InputGroup size="lg">
             <Input 
             placeholder="search"
             value={this.search}
             onChange={this.handleClick}/>
             <InputGroupAddon addonType="append">
              
               <Button
               onClick={()=>this.props.data.changeItem(this.state.search)}
               >
                  <i className="fas fa-search"></i>
               </Button>
               
             
             </InputGroupAddon>
          </InputGroup>
     
        </div>
        <div className="h-r">
             <VideoCallIcon className="h"/>
             <AppsIcon className="h"/>
             <NotificationsIcon className="h"/>
             <Avatar className="h"src='https://lh3.googleusercontent.com/ogw/ADGmqu_QL3O5K_lPRQEZhz0lYAx0GrhDmMa64pOX_Flo=s32-c-mo'/>
        </div>
       
  
      </div>
    );
  }
}
   
  
  

   



