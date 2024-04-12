import React, { useState } from 'react';

const App = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = (message) => {
    // Add user message to state
    const userMessage = { text: message, sender: 'user' };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    
    // Determine bot response based on user input
    let botResponse = getBotResponse(message);
    
    // Add bot response to state after a delay (simulating processing time)
    setTimeout(() => {
      setMessages(prevMessages => [...prevMessages, { text: botResponse, sender: 'bot' }]);
    }, 1000);
  };

  const getBotResponse = (message) => {
    // Check if the user input is a mathematical expression
    const isMathExpression = /^[\d\s\(\)\+\-\*\/\.]+$/.test(message);

    if (isMathExpression) {
      try {
        // Evaluate the mathematical expression
        const result = eval(message);
        return `The result of ${message} is ${result}.`;
      } catch (error) {
        return 'Sorry, I couldn\'t evaluate that expression.';
      }
    } else {
      // Define static responses based on user input
      switch (message.toLowerCase()) {
        case 'hello':
        case 'hi':
          return 'sollu row';
          case 'ena bro':
          return 'ethana type pannu bro';
        case 'how are you?':
          return 'Ena bro Soldra ne';
        case 'what is your name':
          return 'ni-hey sollu bro';
        default:
          return 'Bro na onnu solla va bro';
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userInput = event.target.elements.userInput.value.trim();
    if (userInput !== '') {
      sendMessage(userInput);
      event.target.elements.userInput.value = '';
    }
  };


  const inputContainerStyle = {
    position: 'relative',
    background: 'rgba(255, 255, 255, 0.664)',
    padding: '10px 15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '5px',
    borderRadius: '22px',
    maxWidth: '300px',
    transition: 'transform 400ms',
    transformStyle: 'preserve-3d',
    transform: 'rotateX(15deg) rotateY(-20deg)',
  };
  
  const shadowInputStyle = {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: '0',
    bottom: '0',
    zIndex: '-1',
    filter: 'blur(30px)',
    borderRadius: '20px',
    backgroundColor: '#999cff',
    backgroundImage: 'radial-gradient(at 85% 51%, hsla(60,60%,61%,1) 0px, transparent 50%), radial-gradient(at 74% 68%, hsla(235,69%,77%,1) 0px, transparent 50%), radial-gradient(at 64% 79%, hsla(284,72%,73%,1) 0px, transparent 50%), radial-gradient(at 75% 16%, hsla(283,60%,72%,1) 0px, transparent 50%), radial-gradient(at 90% 65%, hsla(153,70%,64%,1) 0px, transparent 50%), radial-gradient(at 91% 83%, hsla(283,74%,69%,1) 0px, transparent 50%), radial-gradient(at 72% 91%, hsla(213,75%,75%,1) 0px, transparent 50%)'
  };
  
  const inputButtonShadowStyle = {
    cursor: 'pointer',
    border: 'none',
    background: 'none',
    transition: 'transform 400ms, background 400ms',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '12px',
    padding: '5px'
  };
  
  const inputSearchStyle = {
    width: '100%',
    borderRadius: '20px',
    outline: 'none',
    border: 'none',
    padding: '8px',
    position: 'relative'
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '65vw', height: '90vh', margin: '0 auto', backgroundColor: '#011522', borderRadius: '8px', zIndex: '1' }} className="card">
        <div style={{ display: 'flex', alignItems: 'center', padding: '9px' }} className="tools">
          <div style={{ padding: '0 4px' }} className="circle">
            <span style={{ display: 'inline-block', width: '10px', height: '10px', padding: '1px', borderRadius: '50%', backgroundColor: '#ff605c' }} className="red box"></span>
          </div>
          <div style={{ padding: '0 4px' }} className="circle">
            <span style={{ display: 'inline-block', width: '10px', height: '10px', padding: '1px', borderRadius: '50%', backgroundColor: '#ffbd44' }} className="yellow box"></span>
          </div>
          <div style={{ padding: '0 4px' }} className="circle">
            <span style={{ display: 'inline-block', width: '10px', height: '10px', padding: '1px', borderRadius: '50%', backgroundColor: '#00ca4e' }} className="green box"></span>
          </div>
        </div>
        <div className="card__content">
          <div>
            {messages.map((msg, index) => (
              <div key={index}>
                {msg.sender === 'user' ? (
                  <p style={{ color: 'yellow' }}>User: {msg.text}</p>
                ) : msg.text === 'Bro na onnu solla va bro' ? (
                  <p style={{ color: 'red' }}>Bot: {msg.text}</p>
                ) : (
                  <p style={{ color: 'lime' }}> Bot: {msg.text}</p>
                )}
              </div>
            ))}
          </div>
          <form onSubmit={handleSubmit}  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={inputContainerStyle}>
              <div style={shadowInputStyle}></div>
              <button style={inputButtonShadowStyle}>
                <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" height="20px" width="20px">
                  <path d="M4 9a5 5 0 1110 0A5 5 0 014 9zm5-7a7 7 0 104.2 12.6.999.999 0 00.093.107l3 3a1 1 0 001.414-1.414l-3-3a.999.999 0 00-.107-.093A7 7 0 009 2z" fillRule="evenodd" fill="#17202A"></path>
                </svg>
              </button>
              <input  type="text" name="userInput" style={inputSearchStyle} placeholder="What do you want to search?" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
