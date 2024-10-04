import { useState } from 'react'
import sendBtn from '../assets/send.svg'
import './css/chatFooter.css'

const ChatFooter = ({ handleSend }) => {
    const [input, setInput] = useState("")

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            handleSendButton();
        }
    }

    const handleSendButton = () => {
        handleSend(input)
        setInput('')
    }

    return (
        <div className='chat-footer'>
            <div className='input'>
                <input type='text' placeholder='Send a message' value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleEnter} />
                <button className='send' onClick={handleSendButton}>
                    <img src={sendBtn} alt='Send' />
                </button>
            </div>
            <p>Chat GPT may produce incorrect results. Copyright Chat GPT</p>
        </div>
    )
}

export default ChatFooter
