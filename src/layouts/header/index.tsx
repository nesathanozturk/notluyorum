const Header = () => {
  return (
    <header className="navbar pt-6">
      <nav className="container mx-auto px-6 justify-between flex-wrap">
        <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text">
          Notluyorum
        </h1>
        <button className="btn btn-primary tracking-widest text-xs md:text-sm">
          Çıkış Yap
        </button>
      </nav>
    </header>
  );
};

export default Header;
