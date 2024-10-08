import ChatFooter from './ChatFooter';
import Chats from './Chats'
import MainHeader from './MainHeader';
import './css/main.css'

const Main = ({ messages, handleSend }) => {
    return (
        <div className='main'>
            <MainHeader />
            <Chats messages={messages} />
            <ChatFooter handleSend={handleSend} />
        </div>
    )
}

export default Main
