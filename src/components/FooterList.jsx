import {Row, Col, DropdownButton,Dropdown,ButtonGroup} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './../css/FooterList.css'
import { BsChevronCompactDown } from 'react-icons/bs'

const FooterList = () => {
    return (
        <div>
       <Col className="ListFooter my-2">
          <ul className="Footerlist mb-0 ">
             <li><Link style={{fontWeight:"400"}}>About</Link></li>
             <li><Link style={{fontWeight:"400"}}>Accessibility</Link></li>
             <li><Link style={{fontWeight:"400"}}>Help Center</Link></li>
            </ul>
            <ul className="Footerlist my-0">
             <li><Link style={{fontWeight:"400"}}>Privacy & Terms <BsChevronCompactDown style={{width:"15px"}} className="d-inline"/></Link></li>
             <li><Link style={{fontWeight:"400"}}>Ad Choices</Link></li>
            </ul>
            <ul className="Footerlist my-0">
             <li> <Link style={{fontWeight:"400"}}>Advertising</Link></li>
             <li><Link style={{fontWeight:"400"}}>Business Services <BsChevronCompactDown  style={{width:"15px"}} className="d-inline"/></Link></li>
            </ul>
            <ul className="Footerlist my-0">
             <li> <Link style={{fontWeight:"400"}}>Get the LinkedIn App</Link></li>
             <li><Link style={{fontWeight:"400"}}>More</Link></li>
            </ul>
       
     <div className="text-center mt-2">
       
        <img
            src='./assets/img/linkedin_logo.jpg'
            alt='logo' style={{ width: "4.2rem", height: ".9rem"}}
          />
            <span className="FooterListCopyRight">LinkedIn Corporation © 2021</span>
 </div>
              
       </Col>
       </div>
);
}
 
export default FooterList;