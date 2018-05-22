import React, { Component } from 'react';
import './Time.css';
import Heading from '../Components/Heading';
import Navigation from '../Components/Navigation';
import TaskList from '../Components/TaskList';
import Timer from '../Components/Timer';
import WeekSummary from '../Components/WeekSummary';

class App extends Component {
  render() {
    return (
      <div>        
        <Heading />
        <WeekSummary/>
        <Navigation />        
        <TaskList />
        <Timer />        
      </div>
    );
  }
}

export default App;
