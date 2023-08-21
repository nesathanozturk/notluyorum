import { Toaster } from "react-hot-toast";

import Notes from "@/layouts/notes";
import Sidebar from "@/layouts/sidebar";

import AddModal from "@/components/modal/AddModal";
import EditModal from "@/components/modal/EditModal";
import Navbar from "@/components/navbar";
import OpenModal from "@/components/modal/OpenModal";

const NotePage = () => {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <section className="md:flex">
        <Sidebar />
        <Notes />
      </section>
      <AddModal />
      <EditModal />
      <OpenModal />
      <Toaster />
    </main>
  );
};

export default NotePage;
