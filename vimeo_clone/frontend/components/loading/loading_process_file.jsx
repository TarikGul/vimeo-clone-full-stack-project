import React, { useState, useEffect } from 'react';

const processSeconds = (counter) => {
    const processes = [
        'Processing...',
        'Processing.  ',
        'Processing.. '
    ];
    let count = counter % 3;

    return processes[count]
}

const LoadingProcessFile = props => {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(counter => counter + 1);
        }, 300);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="loading-container">
            <div className="loader">
    
            </div>
            <div className="processing" id="processing">
                {processSeconds(counter)}
            </div>  
        </div>
    )
}

export default LoadingProcessFile;