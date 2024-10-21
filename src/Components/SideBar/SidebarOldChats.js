import SidebarOldChat from "./SidebarOldChat"
import './css/sidebar-old-chats.css';

const SidebarOldChats = () => {
  return (
    <div className="old-chats">
      <span>Today</span>
      <SidebarOldChat />
      <SidebarOldChat />
      <SidebarOldChat />
    </div>
  )
}

export default SidebarOldChats
