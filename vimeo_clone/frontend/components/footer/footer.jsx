import React from 'react'

class Footer extends React.Component {
    constructor(props) {
        super(props)

    }

    handleReroute(field) {
        if (field === 'github') {
            window.location.href = 'https://github.com/TarikGul'
        } else if (field === 'linkedin') {
            window.location.href = 'https://www.linkedin.com/in/tarik-gul-6497b21a4/'
        }
    }

    render() {
        return (
            <div className='footer-container'>
                <div className='footer-top-container'>
                    <div className='footer-left-container'>
                        <ul className='list-container-footer'>
                            <li>
                                <img className="github-footer" 
                                     src="/github-sign.svg"
                                     onClick={() => this.handleReroute('github')} />
                                <a className='github-link atag' href='https://github.com/TarikGul'>Github</a>
                            </li>
                            <li>
                                <img className="linked-in-footer" 
                                     src="/linkedin-logo.svg" 
                                     onClick={() =>this.handleReroute('linkedin')}/>
                                <a className='linkedin-link atag' href='https://www.linkedin.com/in/tarik-gul-6497b21a4/'>Linked In</a>
                            </li>
                        </ul>
                    </div>
                    <div className='footer-right-container'>
                        Thank you, and have a beautiful day!
                    </div>
                </div>
                <div className='footer-bottom-container'>
                    <div className='footer-bottom-inner-container'>
                        <div className='one-love-sf'>
                        Made with love in SF
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer; 