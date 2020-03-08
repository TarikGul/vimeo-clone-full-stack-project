import React from 'react'

const Arrow = props => {
    return (
        <button
            className={`slide-arrow ${props.direction}`}
            onClick={props.clickFunction}>
            { props.glyph }
        </button>
    )
}

export default Arrow;