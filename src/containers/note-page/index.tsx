import { Toaster } from "react-hot-toast";

import Notes from "@/layouts/notes";
import Sidebar from "@/layouts/sidebar";

import Navbar from "@/components/navbar";

const NotePage = () => {
  return (
    <>
      <Navbar />
      <section className="md:flex">
        <Sidebar />
        <Notes />
      </section>
      <Toaster />
    </>
  );
};

export default NotePage;
