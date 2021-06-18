import { Component } from 'react';
import { Spinner } from 'react-bootstrap'

class Loader extends Component {

    render() {

        return (
            
            <div>
                 <Spinner animation="grow" variant="primary" />
            </div>
        );
    }
}

export default Loader