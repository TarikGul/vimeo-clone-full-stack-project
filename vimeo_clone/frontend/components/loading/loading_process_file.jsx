import { Spinner } from 'react-bootstrap';

const loadingProcessFile = props => {

    return (
        <div className="loading-container">
            <Spinner />
        </div>
    )
}

export default loadingProcessFile;