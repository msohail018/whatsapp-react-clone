import React from 'react';
import { Search, Bell, X, User, ShieldCheck, Lock, MessageSquare, BellRing, Keyboard, Settings } from 'lucide-react';

const SettingsView = () => {
  const settingsItems = [
    { icon: ShieldCheck, title: "Account", description: "Security notifications, account info" },
    { icon: Lock, title: "Privacy", description: "Blocked contacts, disappearing messages" },
    { icon: MessageSquare, title: "Chats", description: "Theme, wallpaper, chat settings" },
    { icon: BellRing, title: "Notifications", description: "Messages, groups, sounds" },
    { icon: Keyboard, title: "Keyboard shortcuts", description: "Quick actions" },
  ];

  return (
    <div className="flex h-full w-full">
      {/* Left Panel - Settings List */}
      <div className="w-[350px] lg:w-[400px] h-full bg-white flex flex-col border-r border-[#d1d7db]">
        <header className="px-4 py-3 border-b border-[#f2f2f2]">
          <h1 className="text-[22px] font-semibold text-[#111b21]">Settings</h1>
        </header>

        {/* Search */}
        <div className="px-4 py-3 border-b border-[#f2f2f2]">
          <div className="bg-[#f0f2f7] rounded-lg h-[35px] flex items-center px-3 gap-4 border border-[#d1d7db]">
            <Search className="w-4 h-4 text-[#54656f]" />
            <input 
              type="text" 
              placeholder="Search settings" 
              className="bg-transparent border-none outline-none text-sm w-full placeholder-[#54656f]"
            />
          </div>
        </div>

        {/* Notification Banner */}
        <div className="px-4 py-3 bg-white border-b border-[#f2f2f2]">
          <div className="flex items-start gap-3">
            <Bell className="w-5 h-5 text-[#54656f] mt-1" />
            <div className="flex-1">
              <p className="font-medium text-[15px] text-[#111b21]">Choose your notifications</p>
              <p className="text-[13px] text-[#54656f]">
                Get notifications for messages, groups or your status. <span className="text-wa-green cursor-pointer">Choose now</span>
              </p>
            </div>
            <X className="w-4 h-4 text-[#54656f] cursor-pointer" />
          </div>
        </div>

        {/* Profile Section */}
        <div className="flex items-center px-4 py-3 cursor-pointer hover:bg-[#f5f6f6] border-b border-[#f2f2f2]">
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-3">
            <User className="w-6 h-6 text-gray-500" />
          </div>
          <div>
            <p className="font-medium text-[16px] text-[#111b21]">John Doe</p>
            <p className="text-[13px] text-[#54656f]">Hey there! I am using WhatsApp.</p>
          </div>
        </div>

        {/* Settings Items */}
        <div className="flex-1 overflow-y-auto">
          {settingsItems.map((item, index) => (
            <div 
              key={index}
              className="flex items-center px-4 py-3 cursor-pointer hover:bg-[#f5f6f6]"
            >
              <item.icon className="w-5 h-5 text-[#54656f] mr-4" />
              <div>
                <p className="font-medium text-[15px] text-[#111b21]">{item.title}</p>
                <p className="text-[13px] text-[#54656f]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel - Empty State */}
      <div className="flex-1 flex flex-col items-center justify-center bg-[#f0f2f5] text-center">
        <div className="w-20 h-20 rounded-full bg-[#e9edef] flex items-center justify-center mb-6">
          <Settings className="w-10 h-10 text-[#8696a0]" />
        </div>
        <h2 className="text-[28px] font-light text-[#41525d]">Settings</h2>
      </div>
    </div>
  );
};

export default SettingsView;
