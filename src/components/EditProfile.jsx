import { Component } from 'react';
import { Link } from 'react-router-dom'
import { Form, Col } from 'react-bootstrap'
import '../css/EditProfile.css'

class EditProfile extends Component {

    render() {
        
        return (

            <Form>
                <Form.Group  className="d-flex" controlId="exampleForm.ControlInput1">
                    <Col>
                         <Form.Label className="text-muted">First Name *</Form.Label>
                         <Form.Control id='name' className="name" type="text"/>
                    </Col>
             
                    <Col>
                         <Form.Label className="text-muted">Last Name *</Form.Label>
                         <Form.Control id='surname' className="surname" type="text"/>
                    </Col>
                </Form.Group>

                <Col>
                    <Link className="">
                     Add former name
                    </Link>
                </Col>

                <Col>
                    <Form.Group className="mt-4" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="text-muted">Headline *</Form.Label>
                        <Form.Control as="textarea" rows={2} />
                    </Form.Group>
                </Col> 

                <Col>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label className="text-muted">Current Position</Form.Label>
                    <Form.Control as="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                    </Form.Group>
                </Col>

                <Col>
                    <Link className="">
                        Add new position
                    </Link>
                </Col>

                <Col className="mt-4">
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" className="text-muted" label="Show current company in my intro" />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label className="text-muted">Education</Form.Label>
                    <Form.Control as="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                    </Form.Group>
                </Col>

                <Col>
                    <Link className="">
                        Add new education
                    </Link>
                </Col>

                <Col className="mt-4">
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" className="text-muted" label="Show education in my intro" />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Label className="text-muted">Country/Region *</Form.Label>
                    <Form.Control id='' className="name" type="text"/>
                </Col>

                <Form.Group  className="d-flex mt-3" controlId="exampleForm.ControlInput1">
                    <Col md={4}>
                         <Form.Label className="text-muted">Postal code</Form.Label>
                         <Form.Control id='name' className="name" type="text"/>
                    </Col>
             
                    <Col md={8}>
                        <Form.Label className="text-muted">Locations within this area</Form.Label>
                        <Form.Control as="select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Col>
                </Form.Group>

                <Col>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label className="text-muted">Industry *</Form.Label>
                    <Form.Control as="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                    </Form.Group>
                </Col>
          </Form>
        );
    }
}

export default EditProfile