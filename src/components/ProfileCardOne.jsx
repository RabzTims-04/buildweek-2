import { Component } from 'react';
import { Jumbotron, Container, Button } from 'react-bootstrap';
import '../css/ProfileCardOne.css'
import background from '../assets/backgroundCover.png'

class ProfileCardOne extends Component {

    render() {

        return (
            <Container>
                <Jumbotron fluid>
                    <img className={"img-fluid"}style={{objectFit:'cover'}} src={background} alt="background"/>
                    <h1>Hello, world!</h1>
                    <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                    </p>
                    <p>
                    <Button variant="primary">Learn more</Button>
                    </p>
                </Jumbotron>
            </Container>
        );
    }
}

export default ProfileCardOne;