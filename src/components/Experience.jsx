import { Component } from 'react';
import { Card, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../css/Experience.css'

class Experience extends Component {

    render() {

        return (

            <Card className='rounded'>
        
                    <Card.Body>

                        <Row>
                            <Col>
                                 <h6>Experience</h6>
                            </Col>

                            <Col>

                            </Col>
                        </Row> 

                        <Row>
                        <div className="dash2 d-flex flex-column w-100">
                                 <Col className="d-flex p-0 mt-3">
                                    <Col className="pr-0 pl-1">
                                        <img src="" alt="logo" className="img-fluid"/>
                                    </Col> 
                                    <Col className="p-0" xl={11} style={{borderBottom:'1px solid lightgrey'}}>
                                        <Link>
                                            <span className="">Creator Mode: <span>Off</span></span>
                                            <p className=" text-muted">Grow your audience and get discovered by highlighting content on your profile</p>
                                            <p className=" text-muted">Grow your audience and get discovered by highlighting content on your profile</p>
                                        </Link>
                                    </Col>
                                </Col>

                                <Col className="d-flex p-0  mt-3">
                                    <Col className="pr-0 pl-1">
                                        <img src="" alt="logo" className="img-fluid"/>
                                    </Col> 
                                    <Col className="p-0" xl={11} style={{borderBottom:'1px solid lightgrey'}}>
                                        <Link>
                                            <span className="">My Network</span>
                                            <p className=" text-muted">Manage your connections, events and interests.</p>
                                            <p className=" text-muted">Grow your audience and get discovered by highlighting content on your profile</p>
                                        </Link>
                                    </Col>
                                </Col>

                                <Col className="d-flex p-0  mt-3">
                                    <Col className="pr-0 pl-1" >
                                        <img src="" alt="logo" className="img-fluid"/>
                                    </Col> 
                                    <Col className="p-0" xl={11} style={{borderBottom:'1px solid lightgrey'}}>
                                        <Link>
                                            <span className="">Salary insights</span>
                                            <p className=" text-muted">See how your salary compares to others in the community.</p>
                                            <p className=" text-muted">Grow your audience and get discovered by highlighting content on your profile</p>
                                        </Link>
                                    </Col>
                                </Col> 

                                <Col className="d-flex p-0  mt-3">
                                    <Col className="pr-0 pl-1">
                                         <img src="" alt="logo" className="img-fluid"/>
                                    </Col> 
                                    <Col className="p-0" xl={11}>
                                        <Link>
                                            <span className="">My items</span>
                                            <p className="text-muted p-0">Keep track of your jobs, courses and articles.</p>
                                            <p className="p-0 text-muted">Grow your audience and get discovered by highlighting content on your profile</p>
                                        </Link>
                                    </Col>
                                </Col>                                  
                            </div>

                        </Row> 

                    </Card.Body>
                </Card>
        );
    }
}

export default Experience;