import './App.css';
import Title from './Components/Title'
import HorizontalRule from './Components/HorizontalRule'
import ChatContainer from './Components/ChatContainer';
import FormContainer from './Components/FormContainer';
import {useEffect, useState, useRef} from 'react';



function App() {
  const [inputValue, setInputValue] = useState([]);
  const [buttonDisabled, setbuttonDisabled] = useState(true);
  const [type, setType] = useState('text');
  const [clientMessage, setClientMessage] = useState('test');
  const [clientChatHistory, setClientChatHistory] = useState([]);
  const [chatHistory, setChatHistory] = useState([{
    type: '',
    message: ''
  }]);
  const init = useRef(false);
  const [options, setOptions] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setClientChatHistory(clientChatHistory => [...clientChatHistory, 
      clientMessage]);
    setChatHistory(chatHistory => [...chatHistory, 
      {type: 'client', message: clientMessage}]);
    setInputValue('');
    event.target.reset();
  }

  useEffect(() => {
    setClientMessage(inputValue.toString());
    if(inputValue.length !== 0){
      setbuttonDisabled(false);
    }else{
      setbuttonDisabled(true);
    }
  }, [inputValue]); //disable submit button when input text is empty

  useEffect(() => {
    // if(init.current){
      if(chatHistory[chatHistory.length - 1].type === 'client'){
        fetch('http://localhost:9000/singlePageSurvey', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            message: clientChatHistory[clientChatHistory.length - 1]
          })
        })
        .then(res =>  res.json())
        .then(data => {
          setOptions([]);
          console.log(data);
          if(data.message){
            setChatHistory(chatHistory => [...chatHistory,
              {type: 'server', message: data.message}]);
          }
          if(data.value){
            setChatHistory(chatHistory => [...chatHistory,
              {type: 'server', message: data.value}]);
          }
          if(data.type){
            setType(data.type);
          }
          if(data.message === 'survey finished'){
            setType('text');
          }
          if(data.type === 'radio' || data.type === 'checkbox'){
            data.options.forEach((option) => {
              setOptions(options => [...options, option]);
            });
          }
      })
    }
  // else{
  //   init.current = true;
  // }
  console.log('chat history', chatHistory);
    }, [clientChatHistory, chatHistory]);

  const handleChange = (event) => {
    if(event.target.type !== 'checkbox'){
      setInputValue(event.target.value);
    }
    else{
      if(event.target.checked){
        setInputValue(inputValue => [...inputValue, event.target.value]);
      }else{
        setInputValue(inputValue.filter(v => v !== event.target.value));
      }
    }
  }

  useEffect(() => {
    fetch('http://localhost:9000/getState')
      .then(res =>  res.json())
      .then(data => {
        if(data.state === 0){
          setType('text');
        }
        else if(data.state === 1){
          setType('text');
        }
        else if(data.state === 2){
          setType('radio');
          setOptions([]);
          setOptions(options => [...options, 'Male']);
          setOptions(options => [...options, 'Female']);
        }else if(data.state === 3){
          setType('checkbox');
          setOptions([]);
          setOptions(options => [...options, 'Reading']);
          setOptions(options => [...options, 'Cooking']);
          setOptions(options => [...options, 'Sleeping']);
        }
  });
  }, []);

  return (
    <div className="divContainer">
      <Title></Title>
      <HorizontalRule></HorizontalRule>
      <ChatContainer
      chatHistory={chatHistory}
      ></ChatContainer>
      <FormContainer 
      type={type}
      options={options} 
      value={inputValue} 
      onChange={handleChange}
      disabled={buttonDisabled}
      onSubmit={handleSubmit}
      >

      </FormContainer>
    </div>
  );
}

export default App;
