"use client";

import Link from "next/link";
import { TbLogin } from "react-icons/tb";

import { useAuthContext } from "@/context/AuthContext";

import { IAuth } from "@/types";

const Hero = () => {
  const { currentUser, handleLogin } = useAuthContext() as IAuth;

  return (
    <section className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#071D3D] dark:text-white">
            Notlarınızı{" "}
            <span className="text-transparent bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text">
              Notluyorum
            </span>{" "}
            ile kolayca yönetin!
          </h1>
          <p className="py-6 text-xl md:text-2xl text-[#5c6167] dark:text-gray-400 font-medium tracking-wider">
            Her an aklınıza gelen fikirleri, yapılacakları veya ilham veren
            notları kaydetmek hiç bu kadar kolay olmamıştı. Notluyorum ile
            hayatınızı düzenlemek ve unutmamak için güçlü bir araca sahip
            olacaksınız. Basit ve kullanıcı dostu arayüzü sayesinde notlarınızı
            hızlıca oluşturabilir, düzenleyebilir ve paylaşabilirsiniz. Haydi,
            unutmak istemediğiniz her şeyi burada bir araya getirin ve en iyi
            şekilde organize edin.
          </p>
          {currentUser ? (
            <Link
              href="/notes"
              title="Başlayın!"
              className="btn btn-primary tracking-widest capitalize"
            >
              Başlayın!
            </Link>
          ) : (
            <button
              onClick={handleLogin}
              className="btn btn-primary tracking-widest capitalize"
            >
              Giriş Yapın!
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
