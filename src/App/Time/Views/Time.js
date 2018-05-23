import React, { Component } from 'react';
import '../../../assets/css/style.css';
import Heading from '../Components/Heading';
import Navigation from '../Components/Navigation';
import TaskList from '../Components/TaskList';
import Timer from '../Components/Timer';
import WeekSummary from '../Components/WeekSummary';
import AddEntry from '../Components/AddEntry';
import Login from '../../Shared/Login';
import Register from '../../Shared/Register';
import { Container } from "reactstrap";
//import PagesHeader from '../../Shared/PagesHeader';

class App extends Component {
  render() {
    return (
      <div className="time-body">       
        <Container>
            <Heading />        
            <Navigation />
            <WeekSummary/>                
            <TaskList />
            <AddEntry/>
            <Timer />  
        </Container>  
        <Login />
        <Register/>
      </div>
    );
  }
}

export default App;
