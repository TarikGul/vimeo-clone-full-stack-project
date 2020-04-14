import React from 'react';
import HomeNavbarContainer from '../main_navbar/navbar_container';
import ResultItem from './result_item';

class ResultsPage extends React.Component {
    constructor(props) {
        super(props)

    }

    // If Url the results are empty we will check the url and re search for the items so that we can push them to the page.
    
    render() {
        const { location, history, ui } = this.props;
        
        if (ui.search.results === undefined) {
            history.push('/home');
            return null
        };
        return (
            <div className="search-results-nav-container">
                <HomeNavbarContainer 
                    history={history}
                    location={location}/>
                <div className="results-container">
                    <div className="inner-results-container">
                        <div className="match-count-container">
                            <div className="match-count">
                                {`${ui.search.results.length} results`}
                            </div>
                        </div>
                        <div className="results-items-all">
                            {
                                ui.search.results.map((post, i) => {
                                    return <ResultItem 
                                                history={history}
                                                key={`result-${i}`}
                                                post={post}/>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ResultsPage;