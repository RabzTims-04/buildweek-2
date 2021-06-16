import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Modal, Button, Form } from 'react-bootstrap';
import '../css/EditExp.css';

export class AddExp extends Component {
  state = {
    addExp: {
      role: '',
      company: '',
      startDate: '',
      endDate: '',
      description: '',
      area: '',
    },
  };

  SaveExp = (e) => {
    let id = e.currentTarget.id;
    let Exp = { ...this.state.addExp };
    Exp[id] = e.currentTarget.value;
    this.setState({ addExp: Exp });
  };

  addExp = async (e) => {
    e.preventDefault();
    const url ='https://striveschool-api.herokuapp.com/api/profile/60c72233291930001560aba1/experiences';
    const key ='Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3ZTc3MmMxOTMwNTAwMTU4NzE1M2EiLCJpYXQiOjE2MjM3MTM2NTEsImV4cCI6MTYyNDkyMzI1MX0.6kKT4vCvBTj46C3FNIBAvTapwoNnxe5mwGFwd6vQd1U';
    try {
        console.log(this.state.addExp)
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(this.state.addExp),
        headers: {
          Authorization: key,
          'Content-type': 'application/json',
        },
      });
      const addedExp = await response.json();
      if (response.ok) {
        console.log(addedExp);
        alert('Experience Added');
        this.setState({
          ...this.state.addExp,
        });
      } else {
        console.log('error');
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        
            <Form>
              <Form.Group className='mb-3'>
                <Form.Label>Role *</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Front-end developer'
                  onChange={(e) => this.SaveExp(e)}
                  id='role'
                />
              </Form.Group>

              {/* <Form.Group className='mb-4'>
                <Form.Label className='text-muted'>Type *</Form.Label>
                <Form className="w-100" style={{borderRadius:"5px"}} as='select'>
                  <option>Full-Time</option>
                  <option>Part-Time</option>
                  <option>Self-employed</option>
                  <option>Freelance</option>
                  <option>Contract</option>
                  <option>Internship</option>
                  <option>Contract</option>
        
                </Form>
                <Form.Text className='text-muted'>
                  Country-specific employment types
                </Form.Text>
              </Form.Group> */}

              <Form.Group className="mb-4">
                <Form.Label>Company *</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Ex: Microsoft'
                  id='company'
                  onChange={(e) => this.SaveExp(e)}
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Location *</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Ex: London, United Kingdom'
                  onChange={(e) => this.SaveExp(e)}
                  id='area'
                />
              </Form.Group>

              <Row className="mb-4">
                  <Col lg={6}>
              <Form.Group className='mb-3'>
                <Form.Label>Start date</Form.Label>
                <Form.Control
                  type='date'
                  id='startDate'
                  onChange={(e) => this.SaveExp(e)}
                />
              </Form.Group>
              </Col>
              <Col lg={6}>
              <Form.Group className='mb-3'>
                <Form.Label>End date</Form.Label>
                <Form.Control
                  type='date'
                  id='endDate'
                  onChange={(e) => this.SaveExp(e)}
                />
              </Form.Group>
              </Col>
              </Row>

              <Form.Group className="mb-4">
              <Form.Label>Description *</Form.Label>
                <Form.Control
                  as='textarea'
                  id='description'
                  onChange={(e) => this.SaveExp(e)}
                />
              </Form.Group>
              <Button
                onClick={(e) => {
                  this.addExp(e);
                }}
                variant='primary'
                type='submit'
              >
                Submit
              </Button>
            </Form>

      </div>
    );
  }
}

export default AddExp;
