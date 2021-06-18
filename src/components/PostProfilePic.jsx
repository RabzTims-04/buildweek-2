import { Component, React } from 'react';
import { Modal, Button, Form, Row, Col, Image } from 'react-bootstrap'
import { AiFillCamera } from 'react-icons/ai';

class PostProfilePic extends Component {

    state={
        show: false,
        user:{
        }
    }

    postPic = async (e)=>{
        e.preventDefault()
        let formData = new FormData()   
        formData.append('post', this.state.user.post) 
        console.log(this.state.user); 
        console.log(formData);  
        console.log(formData.get('post')); 
        
        const url = 'https://striveschool-api.herokuapp.com/api/posts/'
        const key = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MjIzMzI5MTkzMDAwMTU2MGFiYTEiLCJpYXQiOjE2MjM2NjMxNTYsImV4cCI6MTYyNDg3Mjc1Nn0.pHCHEeBWoL8ouo2bml9H3Ju13WPbylVyEqIpyeFhx1o'
        try {
            const response = await fetch(url, {
                method:'POST',
                body: formData,
                headers:{
                    'Authorization': key
                /*     'Content-Type': 'multipart/form-data' */
                    /* 'content-type':'application/json' */
                }
            })
            console.log(response);
            const data = await response.json()
            const id = await data._id
            console.log(data);
            console.log(id);
            console.log('ok done',data);

            if(response.ok){
                console.log('ok done',data);
                this.setState({
                    ...this.state,
                    user: {
                      post: ""
                    }
                  })
            }else{
                console.log('no idea lol');
            }
            
            
        } catch (error) {
            console.log(error);
        }
    }

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
            <p onClick={this.handleShow}> Upload</p>

            <Modal dialogClassName='my-modal'
              show={this.state.show}
              onHide={this.handleClose}>
              <Modal.Header closeButton onClick={(e) => {
                  this.handleClose();
                }}>
                <Modal.Title>Upload Image</Modal.Title>
                
              </Modal.Header>
              <Modal.Body>
              <input 
              onClick={(e)=> {e.stopPropagation()
            return true}}
                    type="file"
                    /* id="image" */
                    onChange={(e) => {this.setState({
                        user:{...this.state.user, 
                            post: e.target.files[0].name}
                    })
                       console.log(e.target.files[0].name);}}
                    />
                    <label for='image'>Click me</label>
              </Modal.Body>
              <Form /* onSubmit={(e) => this.postPic(e)} */>
              <Modal.Footer className="bg-dark text-white">
              <Row className="text-center align-items-center">
                <Col xs={8} className="mt-2">
                <Form.Group>
                <Button
                    onClick={(e) => this.postPic(e)}
                  
                  >
                  Upload Picture
                  </Button>
                
                  </Form.Group>
                </Col>
                <Col xs={4}>
                  
                </Col>
              </Row>
            </Modal.Footer>
            </Form>
            </Modal>
          </div>
        );
    }
}

export default PostProfilePic;