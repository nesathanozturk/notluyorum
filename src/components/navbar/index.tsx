import Image from "next/image";

const Navbar = () => {
  return (
    <div className="contaier mx-auto navbar py-6 px-16 justify-between border-b-[0.05rem] border-[#333444]">
      <div className="avatar space-x-4">
        <div className="w-10 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
          <Image
            src="https://avatars.githubusercontent.com/u/107864503?v=4"
            alt="Avatar"
            width={40}
            height={40}
          />
        </div>
        <span className="font-bold text-gray-200 text-sm">Neşathan Öztürk</span>
      </div>
      <button className="btn btn-accent capitalize text-black font-medium">
        Add New Note
      </button>
    </div>
  );
};

export default Navbar;
