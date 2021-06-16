import '../css/EditModal.css'
import { FiEdit2 } from 'react-icons/fi';
import { Modal } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import EditExp from './EditExp';

const EditExpModal =(props)=>{

const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <>          
            {/* <FiEdit2 size={30}/>   */}
            <div onClick={handleShow} className="" ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
            <path d="M21 13h-8v8h-2v-8H3v-2h8V3h2v8h8z"></path>
            </svg> </div>            
            
         <img
                 id={props.imdbID}
                 onClick={()=> props.history.push('/details/' + props.imdbID)} 
                 className="imagetransition img-fluid image-height" 
                 src={props.Poster} 
                 alt={props.Title}/>

            <Modal dialogClassName="my-modal" show={show} onHide={handleClose}> 

                <Modal.Header className="edit-modal" closeButton>                
                            <Modal.Title>Add experience</Modal.Title>                
                </Modal.Header>
                <Modal.Body className="modal-Body mt-4">
                    <EditExp/>               
                </Modal.Body>
                <Modal.Footer>
                {/* <Button className="badge-pill savebtn" onClick={()=>handleClose()} variant="primary" type="submit">
                    <strong>Save</strong>
                </Button> */}

                </Modal.Footer>
            </Modal> 
        </>
    )

}

export default withRouter(EditExpModal)
