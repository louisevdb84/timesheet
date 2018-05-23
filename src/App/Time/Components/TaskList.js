import React, { Component } from 'react';
import { tasks } from '../../../database/tasks'
import { users} from '../../../database/users'
import findById from '../../../database/helper/findById'
import Task from './Task';
import {Card, CardBody, Col, Row} from "reactstrap";

class TaskList extends Component {
  render() {    
    return (
      <div>
        <div className="content">                  
            <Card>              
                 <CardBody>                
                    {
                        tasks.map(task => {                        
                        return <Task
                          task={task}                          
                          userName={findById(users, task.userId).name}/>
                      })
                    }    
                    
                  <Row>
                    <Col md={6}></Col>
                    <Col md={2}>Total</Col>
                    <Col md={3}>40</Col>
                  </Row>                    
                    </CardBody>
                  </Card>        
            </div>                
      </div>
    );
  }
}

export default TaskList;