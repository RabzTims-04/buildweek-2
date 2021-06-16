import {Row, Col, DropdownButton,Dropdown,ButtonGroup} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './../css/FooterList.css'

const FooterList = () => {
    return (
       <Col>
          <ul className="Footerlist mb-1">
             <li>About</li>
             <li>Accessibility</li>
             <li>Help Center</li>
            </ul>
            <ul className="Footerlist my-0">
             <li> Privacy & Terms</li>
             <li>Ad Choices</li>
            </ul>
            <ul className="Footerlist my-0">
             <li> Advertising</li>
             <li>Business Services</li>
            </ul>
            <ul className="Footerlist my-0">
             <li> Get the LinkedIn App</li>
             <li>More</li>
            </ul>
       
     <div className="text-center mt-2">
       
        <img
            src='./assets/img/linkedin_logo.jpg'
            alt='logo' style={{ width: "4.8rem", height: "1rem"}}
          />
            <span className="FooterListCopyRight">LinkedIn Corporation © 2021</span>
 </div>
              
       </Col>
);
}
 
export default FooterList;