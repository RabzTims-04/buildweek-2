import { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import HomePost from './HomePost'
import NewsFeed from './NewsFeed'
import HomeLeft from './HomeLeft';
import ProfileCardOne from './ProfileCardOne';


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
               <Row className="justify-content-between profilePage">

                   <Col sm={2} className="py-3 d-flex flex-column">
                       {/* {Profile} */}
                       <HomeLeft/>

                   </Col>                

                   <Col sm={7} className="py-3 d-flex flex-column">

                       {/* Main */}
                       <div>

                           {/* Hasham's POST method Component*/}

                           <HomePost newPost={this.newPost} profilePic={this.props.profilePic}/>
                         {/* <ProfileCardOne/> */}

                           {/*   <HomePost/> */}
                         

                       </div>

                       <div className="mt-3">
                           {/* Rabia's GET method Component */}
                          
                           <NewsFeed newPost ={this.state.newsFeed}/>    
                        
                       </div>

                   </Col>

                   <Col sm={3} className="py-3 d-flex flex-column">
                       {/* right column */}
                       {/* Aymane PUT DELETE method component */}

                       {/* <HomePutDel/> */}

                      {/*  <HomePutDel/> */}


                   </Col>

               </Row> 
                
            </Container>
        );
    }
}

export default Home;
