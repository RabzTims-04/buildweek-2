import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import HomePost from './HomePost'
import NewsFeed from './NewsFeed'
import HomePutDel from './HomePutDel'


class Home extends Component {
    render() {
        return (
            <Container fluid className="">
               <Row className="justify-content-between profilePage">

                   <Col sm={2} className="py-5 d-flex flex-column">
                       {/* {Profile} */}

                   </Col>

                   <Col sm={7} className="py-5 d-flex flex-column">
                       {/* Main */}
                       <div>

                           {/* Hasham's POST method Component*/}
                           <HomePost/>
                         
                       </div>

                       <div className="mt-3">
                           {/* Rabia's GET method Component */}

                           <NewsFeed/>                        
                        
                       </div>

                   </Col>

                   <Col sm={3} className="py-5 d-flex flex-column">
                       {/* right column */}
                       {/* Aymane PUT DELETE method component */}
                       <HomePutDel/>

                   </Col>

               </Row> 
                
            </Container>
        );
    }
}

export default Home;