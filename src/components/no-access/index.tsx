const NoAccess = () => {
  return (
    <section className="flex justify-center items-center h-screen bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">
          Bu sayfaya erişim yetkiniz yok!
        </h1>
        <p>Lütfen giriş yapın veya yetkilendirme sağlayın.</p>
      </div>
    </section>
  );
};

export default NoAccess;
