import { useState } from 'react';
import './App.css';
import Main from './Components/Main/Main';
import Sidebar from './Components/SideBar/Sidebar';

function App() {
  const [oldMessages, setOldMessages] = useState([])

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

  const handleNewChat = () => {
    if (messages.length > 0) {
      setOldMessages([messages, ...oldMessages])
      setMessages([])
    }
  }

  const handleOldChatClick = (index) => {
    handleNewChat()
    setMessages(oldMessages[index])
    setOldMessages(om => om.filter(m => m !== index))
  }

  function timeout(delay) {
    return new Promise(res => setTimeout(res, delay));
  }

  return (
    <div className="App">
      <Sidebar handleNewChat={handleNewChat} oldMessages={oldMessages}
        handleOldChatClick={handleOldChatClick} />
      <Main messages={messages} handleSend={handleSend} />
    </div>
  );
}

export default App;
