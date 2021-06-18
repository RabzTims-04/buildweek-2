import { Component } from 'react';
import { Card, Form, Col, Row } from 'react-bootstrap';
import { AiOutlineStar } from 'react-icons/ai';
import { AiOutlineCheck } from 'react-icons/ai';
import '../css/ProfileStrength.css';

class ProfileStrength extends Component {
  render() {
    return (
      <Card className='rounded'>
        <Card.Body>
          <Form>
            <Form.Group controlId='formBasicRange'>
              <Form.Label>
                <h5>
                  <span className='text-muted'>Profile Strength:</span>{' '}
                  Intermediate
                </h5>
              </Form.Label>
              <Row className='px-4 pb-5' type='range'>
                <Col className='customRange'></Col>
                <Col className='customRange'></Col>
                <Col className='customRange'></Col>
                <Col className='customRange'></Col>
                <Col className='customRange'></Col>
                <Col className='customRange'>
                  <AiOutlineCheck className='tick' size={20} />
                </Col>
                <Col className='customRangeLast'>
                  <AiOutlineStar className='star' size={20} />
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

export default ProfileStrength;
