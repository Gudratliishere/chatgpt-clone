import Brand from './Brand'
import NewChatButton from './NewChatButton'
import UpperSideBottom from './UpperSideBottom'
import './css/upperSide.css'

const UpperSide = ({ handleSend }) => {

    return (
        <div className='upper-side'>
            <Brand />
            <NewChatButton />
            <UpperSideBottom handleSend={handleSend} />
        </div>
    )
}

export default UpperSide
