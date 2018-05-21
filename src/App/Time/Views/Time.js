import React, { Component } from 'react';
import './Time.css';
import Heading from '../Components/Heading';
import Navigation from '../Components/Navigation';
import Task from '../Components/Task';
import TaskList from '../Components/TaskList';
import Timer from '../Components/Timer';
import WeekSummary from '../Components/WeekSummary';

class App extends Component {
  render() {
    return (
      <div>        
        <Heading />
        <Navigation />
        <Task />
        <TaskList />
        <Timer />
        <WeekSummary/>
      </div>
    );
  }
}

export default App;
