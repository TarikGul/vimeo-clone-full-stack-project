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
            <div className="image-1-container">
                <div className="image-1-left-column">
                    <div className="image-1-column-header">
                        Your video <br/> starts here.
                    </div>
                    <div className="image-1-column-header">
                        Creat standout social videso for your business <br/> instantly.
                    </div>
                    <div>
                        <button>
                            try vimeo create
                        </button>
                    </div>
                </div>
                <img className='image-1'src="assets/947.png" alt=""/>
            </div>
        </div>
    )
}

export default Splash;

