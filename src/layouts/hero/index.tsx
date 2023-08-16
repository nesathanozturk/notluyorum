const Hero = () => {
  return (
    <section className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-extrabold text-transparent bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text">
            Notluyorum&apos;a Hoş Geldiniz!
          </h1>
          <p className="py-6 text-xl md:text-2xl text-gray-300 font-semibold tracking-wide">
            Her an aklınıza gelen fikirleri, yapılacakları veya ilham veren
            notları kaydetmek hiç bu kadar kolay olmamıştı. Notluyorum ile
            hayatınızı düzenlemek ve unutmamak için güçlü bir araca sahip
            olacaksınız. Basit ve kullanıcı dostu arayüzü sayesinde notlarınızı
            hızlıca oluşturabilir, düzenleyebilir ve paylaşabilirsiniz. Haydi,
            unutmak istemediğiniz her şeyi burada bir araya getirin ve en iyi
            şekilde organize edin.
          </p>
          <button className="btn btn-primary tracking-widest">Başlayın!</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
