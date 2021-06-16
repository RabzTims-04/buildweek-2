import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import HomePost from './HomePost'
import NewsFeed from './NewsFeed'
import NewsList from './NewsList'
import CourseList from './CourseList'
import FooterList from './FooterList'
import HomePutDel from './HomePutDel'


class Home extends Component {
    render() {
        return (
            <Container fluid className="">
               <Row className="justify-content-between profilePage">

                   <Col sm={2} className="py-5 d-flex flex-column">
                       {/* {Profile} */}

                   </Col>

                   <Col sm={6} className="py-5 d-flex flex-column">
                       {/* Main */}
                       <div>

                           {/* Hasham's POST method Component*/}
                           {/* <HomePost/> */}
                         
                       </div>

                       <div className="mt-3">
                           {/* Rabia's GET method Component */}

                           {/* <NewsFeed/>                         */}
                        
                       </div>

                   </Col>

                   <Col  md={4} className="py-5 d-flex flex-column">
                       {/* right column */}
                       {/* Aymane PUT DELETE method component */}
                       {/* <HomePutDel/> */}
                     
                        <NewsList/>
                        <CourseList/>
                        <FooterList/>
                    </Col>

                </Row> 
                    
                </Container>
        );
    }
}

export default Home;