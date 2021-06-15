
import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import '../css/EditExp.css';
export class EditExp extends Component {
  state = {
    editExp: {
      role: 'CTO',
      company: 'Strive School',
      startDate: '2019-06-16',
      endDate: '2019-06-16',
      description: 'Doing stuff here and there',
      area: 'Berlin',
    },
  };

  StoreChange = (e) => {
    let id = e.currentTarget.id;
    let Exp = { ...this.state.editExp };
    Exp[id] = e.currentTarget.value;
    this.setState({ editExp: Exp });
  };

  editExp = async (e) => {
    e.preventDefault();
    const url =
      'https://striveschool-api.herokuapp.com/api/profile/60c72233291930001560aba1/experiences/60c87cf5c193050015871545';
    const key =
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MjIzMzI5MTkzMDAwMTU2MGFiYTEiLCJpYXQiOjE2MjM2NjMxNTYsImV4cCI6MTYyNDg3Mjc1Nn0.pHCHEeBWoL8ouo2bml9H3Ju13WPbylVyEqIpyeFhx1o';
    try {
      const response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(this.state.editExp),
        headers: {
          Authorization: key,
          'Content-type': 'application/json',
        },
      });
      const editedExp = await response.json();
      if (response.ok) {
        console.log(editedExp);
        this.props.editExp(editedExp);
        alert('edit done');
        this.setState({
          ...this.state.editExp,
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
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Edit experience</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group className='mb-3'>
                <Form.Label>Role *</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter role'
                  value={this.state.editExp.role}
                  onChange={(e) => this.StoreChange(e)}
                  id='role'
                />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label className='text-muted'>Type *</Form.Label>
                <Form as='select'>
                  <option>Intership</option>
                  <option>Contract</option>
                  <option>Full Time</option>
                  <option>Part Time</option>
                </Form>
                <Form.Text className='text-muted'>
                  Country-specific employment types
                </Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Label>Company *</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter company name'
                  id='company'
                  value={this.state.editExp.company}
                  onChange={(e) => this.StoreChange(e)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>area *</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter area'
                  value={this.state.editExp.area}
                  onChange={(e) => this.StoreChange(e)}
                  id='area'
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Start date</Form.Label>
                <Form.Control
                  type='date'
                  id='startDate'
                  value={this.state.editExp.startDate}
                  onChange={(e) => this.StoreChange(e)}
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>End date</Form.Label>
                <Form.Control
                  type='date'
                  id='endDate'
                  value={this.state.editExp.endDate}
                  onChange={(e) => this.StoreChange(e)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  as='textarea'
                  placeholder='Leave description here'
                  id='description'
                  value={this.state.editExp.description}
                  onChange={(e) => this.StoreChange(e)}
                />
              </Form.Group>
              <Button
                onSubmit={(e) => {
                  this.editExp(e);
                }}
                variant='primary'
                type='submit'
              >
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal.Dialog>
      </div>
    );
  }
}

export default EditExp;
