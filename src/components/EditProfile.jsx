import { Component } from 'react';
import { Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'

class EditProfile extends Component {

    render() {
        
        return (

            <Form>
                <Form.Group className="d-flex justify-content-between" controlId="exampleForm.ControlInput1">
                    <div>
                         <Form.Label className="text-muted">First Name *</Form.Label>
                         <Form.Control className="w-100" type="text"/>
                    </div>
             
                    <div>
                         <Form.Label className="text-muted">Last Name *</Form.Label>
                         <Form.Control type="text"/>
                    </div>
                </Form.Group>

                <Link>
                   Add former name
                </Link>

                <Form.Group className="mt-4" controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="text-muted">Headline *</Form.Label>
                    <Form.Control as="textarea" rows={2} />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Example select</Form.Label>
                <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect2">
                <Form.Label>Example multiple select</Form.Label>
                <Form.Control as="select" multiple>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
                </Form.Group>
          </Form>
        );
    }
}

export default EditProfile