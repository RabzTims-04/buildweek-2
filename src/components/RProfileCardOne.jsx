//FontAwesome
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
// import * as Icon from "@fortawesome/free-regular-svg-icons"
// import * as SolidIcon from "@fortawesome/free-solid-svg-icons"
// import * as BrandIcon from "@fortawesome/free-brands-svg-icons"
import {Container,Row,Col} from 'react-bootstrap'
{/* <FontAwesomeIcon icon={SolidIcon.faHeart} /> */}
const RProfileCardOne = () =>{
        return ( 
                <div className="p-3" style={{backgroundColor:"white",border:"solid 1px lightgrey",borderRadius:"10px"}} >
                <a href="#" style={{fontSize:"1em", color:"rgb(102,102,102)",fontWeight:"600"}}>Edit public profile & URL <svg xmlns="http://www.w3.org/2000/svg" className="d-inline-block " viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                    <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zm0 11.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zM8.82 9H7v-.95l.93-.46C8.64 7.24 9 6.89 9 6.6S8.57 6 8 6a6.49 6.49 0 00-3 .91V4.84A6.35 6.35 0 018.1 4c2 0 2.9 1 2.9 2.4 0 .9-.5 1.83-2.18 2.6z"></path>
                    </svg>
                </a>
               <hr/>
                <a href="#" style={{fontSize:"1em",color:"rgb(102,102,102)",fontWeight:"600"}}>Add profile in another language <svg xmlns="http://www.w3.org/2000/svg" className="d-inline-block " viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                    <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zm0 11.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zM8.82 9H7v-.95l.93-.46C8.64 7.24 9 6.89 9 6.6S8.57 6 8 6a6.49 6.49 0 00-3 .91V4.84A6.35 6.35 0 018.1 4c2 0 2.9 1 2.9 2.4 0 .9-.5 1.83-2.18 2.6z"></path>
                    </svg>
                      
                </a>
                </div>
         );
}
 
export default RProfileCardOne;
