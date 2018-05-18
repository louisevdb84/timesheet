import React, { Component } from 'react';
import './Time.css';
import Navbar from '../../Shared/Navbar';
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
        <Navbar />
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
