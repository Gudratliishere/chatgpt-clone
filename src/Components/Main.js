import ChatFooter from './ChatFooter';
import Chats from './Chats'
import './css/main.css'

const Main = ({ messages, handleSend }) => {
    return (
        <div className='main'>
            <Chats messages={messages} />
            <ChatFooter handleSend={handleSend} />
        </div>
    )
}

export default Main
