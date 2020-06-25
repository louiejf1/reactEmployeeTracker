import React from 'react'

const CardComp = props => {
    return (
        <div>
            <span>{props.firstName}</span>
            <span>{props.lastName}</span>
        </div>
    )
}

export default CardComp
