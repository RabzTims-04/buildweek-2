import {Container,Row,Col} from 'react-bootstrap'
import {Component} from 'react'

class RProfileCardTwo extends Component {
    render() { 
        return ( 
            <Row className="p-3 w-100" style={{backgroundColor:"white",border:"solid 1px lightgrey",borderRadius:"15px"}}>
                <Col>
                <Row  style={{fontSize:"1em", color:"rgb(102,102,102)",fontWeight:"600"}}>Edit public profile & URL<span></span></Row>
                <hr/>
                <Row  style={{fontSize:"1em",color:"rgb(102,102,102)",fontWeight:"600"}}>Add profile in another language <span></span></Row>
                </Col>
            </Row>
         );
    }
}
 
export default RProfileCardTwo;