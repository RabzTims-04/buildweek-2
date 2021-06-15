import { Component } from 'react';
import { Link } from 'react-router-dom';
import { AiFillCamera } from 'react-icons/ai';
import EditModal from './EditModal';
import { Jumbotron, Container, Button, Card, Row, Col } from 'react-bootstrap';
import '../css/ProfileCardOne.css';
import background from '../assets/backgroundCover.png';

class ProfileCardOne extends Component {

  render() {

    return (
      <Card className='rounded'>
        <Card.Img className='cardImg' variant='top' src={background} />

                         <Link>
                         <AiFillCamera className="camerabtn" style={{color:'blue', position:'absolute', right:'4%', top:'4%'}} size={20}/></Link>
                    
                    <Card.Body>                       
                        <img className="profilePic img-fluid" src={this.props.profileData.image} alt="profile-pic"/> 
                                         
                        <Row className='mb-4 justify-content-between'>
                            <Col md={8} className="d-flex flex-column cardBody mt-4">
                                <h2>{this.props.profileData.name} {this.props.profileData.surname}</h2>
                                <span>{this.props.profileData.bio}</span>
                                <div className="d-inline mt-1">
                                    <span className="mr-2 text-muted">{this.props.profileData.area} .</span>
                                    <Link style={{color:'blue'}}>
                                        <span>Contact info</span>
                                    </Link>                                   
                                </div>
                                <Link style={{ color: 'blue' }} className='mt-1'>
                                  <p>19 connections</p>
                                </Link>
                            </Col>

                            <Col className="text-right" md={4}>
                               <EditModal profileData={this.props.profileData} editInfo={this.props.editInfo}/>
                            </Col>
                               
                        
                        </Row>

                    </Card.Body>
                </Card>
                 );
                 }

                }

export default ProfileCardOne;
