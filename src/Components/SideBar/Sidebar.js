import SidebarFooter from './SidebarFooter'
import SidebarGptPanel from './SidebarGptPanel'
import SidebarOldChats from './SidebarOldChats'
import SiderbarHeader from './SiderbarHeader'
import './css/sidebar.css'

const Sidebar = ({ handleNewChat, oldMessages, handleOldChatClick }) => {
    return (
        <div className='sidebar'>
            <SiderbarHeader handleNewChat={handleNewChat} />
            <SidebarGptPanel handleNewChat={handleNewChat} />
            <SidebarOldChats oldMessages={oldMessages} handleOldChatClick={handleOldChatClick}/>
            <SidebarFooter />
        </div>
    )
}

export default Sidebar
