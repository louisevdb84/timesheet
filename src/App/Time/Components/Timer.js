import React, { Component } from 'react';
import Clock from 'react-flip-clock';


class Timer extends Component {
  componentWillMount(){
    var list = document.getElementsByClassName("title");
    list.innerHTML = "milk"
console.log(list)    
//list.getElementsByClassName("child")[0].innerHTML = "Milk";
  }
  render() {
    return (
      <div>
        <Clock></Clock>
        
      </div>
    );
  }
}

export default Timer;