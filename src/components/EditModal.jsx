import '../css/EditModal.css'
import { FiEdit2 } from 'react-icons/fi';
import { Modal, Button, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import { withRouter } from 'react-router-dom'
import EditProfile from './EditProfile';

const EditModal =(props)=>{

const [show, setShow] = useState(false);
const [newcomment, setNewComment] = useState([])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const updated =(data)=>{
      setNewComment(data)
  } 

    return (
        <>          
            <FiEdit2 onClick={handleShow} className="editbtn" size={30}/>                
            
       {/*   <img
                 id={props.imdbID}
                 onClick={()=> props.history.push('/details/' + props.imdbID)} 
                 className="imagetransition img-fluid image-height" 
                 src={props.Poster} 
                 alt={props.Title}/> */}

            <Modal dialogClassName="my-modal" show={show} onHide={handleClose}>

                <Modal.Header className="edit-modal" closeButton>                
                            <Modal.Title>Edit intro</Modal.Title>                
                </Modal.Header>
                <Modal.Body className="modal-Body mt-4">
                    <EditProfile/>               
                </Modal.Body>
                <Modal.Footer>
                <Button className="badge-pill savebtn" variant="primary" type="submit">
                    <strong>Save</strong>
                </Button>

                </Modal.Footer>
            </Modal> 
        </>
    )

}

export default withRouter(EditModal)