import LowerSide from './LowerSide'
import SidebarFooter from './SidebarFooter'
import SidebarGptPanel from './SidebarGptPanel'
import SiderbarHeader from './SiderbarHeader'
import UpperSide from './UpperSide'
import './css/sidebar.css'

const Sidebar = ({ handleSend }) => {
    return (
        <div className='sidebar'>
            <SiderbarHeader />
            <SidebarGptPanel />
            <UpperSide handleSend={handleSend} />
            <LowerSide />
            <SidebarFooter />
        </div>
    )
}

export default Sidebar
