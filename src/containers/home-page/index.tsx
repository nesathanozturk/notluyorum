import { Toaster } from "react-hot-toast";

import Footer from "@/layouts/footer";
import Header from "@/layouts/header";
import Hero from "@/layouts/hero";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <Footer />
      <Toaster />
    </>
  );
};

export default HomePage;
