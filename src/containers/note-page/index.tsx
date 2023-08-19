import { Toaster } from "react-hot-toast";

import Notes from "@/layouts/notes";
import Sidebar from "@/layouts/sidebar";

import AddModal from "@/components/modal/AddModal";
import EditModal from "@/components/modal/EditModal";
import Navbar from "@/components/navbar";

const NotePage = () => {
  return (
    <>
      <Navbar />
      <section className="lg:flex">
        <Sidebar />
        <Notes />
      </section>
      <Toaster />
      <AddModal />
      <EditModal />
    </>
  );
};

export default NotePage;
