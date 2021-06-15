import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import '../css/Profile.css'
import ProfileCardOne from './ProfileCardOne';
import RProfileCardOne from './RProfileCardOne'

class Profile extends Component {

    state={
        profileData:[]
    }

    componentDidMount =()=>{
        this.fetchData()
    }

    fetchData = async ()=>{
        try {
            const url = 'https://striveschool-api.herokuapp.com/api/profile/me'
            const key= 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MjIzMzI5MTkzMDAwMTU2MGFiYTEiLCJpYXQiOjE2MjM2NjMxNTYsImV4cCI6MTYyNDg3Mjc1Nn0.pHCHEeBWoL8ouo2bml9H3Ju13WPbylVyEqIpyeFhx1o'

            const response = await fetch(url,{
                headers:{
                    'Authorization': key
                }
            })
            const data = await response.json()
            if(response.ok){
                console.log(data); 
                this.setState({
                    profileData:data
                })               
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    render() {

        return (
           <Container fluid className="profile-container px-0  ">
               <Row className="mx-0 px-0 px-lg-5 justify-content-between  ">
                   <Col xs={12} lg={8} className="px-0">
                       <ProfileCardOne profileData={this.state.profileData}/>
                   </Col>
                   <Col xs={12} lg={4} className="mx-0 px-0 px-lg-3" >
                       <RProfileCardOne/>

                   </Col>
               </Row>
           </Container>
        );
    }
}

export default Profile;