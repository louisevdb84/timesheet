import React, { Component } from 'react';

class Heading extends Component {
  render() {
    var dateNow = new Date();    
    dateNow = dateNow.toString();
    return (
      <div>
        <h1>Timesheet</h1>
        <h3>{dateNow}</h3>
      </div>
    );
  }
}

export default Heading;