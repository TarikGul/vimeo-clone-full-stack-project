import React from 'react'

const Footer = props => {
    return (
        <div className='footer-container'>
            <div className='footer-top-container'>
                <div className='footer-left-container'>
                    <ul className='list-container-footer'>
                        <li>
                            <a className='github-link atag' href='https://github.com/TarikGul'>Github</a>
                        </li>
                        <li>
                            <a className='dreams-tag atag' href='https://www.youtube.com/watch?v=8WsHwXs_aq4'>Dreams</a>
                        </li>
                    </ul>
                </div>
                <div className='footer-right-container'>
                    May the force be with you
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

export default Footer; 