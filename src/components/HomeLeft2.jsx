
import { Link } from 'react-router-dom';
import { Card,ListGroup } from "react-bootstrap"
import'../css/HomeLeft.css'





const HomeLeft2 =()=>{

    return(
        <Card className='rounded, mt-4'>
            <ListGroup variant="flush">
                <ListGroup.Item className="link">
                    <Link href='#' className="d-block"id="link">
                    Groups
                    </Link>
                    <Link className="d-flex mt-1">
                    Events
                    <svg className='mr-1' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                    </Link>
                    <Link className="d-block">
                    Followed Hashtags
                    </Link>


                </ListGroup.Item>
                <ListGroup.Item className="discover">Discover more</ListGroup.Item>
                
            </ListGroup>
        </Card>

    )


}
export default HomeLeft2