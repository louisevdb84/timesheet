import React, { Component } from 'react';
import './Time.css';
import Heading from '../Components/Heading';
import Navigation from '../Components/Navigation';
import TaskList from '../Components/TaskList';
import Timer from '../Components/Timer';
import WeekSummary from '../Components/WeekSummary';
import Login from '../../Shared/Login';
import Register from '../../Shared/Register';
//import PagesHeader from '../../Shared/PagesHeader';

class App extends Component {
  render() {
    return (
      <div>       
  
        <Heading />
        <Navigation />
        <WeekSummary/>                
        <TaskList />
        <Timer />    
        <Login />
        <Register/>
      </div>
    );
  }
}

export default App;
