import React from 'react';
import ClientMessage from './ClientMessage'
import ServerResponse from './ServerResponse'
const ChatContainer = (props) => {
    return (
        <div id="chat-container">
            {props.chatHistory.map((message, index) =>{
                if(message.type === 'client'){
                    return <ClientMessage key={index} 
                    clientMessage = {message.message}/>
                }else if(message.type ==='server'){
                    return <ServerResponse key={index} serverResponse = {message.message}></ServerResponse>
                }
                return <div key={index}></div>
            })}
            
        </div>
    )


}
export default ChatContainer;