import LowerSide from './LowerSide'
import UpperSide from './UpperSide'
import './css/sidebar.css'

const Sidebar = ({ handleSend }) => {
    return (
        <div className='sidebar'>
            <UpperSide handleSend={handleSend} />
            <LowerSide />
        </div>
    )
}

export default Sidebar
