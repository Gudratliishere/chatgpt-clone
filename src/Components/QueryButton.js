import msgIcon from '../assets/message.svg'
import './css/queryButton.css'

const QueryButton = ({ text, handleSend }) => {
    return (
        <button className='query' value={text}
            onClick={(e) => handleSend(e.target.value)}>
            <img src={msgIcon} alt='Query' />
            {text}
        </button>
    )
}

export default QueryButton
