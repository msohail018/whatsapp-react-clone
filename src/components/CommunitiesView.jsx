import React from 'react';
import { Plus, Users2, Lock } from 'lucide-react';

const CommunitiesView = () => {
  return (
    <div className="flex h-full w-full">
      {/* Left Panel */}
      <div className="w-[350px] lg:w-[400px] h-full bg-white flex flex-col border-r border-[#d1d7db]">
        <header className="px-4 py-3 flex items-center justify-between border-b border-[#f2f2f2]">
          <h1 className="text-[22px] font-semibold text-[#111b21]">Communities</h1>
          <Plus className="w-5 h-5 text-[#54656f] cursor-pointer" />
        </header>

        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
          {/* Illustration */}
          <div className="w-[180px] h-[140px] mb-6 flex items-center justify-center">
            <svg viewBox="0 0 180 140" fill="none" className="w-full h-full">
              <rect x="20" y="20" width="140" height="100" rx="8" fill="#e8f5e9" stroke="#c8e6c9" strokeWidth="2"/>
              <path d="M60 50 L80 70 L120 30" stroke="#00a884" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="50" cy="90" r="15" fill="#a5d6a7"/>
              <circle cx="90" cy="90" r="15" fill="#81c784"/>
              <circle cx="130" cy="90" r="15" fill="#66bb6a"/>
            </svg>
          </div>

          <h2 className="text-[20px] font-semibold text-[#111b21] mb-3">Stay connected with a community</h2>
          <p className="text-[14px] text-[#54656f] leading-relaxed mb-4">
            Communities bring members together in topic-based groups, and make it easy to get admin announcements. Any community you're added to will appear here.
          </p>
          <p className="text-[14px] text-wa-green cursor-pointer mb-8">See example communities</p>

          <button className="bg-wa-green text-white font-medium px-6 py-2 rounded-full hover:bg-[#008069] transition-colors">
            Start your community
          </button>
        </div>
      </div>

      {/* Right Panel - Empty State */}
      <div className="flex-1 flex flex-col items-center justify-center bg-[#f0f2f5] text-center">
        <div className="w-20 h-20 rounded-full bg-[#e9edef] flex items-center justify-center mb-6">
          <Users2 className="w-10 h-10 text-[#8696a0]" />
        </div>
        <h2 className="text-[28px] font-light text-[#41525d] mb-3">Create communities</h2>
        <p className="text-[14px] text-[#667781] max-w-[450px] leading-relaxed">
          Bring members together in topic-based groups and easily send them admin announcements.
        </p>

        <div className="absolute bottom-8 flex items-center gap-2 text-[13px] text-[#8696a0]">
          <Lock className="w-3 h-3" />
          <span>Your personal messages in communities are end-to-end encrypted</span>
        </div>
      </div>
    </div>
  );
};

export default CommunitiesView;
