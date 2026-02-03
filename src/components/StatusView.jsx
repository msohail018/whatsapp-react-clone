import React from 'react';
import { Plus, MoreVertical, Lock, CircleDashed } from 'lucide-react';

const mockStatuses = [
  { id: 1, name: "Jake Wilson", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jake", time: "Today at 10:42 AM" },
  { id: 2, name: "Emma Thompson", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma", time: "Today at 9:15 AM" },
  { id: 3, name: "Mike Chen", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike", time: "Yesterday" },
];

const StatusView = () => {
  return (
    <div className="flex h-full w-full">
      {/* Left Panel - Status List */}
      <div className="w-[350px] lg:w-[400px] h-full bg-white flex flex-col border-r border-[#d1d7db]">
        <header className="px-4 py-3 flex items-center justify-between border-b border-[#f2f2f2]">
          <h1 className="text-[22px] font-semibold text-[#111b21]">Status</h1>
          <div className="flex gap-5 text-[#54656f]">
            <Plus className="w-5 h-5 cursor-pointer" />
            <MoreVertical className="w-5 h-5 cursor-pointer" />
          </div>
        </header>

        <div className="flex-1 overflow-y-auto">
          {/* My Status */}
          <div className="flex items-center px-4 py-3 cursor-pointer hover:bg-[#f5f6f6] border-b border-[#f2f2f2]">
            <div className="relative mr-3">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-wa-green rounded-full flex items-center justify-center border-2 border-white">
                <Plus className="w-3 h-3 text-white" />
              </div>
            </div>
            <div>
              <p className="font-medium text-[16px] text-[#111b21]">My status</p>
              <p className="text-[13px] text-wa-green">Click to add status update</p>
            </div>
          </div>

          {/* Recent Section */}
          <div className="px-4 py-3">
            <p className="text-[13px] text-[#54656f] font-medium">Recent</p>
          </div>

          {/* Status List */}
          {mockStatuses.map((status) => (
            <div 
              key={status.id}
              className="flex items-center px-4 py-3 cursor-pointer hover:bg-[#f5f6f6]"
            >
              <div className="relative mr-3">
                <div className="w-12 h-12 rounded-full p-[2px] bg-gradient-to-tr from-wa-green to-wa-green">
                  <img src={status.avatar} className="w-full h-full rounded-full border-2 border-white" />
                </div>
              </div>
              <div>
                <p className="font-medium text-[16px] text-[#111b21]">{status.name}</p>
                <p className="text-[13px] text-[#54656f]">{status.time}</p>
              </div>
            </div>
          ))}

          {/* Privacy notice */}
          <div className="flex items-center justify-center gap-2 px-4 py-6 text-[13px] text-[#54656f]">
            <Lock className="w-3 h-3" />
            <span>Your status updates are <span className="text-[#027eb5] cursor-pointer">end-to-end encrypted</span></span>
          </div>
        </div>
      </div>

      {/* Right Panel - Empty State */}
      <div className="flex-1 flex flex-col items-center justify-center bg-[#f0f2f5] text-center">
        <div className="w-20 h-20 rounded-full bg-[#e9edef] flex items-center justify-center mb-6">
          <CircleDashed className="w-10 h-10 text-[#8696a0]" />
        </div>
        <h2 className="text-[28px] font-light text-[#41525d] mb-3">Share status updates</h2>
        <p className="text-[14px] text-[#667781] max-w-[400px] leading-relaxed">
          Share photos, videos and text that disappear after 24 hours.
        </p>

        <div className="absolute bottom-8 flex items-center gap-2 text-[13px] text-[#8696a0]">
          <Lock className="w-3 h-3" />
          <span>Your status updates are end-to-end encrypted</span>
        </div>
      </div>
    </div>
  );
};

export default StatusView;
