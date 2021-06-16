import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/Profile.css';
import ProfileCardOne from './ProfileCardOne';
import ProfileStrength from './ProfileStrength';
import RProfileCardOne from './RProfileCardOne';
import YourDashboard from './YourDashboard';
import PeopleAlsoViewed from './PeopleAlsoViewed';
import Learning from './Learning';
import Experience from './Experience';
/* import Dashboard from './Dashboard'; */
import Messaging from './Messaging';

class Profile extends Component {
  state = {
    profileData: [],
  };

  editInfo = (editInfo) => {
    if (editInfo) {
      this.setState({
        profileData: editInfo,
      });
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    console.log('state', prevState);
    if (
      prevState.profileData.name !== this.state.profileData.name ||
      prevState.profileData.surname !== this.state.profileData.surname ||
      prevState.profileData.email !== this.state.profileData.email ||
      prevState.profileData.username !== this.state.profileData.username ||
      prevState.profileData.title !== this.state.profileData.title ||
      prevState.profileData.bio !== this.state.profileData.bio ||
      prevState.profileData.area !== this.state.profileData.area ||
      prevState.profileData.image !== this.state.profileData.image
    ) {
      this.fetchData();
    } else {
      console.log('not changed');
    }
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
        //console.log(data);
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
        <Row className='justify-content-between profilePage'>
          <Col lg={8} md={12} className='py-5 d-flex flex-column'>
            <div>
              <ProfileCardOne
                editInfo={this.editInfo}
                profileData={this.state.profileData}
              />
            </div>

            <div className='mt-3'>
              <ProfileStrength />
            </div>

            <div className='mt-3'>
              <YourDashboard />
              {/* <Dashboard /> */}
            </div>

            <div className='mt-3'>
              <Experience />
            </div>
          </Col>

          <Col lg={4} className='pt-5 d-flex flex-column d-md-none d-lg-block'>
            <RProfileCardOne />
            {/* <RProfileCardTwo/> */}
            <PeopleAlsoViewed />
            <Learning />
            {/* Carls Components */}
          </Col>
        </Row>
        <Messaging />
      </Container>
    );
  }
}

export default Profile;
