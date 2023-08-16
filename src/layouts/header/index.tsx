const Header = () => {
  return (
    <header className="navbar py-4">
      <nav className="container mx-auto px-6 justify-between flex-wrap">
        <h1 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Notluyorum
        </h1>
        <button className="btn btn-active btn-primary text-xs md:text-sm tracking-widest">
          Çıkış yap
        </button>
      </nav>
    </header>
  );
};

export default Header;
