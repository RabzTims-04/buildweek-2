import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import '../css/EditExp.css';
export class EditExp extends Component {
  state = {
    show:false,
    editExp: {
      role: this.props.data.role,
      company: this.props.data.company,
      startDate: this.props.data.startDate,
      endDate: this.props.data.endDate,
      description: this.props.data.description,
      area: this.props.data.area
    }
  };

  StoreChange = (e) => {
    let id = e.currentTarget.id;
    let Exp = { ...this.state.editExp };
    Exp[id] = e.currentTarget.value;
    this.setState({ editExp: Exp });
  };

  editExp = async (e) => {
    const url = 'https://striveschool-api.herokuapp.com/api/profile/60c72233291930001560aba1/experiences/' + this.props.id;
    const key =
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MjIzMzI5MTkzMDAwMTU2MGFiYTEiLCJpYXQiOjE2MjM2NjMxNTYsImV4cCI6MTYyNDg3Mjc1Nn0.pHCHEeBWoL8ouo2bml9H3Ju13WPbylVyEqIpyeFhx1o';
    try {
      const response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(this.state.editExp),
        headers: {
          'Authorization': key,
          'Content-type': 'application/json',
        },
      });
      const editedExp = await response.json();
      this.props.editExp(editedExp);
      console.log(editedExp);
      if (response.ok) {        
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

  deleteExp = async (e)=>{
      const url = 'https://striveschool-api.herokuapp.com/api/profile/60c72233291930001560aba1/experiences/' + this.props.id;
      const key =
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MjIzMzI5MTkzMDAwMTU2MGFiYTEiLCJpYXQiOjE2MjM2NjMxNTYsImV4cCI6MTYyNDg3Mjc1Nn0.pHCHEeBWoL8ouo2bml9H3Ju13WPbylVyEqIpyeFhx1o';

      try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
              'Authorization': key
            }
        })
        if(response.ok){
          this.props.filter(this.props.id)
          alert('Are you sure you want to delete?')
        }
        else{
          console.log('error');
        }
        
      } catch (error) {
        console.log(error);
      }

  }

  handleClose =()=>{
    this.setState({
        ...this.state,
        show:false
    })
}

handleShow =()=>{
    this.setState({
        ...this.state,
        show:true
    })
}

  render() {
    return (
      <div>

        <svg id="edit2btn" onClick={this.handleShow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
        <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
        </svg>

        {/* <FiEdit2 id="edit2btn"  size={30}/>  */}
        <Modal dialogClassName="my-modal" show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton onClick={(e) => {
                  this.editExp(e)
                  this.handleClose()                  
                }}>
            <Modal.Title>Edit experience</Modal.Title>
          </Modal.Header>

          <Modal.Body className="modal-Body">
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

            {/*   <Form.Group className='mb-3'>
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
              </Form.Group> */}
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
                  type='text'
                  id='startDate'
                  value={this.state.editExp.startDate}
                  onChange={(e) => this.StoreChange(e)}
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>End date</Form.Label>
                <Form.Control
                  type='text'
                  id='endDate'
                  value={this.state.editExp.endDate}
                  onChange={(e) => this.StoreChange(e)}
                />
              </Form.Group>

              <Form.Group>
              <Form.Label>Description</Form.Label>
                <Form.Control
                  as='textarea'
                  placeholder='Leave description here'
                  id='description'
                  value={this.state.editExp.description}
                  onChange={(e) => this.StoreChange(e)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-between">
           
                <div>
                    <Button
                    className="badge-pill"
                    onClick={(e) => {
                      this.deleteExp(e)                 
                    }}
                    variant='danger'                    
                  >
                    Delete
                  </Button>
                </div>

                <div>
                    <Button
                    className="badge-pill"
                    onClick={(e) => {
                      this.editExp(e);
                    }}
                    variant='primary'                    
                  >
                    Submit
                  </Button>
                </div>            

          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default EditExp;
