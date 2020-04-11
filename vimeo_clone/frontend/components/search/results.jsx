import React from 'react';
import HomeNavbarContainer from '../main_navbar/navbar_container';
import ResultItem from './result_item';

class ResultsPage extends React.Component {
    constructor(props) {
        super(props)

    }


    render() {
        const { location, history, ui } = this.props;
        return (
            <div className="search-results-nav--container">
                <HomeNavbarContainer 
                    history={history}
                    location={location}/>
                <div className="results-container">
                    {
                        ui.search.results.map((post) => {
                            return
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ResultsPage;