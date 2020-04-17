import React from 'react';

class AvailableStorage extends React.Component{
    constructor(props) {

        super(props)
    }

    // componenDidUpdate() {
    //     const { entities, sessionId } = this.props;
    //     if (entities.users[sessionId].user_posts === undefined) {
    //         this.fetchUser(sessionId)
    //     };
    //     console.log("the dolphin has landed")
    // };

    totalBytes(posts) {
        let totalMegabytes = 0;
        const maxYearlyStorage = 500;
        const postsValues = Object.values(posts);

        for (let i = 0; i < postsValues.length; i++) {
            totalMegabytes = totalMegabytes + postsValues[i].bytes
            console.log("post bytes", postsValues[i].bytes)
            console.log('accumluated bytes', totalMegabytes)
        }

        let percentage = Math.floor((totalMegabytes / maxYearlyStorage) * 100)
        return { 
            totalMegabytes,
            percentage
        }
    }

    render() {
        const { entities, sessionId} = this.props
        if (entities.users[sessionId].user_posts === undefined) {
            return null
        }

        const userTotalBytes = this.totalBytes(entities.users[sessionId].user_posts)
        let textBytes;

        if(userTotalBytes.totalMegabytes !== 0) {
            textBytes = `${userTotalBytes.totalMegabytes}MB`
        } else {
            textBytes = '0'
        }
        
        return (
            <div className="available-storage-container">
                <div className="available-storage-container-inner">
                    <div className="progress">
                        <div className="progress-done" style={{
                            opacity: 1,
                            width: `${userTotalBytes.percentage}%`
                        }}>
                            {}
                        </div>
                    </div>
                    <div className="yearly-limit">
                        <div className="yearly-total">
                            Yearly
                        </div>
                        <div className="total-limit-spaced">
                            {`${textBytes} of 500MB`}
                        </div>
                    </div>
                    <div className="total-limit">
                        <div className="yearly-total">
                            Total limit
                        </div>
                        <div className="total-limit-spaced">
                            {`${textBytes} of 1GB`}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AvailableStorage;
