import { useState } from 'react';
import './App.css';
import Main from './Components/Main/Main';
import Sidebar from './Components/SideBar/Sidebar';

function App() {
  const [messages, setMessages] = useState([
    {
      text: "Hi, I'm chat gpt!",
      isBot: true,
      liked: false,
      disliked: false
    }
  ])

  const handleSend = async (message) => {
    setMessages([...messages, {
      text: message,
      isBot: false,
      liked: false,
      disliked: false
    }])

    await timeout(500);

    setMessages([...messages, {
      text: message,
      isBot: false,
      liked: false,
      disliked: false
    }, {
      text: "Hello! Chat GPT is not working now!",
      isBot: true,
      liked: false,
      disliked: false
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
