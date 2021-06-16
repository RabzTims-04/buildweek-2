import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import HomePost from './HomePost'
import NewsFeed from './NewsFeed'
import HomePutDel from './HomePutDel'
import HomeLeft from './HomeLeft';
import ProfileCardOne from './ProfileCardOne';


class Home extends Component {
    render() {
        return (
            <Container fluid className="">
               <Row className="justify-content-between profilePage">

                   <Col sm={2} className="py-5 d-flex flex-column">
                       {/* {Profile} */}
                       <HomeLeft/>

                   </Col>

                   <Col sm={6} className="py-5 d-flex flex-column">
                       {/* Main */}
                       <div>

                           {/* Hasham's POST method Component*/}
                           <HomePost/>
                         {/* <ProfileCardOne/> */}
                       </div>

                       <div className="mt-3">
                           {/* Rabia's GET method Component */}

                           {/* <NewsFeed/>                         */}
                        
                       </div>

                   </Col>

                   <Col sm={3} className="py-5 d-flex flex-column">
                       {/* right column */}
                       {/* Aymane PUT DELETE method component */}
                       {/* <HomePutDel/> */}

                   </Col>

               </Row> 
                
            </Container>
        );
    }
}

export default Home;