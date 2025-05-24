
import './App.css';
import React, { Component } from 'react'
import { NavBar } from './Components/NavBar';
import News from './Components/News';
import NewsItem from './Components/NewsItem';


export default class App extends Component {

  constructor (){
    super();
    this.state={
      mode:"light"
    }
  }
 toggleDarkMode = () =>{
   if (this.state.mode === "light") {
      document.body.style.backgroundColor = "rgba(35,28,46,1)";
     this.setState({mode:"dark"})
    } else {
      document.body.style.backgroundColor = "white";
      this.setState({mode:"light"})
    }
}


  render() {
    return (
      <div>
       <NavBar toggleAppMode={this.toggleDarkMode}/>
       <News/>
      </div>
    )
  }
}
