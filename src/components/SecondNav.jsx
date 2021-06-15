
import {Navbar,Form,FormControl,Button,InputGroup,Row, Col} from 'react-bootstrap'
import '../css/SecondNav.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const SecondNav =()=>{

    useEffect(()=>{
           AOS.init({
            mirror: true            
          });
    },[])

    return(

        <Navbar data-aos="slide-in-top" className=" container-fluid d-none d-md-flex justify-content-between" id='margin'>
           
        <Form inline id="container">
            <InputGroup>
            <InputGroup.Prepend>
            <svg id='avatar'xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>  
            </InputGroup.Prepend>
            <Row>
                <Col sm={12}>
            <h6>Buildweek 2</h6>
            
            <p className="nav-p">Building a linkedin like app</p>
            </Col>
            </Row>
            </InputGroup>
        </Form>
        <Form inline id="container1">
            
            <Button id="more"type="submit" style={{borderRadius:"25px",border:'1px solid black',marginLeft:'10px',marginRight:'10px'}}>More</Button>
            <Button id="addsection"type="submit"style={{borderRadius:"25px",border:'1px solid black',marginLeft:'10px',marginRight:'10px'}}>Add section</Button>
            <Button  classNames="btn btn-primary"type="submit"style={{borderRadius:"25px",marginLeft:'10px',marginRight:'10px'}} >Open to</Button>
        </Form>
        
        </Navbar>
        // {{window.onscroll = function() {
        //     let currentScrollPos = window.pageYOffset;
          
        //     // 20 is an arbitrary number here, just to make you think if you need the prevScrollpos variable:
        //     if (currentScrollPos > 20) {
        //       // I am using 'display' instead of 'top':
        //       document.getElementById("Navbar-scroll").style.display = "none";
        //     } else {
        //       document.getElementById("Navbar-scroll").style.display = "initial";
        //     }
        //   }}}


    )

}
export default SecondNav
