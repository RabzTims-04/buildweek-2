import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import '../css/Profile.css'
import ProfileCardOne from './ProfileCardOne';

class Profile extends Component {

    render() {

        return (
           <Container fluid>

               <Row>
                   <Col md={8}>
                       <ProfileCardOne/>
                   </Col>

                   <Col md={4}>
                   </Col>
               </Row>

           </Container>
        );
    }
}

export default Profile;