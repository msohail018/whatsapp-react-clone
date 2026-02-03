import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import ChatWindow from './components/ChatWindow';
import StatusView from './components/StatusView';
import ChannelsView from './components/ChannelsView';
import CommunitiesView from './components/CommunitiesView';
import SettingsView from './components/SettingsView';
import ProfileView from './components/ProfileView';
import { mockContacts } from './mockData';

function App() {
  const [contacts, setContacts] = useState(mockContacts);
  const [activeChatId, setActiveChatId] = useState(null);
  const [activeView, setActiveView] = useState('chats'); // chats, status, communities, channels, settings, profile

  const activeChat = contacts.find(c => c.id === activeChatId);

  const handleSelectChat = (contact) => {
    setActiveChatId(contact.id);
    setContacts(prev => prev.map(c => 
      c.id === contact.id ? { ...c, unread: 0 } : c
    ));
  };

  const handleSendMessage = (text) => {
    if (!activeChatId) return;

    const newMessage = {
      id: Date.now(),
      text,
      sender: 'me',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setContacts(prev => prev.map(c => {
      if (c.id === activeChatId) {
        return {
          ...c,
          lastMessage: text,
          time: newMessage.time,
          messages: [...c.messages, newMessage]
        };
      }
      return c;
    }));
  };

  const renderMainContent = () => {
    switch(activeView) {
      case 'status':
        return <StatusView />;
      case 'channels':
        return <ChannelsView />;
      case 'communities':
        return <CommunitiesView />;
      case 'settings':
        return <SettingsView />;
      case 'profile':
        return <ProfileView />;
      default:
        return (
          <ChatWindow 
            activeChat={activeChat} 
            onSendMessage={handleSendMessage}
          />
        );
    }
  };

  return (
    <div className="h-screen w-screen bg-[#f0f2f5] flex items-center justify-center overflow-hidden font-sans">
      <div className="w-full h-full bg-white flex relative overflow-hidden">
         <Sidebar 
          onSelectChat={handleSelectChat} 
          activeChatId={activeChatId} 
          contacts={contacts}
          activeView={activeView}
          onViewChange={setActiveView}
         />
         {renderMainContent()}
      </div>
    </div>
  );
}

export default App;
