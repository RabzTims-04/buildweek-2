import {Row, Col, DropdownButton,Dropdown,ButtonGroup} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './../css/FooterList.css'

const FooterList = () => {
    return (
       <Col>
          <ul className="Footerlist mb-1">
             <li><Link>About</Link></li>
             <li><Link>Accessibility</Link></li>
             <li><Link>Help Center</Link></li>
            </ul>
            <ul className="Footerlist my-0">
             <li><Link> Privacy & Terms</Link></li>
             <li><Link>Ad Choices</Link></li>
            </ul>
            <ul className="Footerlist my-0">
             <li> <Link>Advertising</Link></li>
             <li><Link>Business Services</Link></li>
            </ul>
            <ul className="Footerlist my-0">
             <li> <Link>Get the LinkedIn App</Link></li>
             <li><Link>More</Link></li>
            </ul>
       
     <div className="text-center mt-2">
       
        <img
            src='./assets/img/linkedin_logo.jpg'
            alt='logo' style={{ width: "4.2rem", height: ".9rem"}}
          />
            <span className="FooterListCopyRight">LinkedIn Corporation © 2021</span>
 </div>
              
       </Col>
);
}
 
export default FooterList;