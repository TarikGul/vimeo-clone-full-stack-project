import React from 'react'

const Splash = () => {
    return (    
        <div className="splash-container">
            <div className="splash-heading-phrase-container">
                <div className="splash-heading-phrase">Make an impact <br/> with video.</div>
                <div className="splash-heading-phrase-bottom">
                    Create high-performing videos, collaborate with your team, <br/>
                    and share anywhere.
                </div>
            </div>
            <div className="demo-user-button-container"><button className="demo-user-button">Demo User</button></div>
            <div className="image-container">
                <div className="image-1-left-column">
                    <div className="image-1-column-header">
                        Your video <br/> starts here.
                    </div>
                    <div className="image-1-column-description">
                        Creat standout social videso for your business <br/> instantly.
                    </div>
                    <div className='image-1-button-div'>
                        <button className='image-1-button'> Try Vimeo Create </button>
                    </div>
                    <div className="image-1-column-description">
                        Upload your latest cut in the highest codec <br/> possible
                    </div>
                    <div className='image-1-button-div'>
                        <button className='image-1-button'> Start uploading </button>
                    </div>
                    <div className="image-1-column-description">
                        Hir a pro to give your video a world-class look.
                    </div>
                    <div className='image-1-button-div'>
                        <button className='image-1-button'> Post a job </button>
                    </div>
                </div>
                <img className='image-1'src="assets/947.png" alt=""/>
            </div>
            <div className="image-2-container">
                <img className='image-2' src="assets/948.jpg" alt="" />
                <div className="image-2-left-column">
                    <div className="image-1-column-header">
                        Publish anywhere, <br /> grow everywhere.
                    </div>
                    <div className="image-1-column-description">
                        publish videos to any channel, customize <br />
                        the player and add powerful marketing tools <br />
                        to bump up engagement.
                    </div>
                    <div className='image-1-button-div'>
                        <button className='image-1-button'> Grow your audience </button>
                    </div>
                    <div className="image-1-column-description">
                        See how your videos are performing with <br />
                        advanced analytics.
                    </div>
                    <div className='image-1-button-div'>
                        <button className='image-1-button'> Start uploading </button>
                    </div>
                </div>
            </div>
            <div className="image-container">
                <div className="image-3-left-column">
                    <div className="image-1-column-header">
                        Simple, creative <br /> collaboration.
                    </div>
                    <div className="image-1-column-description">
                        Stremline feedback with time-coded comments, and <br />
                        assemble your team on your terms.
                    </div>
                    <div className='image-1-button-div'>
                        <button className='image-1-button'> Start collaborating </button>
                    </div>
                    <div className="image-1-column-description">
                        Share securely with comprehensive privacy options.
                    </div>
                    <div className='image-1-button-div'>
                        <button className='image-1-button'> See privacy options </button>
                    </div>
                </div>
                <img className='image-3' src="assets/953.jpg" alt="" />
            </div>
            <div className="image-2-container">
                <img className='image-4' src="assets/950.jpg" alt="" />
                <div className="image-2-left-column">
                    <div className="image-1-column-header">
                        Just add Live.
                    </div>
                    <div className="image-1-column-description">
                        Capture any moment with reliable, professional live <br />
                        streaming.
                    </div>
                    <div className='image-1-button-div'>
                        <button className='image-1-button'> Go live </button>
                    </div>
                    <div className="image-1-column-description">
                        Connect your entire team on one secure, enterprise- <br />
                        level video platform.
                    </div>
                    <div className='image-1-button-div'>
                        <button className='image-1-button'> Start uploading </button>
                    </div>
                </div>
            </div>
            <div className='footer-join-container'>
                <div className='footer-join-community'>
                    Over 150 million creators <br/>
                    and brands love our <br/>
                    community
                </div>
                <button className='come-join'>Come on in</button>
            </div>
        </div>
    )
}

export default Splash;

