import{Card,Button,Row,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { AiFillCamera } from 'react-icons/ai';
import EditModal from './EditModal';
import background from '../assets/backgroundCover.png';
import'../css/HomeLeft.css'


const HomeLeft = ()=> {

    

        return (

          
            //     <Card style={{ width: '18rem', marginRight:'50px' }}>
            // <Card.Img variant="top" src="holder.js/100px180" />
            // <Card.Body>
            //     <Card.Title>Card Title</Card.Title>
            //     <Card.Text>
            //     Some quick example text to build on the card title and make up the bulk of
            //     the card's content.
            //     </Card.Text>
            //     <Button variant="primary">Go somewhere</Button>
            // </Card.Body>
            // </Card>
            <Card className='rounded'>
            <Card.Img id='cardImg' variant='top' src={background} className='position-relative' />
    
    
                             <Link to="/">
                             <AiFillCamera className="camerabtn" style={{color:'blue', position:'absolute', right:'2%', top:'2%'}} size={20}/></Link>
                        
                        <Card.Body> 
                                                
                            <img className=" img-fluid" id="profilePhoto"src='./assets/img/female-avatar.png' alt="profile-pic"/> 
                                             
                          
                                    <h5 className="mt-5 username"> Team ACHR</h5>
                                    
                                    <div className="d-inline mt-1">
                                        <p className="mr-2 text-muted"id="occupation" >Building a Linkedin like app</p>
                                                                     
                                    </div>
                                    
                                    {/* <Link to="" style={{ color: 'blue' }} className='mt-1'>
                                      <p>19 connections</p>
                                    </Link> */}
                                
                                <hr />  
                              <div className="d-flex" >                              
                            <p >
                                who viewed your profile

                            </p>
                            <p className='viewed'>
                                59
                            </p>
                            </div> 
                            <div className="d-flex">
                            <p >
                               Views of your profile 
                            </p>
                            <p className='viewed2'>
                                19
                            </p>
                            
                            </div>
                                <hr />   
                                <span className="d-flex" >
                                <p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-fill" viewBox="0 0 16 16">
                                    <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/>
                                    </svg></p>
                                    <p>
                                       My items 
                                    </p>

                                </span>
                        </Card.Body>
                    </Card>
           
        );
    
}
export default HomeLeft;