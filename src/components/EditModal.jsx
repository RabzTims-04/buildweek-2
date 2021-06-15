import '../css/EditModal.css'
import { FiEdit2 } from 'react-icons/fi';
import { Modal, Button, Row, Col } from 'react-bootstrap'
import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import EditProfile from './EditProfile';

class EditModal extends Component{

        state={
            show:false,
            profileData:null,
            submitbtn:null
        }

        componentDidUpdate =(prevProps)=>{
            if(prevProps.profileData !== this.props.profileData){
                this.setState({
                    ...this.state,
                    profileData:this.props.profileData
                }) 
            }                                   
        }

        submit =(val)=>{
            this.setState({
                ...this.state,
                submitbtn:val
            })
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

    render(){      

        return(

        <>          
            <FiEdit2 id="editbtn" onClick={this.handleShow} size={30}/>                

            <Modal dialogClassName="my-modal" show={this.state.show} onHide={this.handleClose}>

                <Modal.Header className="edit-modal" closeButton>                
                            <Modal.Title>Edit intro</Modal.Title>                
                </Modal.Header>
                <Modal.Body className="modal-Body mt-4">
                    <EditProfile profileData={this.state.profileData} editInfo={this.props.editInfo} submit={this.submit}/>               
                </Modal.Body>
                <Modal.Footer>
               {/*  <Button 
                className="badge-pill savebtn" 
                variant="primary" 
                type="submit">
                    <strong>Save</strong>
                </Button> */}

                </Modal.Footer>
            </Modal> 
        </>
    )
  }
}

export default withRouter(EditModal)