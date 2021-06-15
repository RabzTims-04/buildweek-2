import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/Profile.css';
//Components
import ProfileCardOne from './ProfileCardOne';
import ProfileStrength from './ProfileStrength';
import RProfileCardOne from './RProfileCardOne';
import RProfileCardTwo from './RProfileCardTwo';
import YourDashboard from './YourDashboard';

class Profile extends Component {

    state={
        profileData:[]
    }

    editInfo =(editInfo)=>{
        if(editInfo){
            this.setState({
                profileData: editInfo
            })
        }
        
    }

    componentDidUpdate =(prevProps)=>{
        if(prevProps.profileData?.name !== this.state.profileData?.name){
            this.fetchData()
        }else{
            console.log('not changed');
        }
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
           <Container fluid>

               <Row className="justify-content-between profilePage">
                   <Col md={9} className="p-5 d-flex flex-column">
                       <div>
                         <ProfileCardOne editInfo={this.editInfo} profileData={this.state.profileData}/>
                       </div>

                       <div className="mt-3">
                         <ProfileStrength/>
                       </div>

                       <div className="mt-3">
                         <YourDashboard/>
                       </div>
                    
                   </Col>

                   <Col md={3}>
                       <RProfileCardOne/>
                       <RProfileCardTwo/>
                       {/* Carls Components */}

                   </Col>
               </Row>

           </Container>
        );

import PeopleAlsoViewed from './PeopleAlsoViewed';
import Learning from './Learning';
import Dashboard from './Dashboard';
import Messaging from './Messaging';
class Profile extends Component {
  state = {
    profileData: [],
  };

  componentDidMount = () => {
    this.fetchData();
  };

  fetchData = async () => {
    try {
      const url = 'https://striveschool-api.herokuapp.com/api/profile/me';
      const key =
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM3MjIzMzI5MTkzMDAwMTU2MGFiYTEiLCJpYXQiOjE2MjM2NjMxNTYsImV4cCI6MTYyNDg3Mjc1Nn0.pHCHEeBWoL8ouo2bml9H3Ju13WPbylVyEqIpyeFhx1o';

      const response = await fetch(url, {
        headers: {
          Authorization: key,
        },
      });
      const data = await response.json();
      if (response.ok) {
        console.log(data);
        this.setState({
          profileData: data,
        });
      }
    } catch (error) {
      console.log(error);

    }
  };

  render() {
    return (
      <Container fluid>
        <Row className='justify-content-between'>
          <Col md={8} className='p-5'>
            <ProfileCardOne profileData={this.state.profileData} />
            <Dashboard />
          </Col>

          <Col md={4}>
            <PeopleAlsoViewed />
            <Learning />
          </Col>
        </Row>
        <Messaging />
      </Container>
    );
  }
}

export default Profile;
