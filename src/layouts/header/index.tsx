import Toggle from "@/components/toggle";

const Header = () => {
  return (
    <header className="navbar pt-4">
      <nav className="container mx-auto px-6 justify-between flex-wrap">
        <h1
          title="Notluyorum"
          className="text-3xl md:text-4xl font-extrabold text-transparent bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text cursor-pointer"
        >
          Notluyorum
        </h1>
        <div className="flex items-center space-x-4">
          <Toggle />
          <button className="btn btn-primary tracking-widest text-xs md:text-sm">
            Çıkış Yap
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
