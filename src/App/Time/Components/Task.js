import React, { Component } from 'react';
import {Row, Col} from "reactstrap";

import { Button } from "../../../assets/components";

class Task extends Component {  
  render() {    
    const { name} = this.props.task;
    const {userName } = this.props;    
    return (
      <Row>        
        <Col md={2}>{userName}</Col>                        
        <Col md={6}>{name}</Col>                
        <Col md={1}>2.5</Col>                

        <Col md={3} className="text-right">            
          <Button icon color="info" size="md">            
            Start
          </Button>{" "}
          <Button icon color="danger" size="md">
            Stop
          </Button>{" "}
          <Button icon color="success" size="md">            
            Edit
          </Button>{" "}          
        </Col>
      </Row>
    );
  }
}

export default Task;