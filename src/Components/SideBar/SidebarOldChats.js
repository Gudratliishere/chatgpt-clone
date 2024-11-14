import SidebarOldChat from "./SidebarOldChat"
import './css/sidebar-old-chats.css';

const SidebarOldChats = ({ oldMessages, handleOldChatClick }) => {
  return (
    <div className="old-chats">
      <span>Old chats</span>
      {
        oldMessages.map((message, index) => (
          <SidebarOldChat key={index} index={index} 
            message={message} handleOldChatClick={handleOldChatClick} />
        ))
      }
    </div>
  )
}

export default SidebarOldChats
