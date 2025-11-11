
import React, {Component} from "react"

import { BodyContent} from './buttonMenuEndPfneles'
// import {userData} from './Data'




class MainContent extends Component {
  state = {
      count: 0
  };

  increment =() => {
    // @ts-ignore 
    this.setState((prevState)=>({count: prevState.count +1}), 
  () =>console.log ('State is completed plus')
  );
  } 
  decrement =() => {
    // @ts-ignore 
    this.setState((prevState)=>({count: prevState.count -1}), 
  () =>console.log ('State is completed minus')
  );
  } 
  reset =() => {
    // @ts-ignore 
    this.setState((prevState)=>({count: 0}), 
  () =>console.log ('State is completed reset')
  );
  } 


  render() {


    return (
      <div>
           < BodyContent />
       </div>
  
    )

  }
}

export default MainContent
