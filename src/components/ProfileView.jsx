import React from 'react';
import { Pencil, User, Copy, Phone } from 'lucide-react';

const ProfileView = () => {
  return (
    <div className="flex h-full w-full">
      {/* Left Panel - Profile Details */}
      <div className="w-[350px] lg:w-[400px] h-full bg-white flex flex-col border-r border-[#d1d7db]">
        <header className="px-4 py-3 border-b border-[#f2f2f2]">
          <h1 className="text-[22px] font-semibold text-[#111b21]">Profile</h1>
        </header>

        <div className="flex-1 overflow-y-auto">
          {/* Avatar */}
          <div className="flex justify-center py-8">
            <div className="relative group cursor-pointer">
              <div className="w-[200px] h-[200px] rounded-full bg-[#54656f] flex items-center justify-center">
                <User className="w-24 h-24 text-[#cfd4d6]" />
              </div>
              <div className="absolute inset-0 rounded-full bg-black/50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity">
                <svg className="w-8 h-8 text-white mb-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 4h3l2-2h6l2 2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2m8 3a5 5 0 0 0-5 5 5 5 0 0 0 5 5 5 5 0 0 0 5-5 5 5 0 0 0-5-5"/>
                </svg>
                <span className="text-white text-xs text-center">Add profile<br/>photo</span>
              </div>
            </div>
          </div>

          {/* Name */}
          <div className="px-6 py-4 border-b border-[#f2f2f2]">
            <p className="text-[13px] text-[#008069] mb-2">Name</p>
            <div className="flex justify-between items-center">
              <p className="text-[17px] text-[#111b21]">John Doe</p>
              <Pencil className="w-5 h-5 text-[#54656f] cursor-pointer" />
            </div>
          </div>

          {/* About */}
          <div className="px-6 py-4 border-b border-[#f2f2f2]">
            <p className="text-[13px] text-[#008069] mb-2">About</p>
            <p className="text-[17px] text-[#54656f]">Hey there! I am using WhatsApp.</p>
          </div>

          {/* Phone */}
          <div className="px-6 py-4">
            <p className="text-[13px] text-[#008069] mb-2">Phone</p>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#54656f]" />
                <p className="text-[17px] text-[#111b21]">+1 (555) 123-4567</p>
              </div>
              <Copy className="w-5 h-5 text-[#54656f] cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Empty State */}
      <div className="flex-1 flex flex-col items-center justify-center bg-[#f0f2f5] text-center">
        <div className="w-20 h-20 rounded-full bg-[#e9edef] flex items-center justify-center mb-6">
          <User className="w-10 h-10 text-[#8696a0]" />
        </div>
        <h2 className="text-[28px] font-light text-[#41525d]">Profile</h2>
      </div>
    </div>
  );
};

export default ProfileView;
