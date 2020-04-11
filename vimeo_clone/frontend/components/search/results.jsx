import React from 'react';
import HomeNavbarContainer from '../main_navbar/navbar_container'

class ResultsPage extends React.Component {
    constructor(props) {
        super(props)

    }


    render() {
        const { location, history } = this.props
        return (
            <div className="search-results-container">
                <HomeNavbarContainer 
                    history={history}
                    location={location}/>
            </div>
        )
    }
}

export default ResultsPage;