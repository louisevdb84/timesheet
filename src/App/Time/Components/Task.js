import React, { Component } from 'react';
import {Row, Col} from "reactstrap";

import { Button } from "../../../assets/components";

class Task extends Component {  
  render() {    
    const { name} = this.props.task;
    const {categoryName, userName } = this.props;    
    return (
      <Row>        
        <Col md={3}>{userName}</Col>                
        <Col md={3}>{categoryName}</Col>                
        <Col md={3}>{name}</Col>                

        <Col md={3} className="text-right">
          <Button icon color="info" size="sm">
            <i className="now-ui-icons users_single-02" />
          </Button>{" "}
          <Button icon color="success" size="sm">
            <i className="now-ui-icons ui-2_settings-90" />
          </Button>{" "}
          <Button icon color="danger" size="sm">
            <i className="now-ui-icons ui-1_simple-remove" />
          </Button>
        </Col>
      </Row>
    );
  }
}

export default Task;