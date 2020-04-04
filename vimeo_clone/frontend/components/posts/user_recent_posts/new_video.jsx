import React from 'react';
import useHover from '../../../hooks/use_hover';

const NewVideoBox = props => {
    const [hoverRef, isHovered] = useHover();

    const reRoute = () => {
        props.history.push('/manage/upload')
    }

    return (
        <div className="new-video-box-container" ref={hoverRef} >
            {
                isHovered 
                ?
                (
                    <div className="new-video-box" onClick={() => reRoute()}>
                        <img className="new-video-i-blue" src="/new-video-plus.svg" width="30" height="30" />
                        <div className="new-video-box-text">
                                New video
                        </div>
                    </div>
                    
                ) : (
                    <div className="new-video-box">
                        <img className="new-video-i" src="/new-video-plus.svg" width="30" height="30" />
                        <div className="new-video-box-text">
                            New video
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default NewVideoBox;