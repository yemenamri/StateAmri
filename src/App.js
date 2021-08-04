import React from 'react';
import './App.css';
import IntervalExample from './IntervalExample';
import Profildetail from './profile/profildetail';
const version = "16"
const person = [
  {fullName:'Ahmed Amri'
,bio:'Electronic payment Director'
,profession:'Electronic payment Director'
,img:'/Ahmed.jpg'},


]
class App extends React.Component{


  constructor (props){

    super(props)
    this.state={
      show:true
    }
  }
    showhandler=()=>{
      this.setState({show:!this.state.show})
    }
  
  render(){

    return(
      <div>
<h1> React State Checkpoint</h1>
<button className = 'button' onClick={this.showhandler}><span>Hide and Seek</span></button>
{
  this.state.show? <h3>Hide <IntervalExample/></h3>: <h2>Seek <IntervalExample/> <Profildetail person = {person}/></h2>
}

      </div>
    )
  }
}
export default App