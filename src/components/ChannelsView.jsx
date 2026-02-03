import React from 'react';
import { Plus, Radio, BadgeCheck } from 'lucide-react';

const mockChannels = [
  { id: 1, name: "TechCrunch", avatar: "https://api.dicebear.com/7.x/initials/svg?seed=TC&backgroundColor=00a884", followers: "2.5M", verified: true },
  { id: 2, name: "BBC News", avatar: "https://api.dicebear.com/7.x/initials/svg?seed=BBC&backgroundColor=bb1919", followers: "5.1M", verified: true },
  { id: 3, name: "Sports Daily", avatar: "https://api.dicebear.com/7.x/initials/svg?seed=SD&backgroundColor=007bff", followers: "1.2M", verified: true },
  { id: 4, name: "Crypto Updates", avatar: "https://api.dicebear.com/7.x/initials/svg?seed=CU&backgroundColor=f7931a", followers: "890K", verified: false },
  { id: 5, name: "Gaming World", avatar: "https://api.dicebear.com/7.x/initials/svg?seed=GW&backgroundColor=6441a5", followers: "3.4M", verified: true },
];

const ChannelsView = () => {
  return (
    <div className="flex h-full w-full">
      {/* Left Panel - Channels List */}
      <div className="w-[350px] lg:w-[400px] h-full bg-white flex flex-col border-r border-[#d1d7db]">
        <header className="px-4 py-3 flex items-center justify-between border-b border-[#f2f2f2]">
          <h1 className="text-[22px] font-semibold text-[#111b21]">Channels</h1>
          <Plus className="w-5 h-5 text-[#54656f] cursor-pointer" />
        </header>

        <div className="px-4 py-3 border-b border-[#f2f2f2]">
          <p className="font-medium text-[16px] text-[#111b21]">Stay updated on your favorite topics</p>
          <p className="text-[13px] text-wa-green">Find channels to follow below</p>
        </div>

        <div className="flex-1 overflow-y-auto">
          {mockChannels.map((channel) => (
            <div 
              key={channel.id}
              className="flex items-center px-4 py-3 cursor-pointer hover:bg-[#f5f6f6]"
            >
              <img src={channel.avatar} className="w-12 h-12 rounded-full mr-3" />
              <div className="flex-1">
                <div className="flex items-center gap-1">
                  <p className="font-medium text-[16px] text-[#111b21]">{channel.name}</p>
                  {channel.verified && <BadgeCheck className="w-4 h-4 text-[#4fc3f7]" />}
                </div>
                <p className="text-[13px] text-[#54656f]">{channel.followers} followers</p>
              </div>
              <button className="px-4 py-1 border border-wa-green text-wa-green rounded-full text-[13px] font-medium hover:bg-[#dcf8c6]">
                Follow
              </button>
            </div>
          ))}

          <button className="w-full flex items-center justify-center gap-2 py-4 text-wa-green font-medium border-t border-[#f2f2f2]">
            <span className="text-lg">⊞</span> Discover more
          </button>
          <button className="w-full flex items-center justify-center gap-2 py-4 text-wa-green font-medium border-t border-[#f2f2f2]">
            <Plus className="w-4 h-4" /> Create channel
          </button>
        </div>
      </div>

      {/* Right Panel - Empty State */}
      <div className="flex-1 flex flex-col items-center justify-center bg-[#f0f2f5] text-center">
        <div className="w-20 h-20 rounded-full bg-[#e9edef] flex items-center justify-center mb-6">
          <Radio className="w-10 h-10 text-[#8696a0]" />
        </div>
        <h2 className="text-[28px] font-light text-[#41525d] mb-3">Discover channels</h2>
        <p className="text-[14px] text-[#667781] max-w-[450px] leading-relaxed">
          Entertainment, sports, news, lifestyle, people and more. Follow the channels that interest you
        </p>
      </div>
    </div>
  );
};

export default ChannelsView;
