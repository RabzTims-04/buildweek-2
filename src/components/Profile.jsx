import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import '../css/Profile.css'
/**Left Profile Cards */
import ProfileCardOne from './ProfileCardOne';

/**Right Profile Cards */
 import RProfileCardOne from './RProfileCardOne'
 import RProfileCardTwo from './RProfileCardTwo';


class Profile extends Component {

    render() {

        return (
           <Container fluid>

               <Row className="justify-content-between">
                   <Col xs={12} md={8}>
                       <ProfileCardOne/>
                   </Col>

                   <Col xs={12} md={4}>
                       <RProfileCardOne/>
                       {/* <RProfileCardTwo/> */}
                   </Col>
               </Row>

           </Container>
        );
    }
}

export default Profile;