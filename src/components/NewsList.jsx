import {Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './../css/List.css'

const NewsList = () => {
    return ( 
        <div className="pl-3 pr-4 py-3 mb-2" style={{backgroundColor:"white",border:"solid 1px lightgrey",borderRadius:"10px"}} > 
            <Row>  
                <Col xs={10}>
                    <p className="mb-2" style={{fontWeight:"600"}}>LinkedIn News</p>
                </Col>
                <Col xs={2}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                        <path d="M12 2H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zm-3 8v2H7.5A1.5 1.5 0 016 10.5a1.56 1.56 0 01.1-.5l1.08-3h2.13l-1.09 3zm0-3.75A1.25 1.25 0 1110.25 5 1.25 1.25 0 019 6.25z"></path>
                    </svg>
                </Col> 
                <Col>

                <ul className="list">
                    <li className="list-item"><Link>The revolution will not be televised </Link><br>
                        </br>
                        <span className="details"> 10h ago • 200 readers</span>
                    </li>
                    <li className="list-item"><Link>The revolution will not be televised </Link><br>
                        </br>
                        <span className="details"> 10h ago • 200 readers</span>
                    </li>
                    <li className="list-item"><Link>The revolution will not be televised </Link> <br>
                        </br>
                        <span className="details">10h ago • 200 readers</span>
                    </li>
                    <li className="list-item"><Link>The revolution will not be televised </Link><br>
                        </br>
                        <span className="details"> 10h ago • 200 readers</span>
                    </li>
                    <li className="list-item"><Link>The revolution will not be televised </Link><br>
                        </br>
                        <span className="details"> 10h ago • 200 readers</span>
                    </li>
                </ul>
                </Col>
            </Row>
        </div> );
}
 
export default NewsList;