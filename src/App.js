import React from "react"
import Header from "./Header"
import Sidebar from "./Sidebar"
import Body from "./Body"
import Api from "./Api"
import {Switch,Route,BrowserRouter as Router} from  "react-router-dom"
import "./App.css"
import SelectedVideo from "./SelectedVideo"
class  App extends React.Component{
  state={
      videos:[],
      Selected:""
  }
        changeItem =async(item) =>{
            const response=await Api.get('search',{
                params:{
                    part:'snippet',
                    maxResults:16,
                    key:`AIzaSyCa4rwyVMQz6osTXMWoQSsx9L0H8fhFY08`,
                    q:item
                }
            })
            console.log(response)
            this.setState({videos:response.data.items,Selected:response.data.items[0]})
        }
            
            
           
        
    render(){
        const {videos,Selected}=this.state
        
     return(
        <div >
           
            <Header className="app" data={
                   { changeItem:this.changeItem.bind(this)}
                } />
               
         
        
            <div className="app-page">
                 <Sidebar/>
                 <Router>
                 
                     <Switch>
                     <Route path="/SelectedVideo">
                             <SelectedVideo video={Selected} />
                             </Route> 
                         <Route path="/" >
                             <Body videos={videos}/>
                         </Route>
                        
                     </Switch>
                 </Router>
                  
            </div>
           
        </div>
    )
}
}

export default App;