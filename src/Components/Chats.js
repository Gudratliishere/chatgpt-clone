import userIcon from '../assets/user-icon.png'
import gptImgLogo from '../assets/chatgptLogo.svg'
import { useEffect, useRef } from 'react'
import './css/chats.css'

const Chats = ({ messages }) => {
    const messageEnd = useRef(null)
    useEffect(() => {
        messageEnd.current.scrollIntoView()
    }, [messages])

    return (
        <div className='chats'>
            {
                messages.map((msg, index) => (
                    <div key={index} className={msg.isBot ? 'chat bot' : 'chat'}>
                        <img src={msg.isBot ? gptImgLogo : userIcon}
                            alt={msg.isBot ? 'GPT' : 'User'} className='chat-image' />
                        <p className='text'>{msg.text}</p>
                    </div>
                ))
            }
            <div ref={messageEnd} />
        </div>
    )
}

export default Chats
