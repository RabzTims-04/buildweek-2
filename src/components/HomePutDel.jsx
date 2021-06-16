import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export class HomePutDel extends Component {
  state = {
    editPost: {
      text: 'new edit',
    },
  };

  EditPost = async (e) => {
    const url =
      'https://striveschool-api.herokuapp.com/api/posts/60c9e6d15cd73400155f6055';
    const key =
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MjIzMzI5MTkzMDAwMTU2MGFiYTEiLCJpYXQiOjE2MjM2NjMxNTYsImV4cCI6MTYyNDg3Mjc1Nn0.pHCHEeBWoL8ouo2bml9H3Ju13WPbylVyEqIpyeFhx1o';
    try {
      const response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify(this.state.editPost),
        headers: {
          Authorization: key,
          'Content-type': 'application/json',
        },
      });
      if (response.ok) {
        alert('edit done');
        this.setState({
          ...this.state.editPost,
        });
      } else {
        console.log('error');
      }
    } catch (error) {
      console.log(error);
    }
  };
  deletePost = async (e) => {
    e.preventDefault();
    const url =
      'https://striveschool-api.herokuapp.com/api/posts/60c9e6d15cd73400155f6055';
    const key =
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MjIzMzI5MTkzMDAwMTU2MGFiYTEiLCJpYXQiOjE2MjM2NjMxNTYsImV4cCI6MTYyNDg3Mjc1Nn0.pHCHEeBWoL8ouo2bml9H3Ju13WPbylVyEqIpyeFhx1o';

    try {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          Authorization: key,
        },
      });
      if (response.ok) {
        alert('Are you sure you want to delete?');
      } else {
        //console.log('error');
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
            <Modal.Title>Edit Post</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group className='mb-3'>
                <Form.Label>Edit text *</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter new text'
                  value={this.state.editPost.text}
                  onChange={(e) =>
                    this.setState({ editPost: { text: e.target.value } })
                  }
                  id='text'
                />
              </Form.Group>
              <Button
                variant='primary'
                className='mr-3'
                onClick={(e) => this.EditPost(e)}
              >
                Submit
              </Button>
              <Button variant='danger' onClick={(e) => this.deletePost(e)}>
                Delete post
              </Button>
            </Form>
          </Modal.Body>
        </Modal.Dialog>
      </div>
    );
  }
}

export default HomePutDel;
