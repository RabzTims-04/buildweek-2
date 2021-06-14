

import {Container,Row,Col} from 'react-bootstrap'
import {Component} from 'react'

class RProfileCardTwo extends Component {
    render() { 
        return ( 
            <Container className="d-flex" style={{backgroundColor:"white",border:"solid 1px lightgrey",borderRadius:"15px"}}>
             
                <Col xs={12} style={{fontSize:"1em", color:"rgb(102,102,102)",fontWeight:"600"}}>Edit public profile & URL<span></span></Col>
                <hr/>
                <Col xs={12} style={{fontSize:"1em",color:"rgb(102,102,102)",fontWeight:"600"}}>Add profile in another language <span></span></Col>
            
            </Container>
         );
    }
}
 
export default RProfileCardTwo;
