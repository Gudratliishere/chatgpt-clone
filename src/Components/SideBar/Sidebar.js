import SidebarFooter from './SidebarFooter'
import SidebarGptPanel from './SidebarGptPanel'
import SidebarOldChats from './SidebarOldChats'
import SiderbarHeader from './SiderbarHeader'
import './css/sidebar.css'

const Sidebar = ({ handleSend }) => {
    return (
        <div className='sidebar'>
            <SiderbarHeader />
            <SidebarGptPanel />
            <SidebarOldChats />
            <SidebarFooter />
        </div>
    )
}

export default Sidebar
