import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageSquare, CircleDashed, Users2, Radio, 
  Settings, User, Plus, MoreVertical, Search,
  Scan, UserPlus, Star, CheckSquare, MailCheck, Lock, LogOut
} from 'lucide-react';
import { mockContacts } from '../mockData';

const Sidebar = ({ onSelectChat, activeChatId, activeView, onViewChange }) => {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  const filters = ['All', 'Unread', 'Favorites', 'Groups'];

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Filter contacts based on active filter and search
  const getFilteredContacts = () => {
    let filtered = mockContacts;

    if (search) {
      filtered = filtered.filter(c => 
        c.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    switch (activeFilter) {
      case 'Unread':
        filtered = filtered.filter(c => c.unread > 0);
        break;
      case 'Favorites':
        filtered = filtered.filter(c => c.isFavorite);
        break;
      case 'Groups':
        filtered = filtered.filter(c => c.isGroup);
        break;
      default:
        break;
    }

    return filtered;
  };

  const filteredContacts = getFilteredContacts();

  const menuItems = [
    { icon: UserPlus, label: 'New group' },
    { icon: Star, label: 'Starred messages' },
    { icon: CheckSquare, label: 'Select chats' },
    { icon: MailCheck, label: 'Mark all as read' },
    { icon: Lock, label: 'App lock' },
    { icon: LogOut, label: 'Log out' },
  ];

  return (
    <div className="flex h-full select-none">
      {/* Navigation Sidebar (Vertical Bar) */}
      <nav className="w-[60px] h-full bg-[#f0f2f5] border-r border-[#d1d7db] flex flex-col items-center py-4 justify-between">
        <div className="flex flex-col gap-5 items-center">
          <button 
            onClick={() => onViewChange('chats')}
            className={`relative p-2 rounded-xl transition-colors ${activeView === 'chats' ? 'bg-[#d9dbdf]' : 'hover:bg-[#e9edef]'}`}
          >
            <MessageSquare className="w-6 h-6 text-[#54656f]" />
            <div className="absolute -top-1 -right-1 w-5 h-5 bg-wa-green rounded-full border-2 border-[#f0f2f5] flex items-center justify-center text-[10px] text-white font-bold">5</div>
          </button>
          
          <button 
            onClick={() => onViewChange('status')}
            className={`p-2 rounded-xl transition-colors ${activeView === 'status' ? 'bg-[#d9dbdf]' : 'hover:bg-[#e9edef]'}`}
          >
            <CircleDashed className="w-6 h-6 text-[#54656f]" />
          </button>
          
          <button 
            onClick={() => onViewChange('channels')}
            className={`p-2 rounded-xl transition-colors ${activeView === 'channels' ? 'bg-[#d9dbdf]' : 'hover:bg-[#e9edef]'}`}
          >
            <Radio className="w-6 h-6 text-[#54656f]" />
          </button>
          
          <button 
            onClick={() => onViewChange('communities')}
            className={`p-2 rounded-xl transition-colors ${activeView === 'communities' ? 'bg-[#d9dbdf]' : 'hover:bg-[#e9edef]'}`}
          >
            <Users2 className="w-6 h-6 text-[#54656f]" />
          </button>
          
          <button className="p-2 rounded-xl hover:bg-[#e9edef]">
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#00f2fe] to-[#4facfe]"></div>
          </button>
        </div>
        
        <div className="flex flex-col gap-5 items-center">
          <button className="p-2 rounded-xl hover:bg-[#e9edef]">
            <Scan className="w-6 h-6 text-[#54656f]" />
          </button>
          
          <button 
            onClick={() => onViewChange('settings')}
            className={`p-2 rounded-xl transition-colors ${activeView === 'settings' ? 'bg-[#d9dbdf]' : 'hover:bg-[#e9edef]'}`}
          >
            <Settings className="w-6 h-6 text-[#54656f]" />
          </button>
          
          <button 
            onClick={() => onViewChange('profile')}
            className={`w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer overflow-hidden ${activeView === 'profile' ? 'ring-2 ring-wa-green' : ''}`}
          >
             <User className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      </nav>

      {/* Chat List Pane */}
      {activeView === 'chats' && (
        <div className="w-[350px] lg:w-[400px] h-full bg-white flex flex-col border-r border-[#d1d7db]">
          <header className="px-4 py-3 flex items-center justify-between">
            <h1 className="text-[22px] font-bold text-wa-green">WhatsApp</h1>
            <div className="flex gap-4 text-[#54656f]">
              <Plus className="w-5 h-5 cursor-pointer hover:text-[#111b21]" />
              
              {/* Three Dots Menu */}
              <div className="relative" ref={menuRef}>
                <MoreVertical 
                  className="w-5 h-5 cursor-pointer hover:text-[#111b21]" 
                  onClick={() => setShowMenu(!showMenu)}
                />
                
                {showMenu && (
                  <div className="absolute right-0 top-8 bg-white rounded-md shadow-lg border border-[#e9edef] py-2 z-50 min-w-[200px]">
                    {menuItems.map((item, index) => (
                      <button
                        key={index}
                        className="w-full flex items-center gap-4 px-4 py-2 hover:bg-[#f5f6f6] text-[#3b4a54] text-[14px]"
                        onClick={() => setShowMenu(false)}
                      >
                        <item.icon className="w-5 h-5" />
                        <span>{item.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </header>

          <div className="px-4 py-2">
            <div className="bg-[#f0f2f7] rounded-lg h-[35px] flex items-center px-3 gap-4">
              <Search className="w-4 h-4 text-[#54656f]" />
              <input 
                type="text" 
                placeholder="Ask Meta AI or Search" 
                className="bg-transparent border-none outline-none text-sm w-full placeholder-[#54656f]"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="flex gap-2 px-4 py-2">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3 py-[6px] rounded-full text-[13px] font-medium transition-colors
                  ${activeFilter === filter 
                    ? 'bg-[#d9fdd3] text-[#008069]' 
                    : 'bg-[#f0f2f5] text-[#54656f] hover:bg-[#e9edef]'
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="flex-1 overflow-y-auto">
            {filteredContacts.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center px-8">
                <p className="text-[#667781] text-[14px]">No chats found</p>
                <p className="text-[#8696a0] text-[12px] mt-1">
                  {activeFilter === 'Unread' && 'You have no unread messages'}
                  {activeFilter === 'Favorites' && 'No favorite chats yet'}
                  {activeFilter === 'Groups' && 'No group chats yet'}
                </p>
              </div>
            ) : (
              filteredContacts.map((contact) => (
                <div 
                  key={contact.id}
                  onClick={() => onSelectChat(contact)}
                  className={`flex items-center px-4 py-3 cursor-pointer hover:bg-[#f5f6f6] transition-colors ${
                    activeChatId === contact.id ? 'bg-[#f0f2f5]' : ''
                  }`}
                >
                  <div className="relative">
                    <img src={contact.avatar} className="w-12 h-12 rounded-full mr-3" />
                    {contact.online && <div className="absolute bottom-0 right-3 w-3 h-3 bg-wa-green border-2 border-white rounded-full"></div>}
                  </div>
                  <div className="flex-1 min-w-0 border-b border-[#f2f2f2] pb-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-[16px] text-gray-900 truncate">{contact.name}</span>
                      <span className={`text-[12px] ${contact.unread > 0 ? 'text-wa-green font-medium' : 'text-gray-500'}`}>
                        {contact.time}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-[14px] text-gray-500 truncate pr-2">
                        {contact.lastMessage}
                      </p>
                      {contact.unread > 0 && (
                        <span className="bg-wa-green text-white text-[11px] font-bold rounded-full min-w-[20px] h-[20px] flex items-center justify-center px-1">
                          {contact.unread}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
