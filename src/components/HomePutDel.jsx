import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export class HomePutDel extends Component {
  state = {
    show: false,
    editPost: {
      text: this.props.text
    }
  }

  EditPost = async (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.set('post', this.state.editPost.image)
    const url =
      'https://striveschool-api.herokuapp.com/api/posts/' + this.props.id;
    const key =
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MjIzMzI5MTkzMDAwMTU2MGFiYTEiLCJpYXQiOjE2MjM2NjMxNTYsImV4cCI6MTYyNDg3Mjc1Nn0.pHCHEeBWoL8ouo2bml9H3Ju13WPbylVyEqIpyeFhx1o';
    try {
      const response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify({text: this.state.editPost.text}),
        headers: {
          Authorization: key,
          'Content-type': 'application/json',
        },
      });
      const editNews = await response.json()
      console.log(editNews);
      this.props.editNews(editNews);
      if (response.ok) {
        if(this.state.editPost.image){
          try {
            const imgresp = await fetch(url,{
                method:'POST',
                body: formData,
                headers:{
                    'Authorization': key
                }
            })
            console.log(imgresp);
            const editimg = await imgresp.json()
            console.log(editimg);
            this.props.editimg(editimg)
        } catch (error) {
            console.log(error);
            
        }
        }
        alert('edit done');
        this.setState({
          ...this.state,
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
      'https://striveschool-api.herokuapp.com/api/posts/' + this.props.id;
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
        this.props.filter(this.props.id);
        alert('Are you sure you want to delete?');
      } else {
        //console.log('error');
      }
    } catch (error) {
      console.log(error);
    }
  };

  handleClose = () => {
    this.setState({
      ...this.state,
      show: false,
    });
  };

  handleShow = () => {
    this.setState({
      ...this.state,
      show: true,
    });
  };


  render() {
    return (
      <div>
        <p onClick={this.handleShow}> EDIT</p>
        <Modal dialogClassName='my-modal'
          show={this.state.show}
          onHide={this.handleClose}>
          <Modal.Header closeButton onClick={(e) => {
              this.handleClose();
            }}>
            <Modal.Title>Edit Post</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group className='mb-3'>
                <Form.Label>Edit text *</Form.Label>
                <Form.Control
                  type='text'
                  value={this.state.editPost.text}
                  onChange={(e) =>
                    this.setState({ 
                      editPost: {...this.state.editPost, text: e.target.value } 
                    })
                  }
                  id='text'
                />
                <label className="p-0 d-flex mt-2" for="image">                                     
                    <input 
                        onClick={(e)=> {e.stopPropagation()
                          return true}}  
                          /* style={{display:'none'}} */
                          type="file"
                          id="image"
                          /* id="image" */
                          onChange={(e) => {this.setState({
                            editPost:{...this.state.editPost, 
                            image: e.target.files[0]}
                          })
                          console.log(e.target.files[0])}}
                                />
                         </label>
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
        </Modal>
      </div>
    );
  }
}

export default HomePutDel;
