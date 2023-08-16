const Header = () => {
  return (
    <header className="navbar py-4">
      <nav className="container mx-auto px-6 justify-between flex-wrap">
        <h1 className="normal-case text-2xl md:text-3xl font-bold italic text-gray-100 tracking-wide">
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
