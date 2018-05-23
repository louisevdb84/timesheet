import React, { Component } from 'react';
import {Row, Col} from "reactstrap";

class WeekSummary extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col md={1}>Mon</Col>
          <Col md={1}>Tue</Col>
          <Col md={1}>Wed</Col>
          <Col md={1}>Thu</Col>
          <Col md={1}>Fri</Col>
          <Col md={1}>Sat</Col>
          <Col md={1}>Sun</Col>
          <Col md={2}>Total</Col>
        </Row>  
        <Row>
          <Col md={1}>20</Col>
          <Col md={1}>30</Col>
          <Col md={1}>40</Col>
          <Col md={1}>20</Col>
          <Col md={1}>20</Col>
          <Col md={1}>0</Col>
          <Col md={1}>0</Col>
          <Col md={2}>130</Col>
        </Row>  
      </div>
    );
  }
}

export default WeekSummary;