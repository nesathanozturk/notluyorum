import { BiSun } from "react-icons/bi";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="contaier mx-auto navbar py-6 px-5 md:px-16 justify-between border-b-[0.05rem] border-[#393939]">
      <div className="avatar space-x-4">
        <div className="w-10 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2 cursor-pointer">
          <Image
            src="https://avatars.githubusercontent.com/u/107864503?v=4"
            alt="Avatar"
            width={40}
            height={40}
          />
        </div>
        <span className="font-bold text-gray-200 text-xs sm:text-sm">
          Neşathan Öztürk
        </span>
      </div>
      <div className="flex space-x-3">
        <span className="cursor-pointer">
          <BiSun size={25} />
        </span>
        <button className="btn-accent py-2 px-4 rounded-lg capitalize text-[#1f2d2b] font-medium text-xs md:text-sm transition-colors">
          Add New Note
        </button>
      </div>
    </div>
  );
};

export default Navbar;
