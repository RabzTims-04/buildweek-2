import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import HomePost from './HomePost'
import NewsFeed from './NewsFeed'
import NewsList from './NewsList'
import CourseList from './CourseList'
import FooterList from './FooterList'
import HomeLeft2 from './HomeLeft2';
import HomeLeft from './HomeLeft';


class Home extends Component {

    state ={
        newsFeed:null
    }

    newPost =(postVal)=>{
        this.setState({
            newsFeed:postVal
        })
    }




    render() {


        return (
            <Container fluid className="">
               <Row className="justify-content-between newsPage">

                   <Col lg={3} className="py-5 d-none d-lg-flex flex-column">
                       {/* {Profile} */}
                       <HomeLeft profilePic={this.props.profilePic}/>
                       <HomeLeft2/>

                   </Col>                

                   <Col lg={6} className="py-5 d-flex flex-column">                 

                       {/* Main */}
                       <div>
                           {/* Hasham's POST method Component*/}

                           <HomePost newPost={this.newPost} profilePic={this.props.profilePic}/>

                       </div>

                       <div className="mt-3">
                           {/* Rabia's GET method Component */}
                          
                           <NewsFeed newPost ={this.state.newsFeed}/>   
                        
                       </div>

                   </Col>


                   <Col  lg={3} className="py-5 d-flex flex-column">
                       {/* right column */}
                       {/* Carl's component */}                     
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
