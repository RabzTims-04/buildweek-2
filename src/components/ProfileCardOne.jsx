import { Component } from 'react';
import { Link } from 'react-router-dom';
import { AiFillCamera } from 'react-icons/ai';
import EditModal from './EditModal';
import { Card, Row, Col, Button } from 'react-bootstrap';
import '../css/ProfileCardOne.css';
import background from '../assets/backgroundCover.png';

class ProfileCardOne extends Component {

  state={
    profPic:'',
    myProfile:null
  }

  postCardProfileImg = async (e)=>{
    let formData = new FormData()   
    formData.set('profile', this.state.myProfile.image)
    e.preventDefault()
    const url = 'https://striveschool-api.herokuapp.com/api/profile/me/picture'
    const key = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MjIzMzI5MTkzMDAwMTU2MGFiYTEiLCJpYXQiOjE2MjM2NjMxNTYsImV4cCI6MTYyNDg3Mjc1Nn0.pHCHEeBWoL8ouo2bml9H3Ju13WPbylVyEqIpyeFhx1o'
    try {

      const response = await fetch(url,{
        method:'POST',
        body: formData,
        headers:{
          Authorization:key,
         /*  'content-type': 'application/json' */
        }
      })
      const data = await response.json()
      console.log(data);
      const img = await data.image
      console.log(img);
      /* this.props.image(img) */
      if(response.ok){
        alert('pic posted')
        this.setState({
          ...this.state,
          profPic:img
        })
       
        
      }
      else{
        console.log('lets try again');
      }
      
    } catch (error) {
      console.log(error);
    }
  }

  render() {

    return (
      <Card className='rounded'>
        <Card.Img className='cardImg' variant='top' src={background} />
        

                         <Link to="/">
                         <AiFillCamera onClick={(e)=>{this.postCardProfileImg(e)}} className="camerabtn" style={{color:'blue', position:'absolute', right:'4%', top:'4%'}} size={20}/></Link>
                    
                    <Card.Body> 
                    <label className="p-0 d-flex m-0" for="postimg">
                    <img className="profilePic img-fluid" src={this.state.profPic?this.state.profPic:this.props.profileData.image} alt="profile-pic"/> 
                                </label>
                                <input 
                                    /* onClick={(e)=> {e.stopPropagation()
                                    return true}} */
                                    style={{display:'none'}}
                                    type="file"
                                    title="choose"
                                    id="postimg"
                                /* id="image" */
                                    onChange={(e) => {this.setState({
                                      ...this.state,
                                      myProfile:{...this.state.myProfile, 
                                            image: e.target.files[0]}
                                })
                                console.log(e.target.files[0])}}
                                
                                
                                />
                                         
                        <Row className='mb-4 justify-content-between'>
                            <Col md={8} className="d-flex flex-column cardBody mt-4">
                                <h2>{this.props.profileData.name} {this.props.profileData.surname}</h2>
                                <span>{this.props.profileData.bio}</span>
                                <div className="d-inline mt-1">
                                    <span className="mr-2 text-muted">{this.props.profileData.area} .</span>
                                    <Link to="" style={{color:'blue'}}>
                                        <span>Contact info</span>
                                    </Link>                                   
                                </div>
                                <Link to="" style={{ color: 'blue' }} className='mt-1'>
                                  <p>19 connections</p>
                                </Link>
                                <div className="d-inline">
                                    <Button className="badge-pill btn1" variant="primary">Open to</Button>
                                    <Button className="badge-pill mx-2 btn2" variant="outline-secondary">Add section</Button>
                                    <Button className="badge-pill btn3" variant="outline-secondary">More</Button>                                   
                                </div>
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
