import { Spinner } from 'react-bootstrap';

const LoadingProcessFile = props => {

    return (
        <div className="loading-container">
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    )
}

export default LoadingProcessFile;