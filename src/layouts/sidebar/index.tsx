const Sidebar = () => {
  return (
    <aside className="max-w-[20rem] border-r-[0.05rem] border-[#393939]">
      <div className="flex justify-between items-center p-4 px-6 border-b-[0.05rem] border-[#393939]">
        <div className="flex items-center space-x-4">
          <div className="w-5 h-5 bg-[#AE54A2] rounded-full"></div>
          <span className="font-bold">All Notes</span>
        </div>
        <div className="w-10 py-[0.3em] bg-[#AF54A3] rounded-xl text-center text-white font-semibold text-sm">
          12
        </div>
      </div>
      <div className="flex justify-between items-center p-4 px-6 border-b-[0.05rem] border-[#393939]">
        <div className="flex items-center space-x-4">
          <div className="w-5 h-5 bg-[#A35E11] rounded-full"></div>
          <span className="font-bold">Wishlist</span>
        </div>
        <div className="w-10 py-[0.3em] bg-[#A45F12] rounded-xl text-center text-white font-semibold text-sm">
          02
        </div>
      </div>
      <div className="flex justify-between items-center p-4 px-6 border-b-[0.05rem] border-[#393939]">
        <div className="flex items-center space-x-4">
          <div className="w-5 h-5 bg-[#4757A5] rounded-full"></div>
          <span className="font-bold">Assigment</span>
        </div>
        <div className="w-10 py-[0.3em] bg-[#4758A6] rounded-xl text-center text-white font-semibold text-sm">
          03
        </div>
      </div>
      <div className="flex justify-between items-center p-4 px-6 border-b-[0.05rem] border-[#393939]">
        <div className="flex items-center space-x-4">
          <div className="w-5 h-5 bg-[#349B90] rounded-full"></div>
          <span className="font-bold">Projects</span>
        </div>
        <div className="w-10 py-[0.3em] bg-[#349B90] rounded-xl text-center text-white font-semibold text-sm">
          01
        </div>
      </div>
      <div className="flex justify-between items-center p-4 px-6 border-b-[0.05rem] border-[#393939]">
        <div className="flex items-center space-x-4">
          <div className="w-5 h-5 bg-[#B64963] rounded-full"></div>
          <span className="font-bold">Work</span>
        </div>
        <div className="w-10 py-[0.3em] bg-[#B74963] rounded-xl text-center text-white font-semibold text-sm">
          04
        </div>
      </div>
      <div className="flex justify-between items-center p-4 px-6 border-b-[0.05rem] border-[#393939]">
        <div className="flex items-center space-x-4">
          <div className="w-5 h-5 bg-[#B58829] rounded-full"></div>
          <span className="font-bold">Study</span>
        </div>
        <div className="w-10 py-[0.3em] bg-[#B6892A] rounded-xl text-center text-white font-semibold text-sm">
          02
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
