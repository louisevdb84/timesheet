import React from "react";
import {  
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,  
  Row,
  Col,
  Form,
  FormGroup,
  Label,
Input,
UncontrolledDropdown,
DropdownToggle,
DropdownMenu,
  DropdownItem,
} from "reactstrap";

import { Button } from "../../../assets/components";

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,      
      modalClassic: false,      
    };
    this.onDismiss = this.onDismiss.bind(this);
    this.toggleModalClassic = this.toggleModalClassic.bind(this);    
  }
  onDismiss() {}
  toggleModalClassic() {
    this.setState({
      modalClassic: !this.state.modalClassic
    });
  }
  
  render() {
    return (
      <div>

        <div className="content">
         
                  <Row>
                    <Col md={12} className="text-center">                     
                      <Button color="primary" onClick={this.toggleModalClassic}>
                        Add Entry
                      </Button>
                      <Modal
                        isOpen={this.state.modalClassic}
                        toggle={this.toggleModalClassic}
                      >
                        <ModalHeader
                          className="justify-content-center"
                          toggle={this.toggleModalClassic}
                        >
                          Add Entry
                        </ModalHeader>
                        <ModalBody>
                                <Form className="form-horizontal">
                                <Row>
                                <Label md={3}></Label>        
                                <Col xs={5} md={5} sm={5} lg={5}>
                                  <UncontrolledDropdown>
                                    <DropdownToggle
                                      color="info"
                                      className="btn-round btn-block"
                                      caret
                                    >
                                      Select Category
                                    </DropdownToggle>
                                    <DropdownMenu>
                                      <DropdownItem header>Categories</DropdownItem>
                                      <DropdownItem disabled>Action</DropdownItem>
                                      <DropdownItem>Another Action</DropdownItem>
                                      <DropdownItem divider />
                                      <DropdownItem>Another Action</DropdownItem>
                                    </DropdownMenu>
                                  </UncontrolledDropdown>
                                </Col>    
                                    <Col xs={4} md={4} sm={4} lg={4}>
                                      <UncontrolledDropdown>
                                        <DropdownToggle
                                          color="info"
                                          className="btn-round btn-block"
                                          caret
                                        >
                                          Select Task
                                        </DropdownToggle>
                                        <DropdownMenu>
                                          <DropdownItem header>Tasks</DropdownItem>
                                          <DropdownItem disabled>Action</DropdownItem>
                                          <DropdownItem>Another Action</DropdownItem>
                                          <DropdownItem divider />
                                          <DropdownItem>Another Action</DropdownItem>
                                        </DropdownMenu>
                                      </UncontrolledDropdown>
                                    </Col>        
                                </Row>                
                            <Row>
                            <Label md={3}>Username</Label>
                            <Col xs={12} md={9}>
                                <FormGroup>
                                <Input type="text" />
                                </FormGroup>
                            </Col>
                            </Row>
                            <Row>
                            <Label md={3}>Email</Label>
                            <Col xs={12} md={9}>
                                <FormGroup>
                                <Input type="email" />
                                </FormGroup>
                            </Col>
                            </Row>
                            <Row>
                            <Label md={3}>Password</Label>
                            <Col xs={12} md={9}>
                                <FormGroup>
                                <Input type="password" />
                                </FormGroup>
                            </Col>
                            </Row>                            
                        </Form>
                        </ModalBody>
                        <ModalFooter>
                          <Button color="default">Submit</Button>
                          <Button
                            color="danger"
                            onClick={this.toggleModalClassic}
                          >
                            Close
                          </Button>
                        </ModalFooter>
                      </Modal>
                      
                    </Col>
                  </Row>
        </div>
      </div>
    );
  }
}

export default Notifications;
