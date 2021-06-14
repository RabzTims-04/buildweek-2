//FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import * as Icon from "@fortawesome/free-regular-svg-icons"
import * as SolidIcon from "@fortawesome/free-solid-svg-icons"
import * as BrandIcon from "@fortawesome/free-brands-svg-icons"

import {Container,Row,Col} from 'react-bootstrap'

const RProfileCardOne = () =>{

        return ( 
                <Col className="px-2" style={{backgroundColor:"white",border:"solid 1px lightgrey",borderRadius:"15px"}} >
                <Row style={{fontSize:"1em", color:"rgb(102,102,102)",fontWeight:"600"}}>Edit public profile & URL <FontAwesomeIcon icon={SolidIcon.faHeart} /></Row>
               <hr/>
                <Row style={{fontSize:"1em",color:"rgb(102,102,102)",fontWeight:"600"}}>Add profile in another language</Row>
                </Col>
         );
}
 
export default RProfileCardOne;