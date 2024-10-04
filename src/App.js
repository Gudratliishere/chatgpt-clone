import { useState } from 'react';
import './App.css';
import Main from './Components/Main';
import Sidebar from './Components/Sidebar';

function App() {
  const [messages, setMessages] = useState([
    {
      text: "Hi, I'm chat gpt!",
      isBot: true
    }
  ])

  const handleSend = async (message) => {
    setMessages([...messages, {
      text: message,
      isBot: false
    }])

    await timeout(500);

    setMessages([...messages, {
      text: message,
      isBot: false
    }, {
      text: "Hello! Chat GPT is not working now!",
      isBot: true
    }])
  }

  function timeout(delay) {
    return new Promise(res => setTimeout(res, delay));
  }

  return (
    <div className="App">
      <Sidebar handleSend={handleSend} />
      <Main messages={messages} handleSend={handleSend} />
    </div>
  );
}

export default App;
