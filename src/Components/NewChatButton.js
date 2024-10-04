import addBtn from '../assets/add-30.png'
import './css/newChatButton.css'

const NewChatButton = () => {
    return (
        <button className='mid-btn'>
            <img className='add-btn' src={addBtn} alt='New chat' />
            New Chat
        </button>
    )
}

export default NewChatButton
