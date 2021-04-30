import React from 'react'


const ClientMessage = (props) => {
    return (
        <div className="client-message">
            {props.clientMessage}
        </div>
    )
}

export default ClientMessage;