import { Component } from 'react';
import { Link } from 'react-router-dom'
import { Container, Card, Col, Button } from 'react-bootstrap'
import '../css/NewsFeed.css'

class NewsFeed extends Component {

    render() {

        return (

            <Card className='rounded'>
               <Container className="pt-4 pr-4 pl-4 pb-0 mb-0">
                    <div className="d-flex flex-row">
                        <Col sm={1}>
                            <img src="" alt="p" className="img-fluid" />
                        </Col>

                        <Col sm={9} className="d-flex flex-column">
                            <Link to=""><p className="p-0 m-0">Name</p></Link>
                            <span style={{fontSize:'0.7em'}} className="text-muted">followers</span>
                            <div className="d-flex flex-row">
                                <span style={{fontSize:'0.7em'}} className="text-muted">status</span>
                                <svg style={{height:'14px', width:'14px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="12x12" fill="currentColor" className="mercado-match m-0 p-0 ml-2" width="12" height="12" focusable="false">
                                <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
                                </svg>
                            </div>
                            
                        </Col>

                        <Col sm={2}>

                        </Col>
                    </div>

                    <div style={{fontSize:'0.8em'}} className="d-flex flex-row mt-2 mb-0">

                       <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam a eveniet distinctio obcaecati sit quod vel repellat repudiandae odio aspernatur ut itaque voluptatum eius incidunt suscipit, sint consequuntur culpa. Modi.</p> 

                    </div>  
                </Container>                           
                        
                <Card.Body> 
                    <img src="" alt="cover" className="img-fluid" />
                </Card.Body>

                <Container>
                    <div className="d-flex flex-row comments-btn py-2">
                        <img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" alt="like"></img>

                        <img src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f" alt="clap"/>  

                        <img src="https://static-exp1.licdn.com/sc/h/54ivsuv8nxk12frsw45evxn3r" alt="APPRECIATION"/> 

                       
                        <span style={{fontSize:'0.7em'}} className="text-muted ml-2 number-span"> <Link style={{fontSize:'1em', fontWeight:'450'}} className="text-muted" to="">321</Link> </span>
                        

                        <span style={{fontSize:'0.7em'}} className="text-muted ml-2"> <Link style={{fontSize:'1em', fontWeight:'450'}} className="text-muted" to="">14 comments</Link> </span>                    
                    </div>

                    <div className="d-flex flex-row py-2 newsfeed-Cardbtn">
                        <Button variant="outline-secondary">
                            <div className="d-flex flex-row">
                            <svg style={{height:'14px', width:'14px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match m-0" width="24" height="24" focusable="false">
                            <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"></path>
                            </svg> 
                            <span>Like</span>
                            </div>
                        </Button>

                        <Button variant="outline-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                            <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
                            </svg> 
                            Comment
                        </Button>  

                        <Button variant="outline-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                            <path d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z"></path>
                            </svg> 
                            Share
                        </Button>

                       
                        <Button variant="outline-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                        <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
                        </svg>
                        Send
                        </Button>
                                       
                    </div>
                    
                </Container>
             
                </Card>
        );
    }
}

export default NewsFeed;