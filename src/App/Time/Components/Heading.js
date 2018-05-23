import React, { Component } from 'react';

class Heading extends Component {
  render() {
    var dateNow = new Date();    
    dateNow = dateNow.toString();
    return (
      <div>        
        <h5>{dateNow}</h5>
      </div>
    );
  }
}

export default Heading;