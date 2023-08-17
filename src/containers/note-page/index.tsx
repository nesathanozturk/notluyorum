import Notes from "@/layouts/notes";
import Sidebar from "@/layouts/sidebar";

import Navbar from "@/components/navbar";

const NotePage = () => {
  return (
    <>
      <Navbar />
      <section className="sm:flex">
        <Sidebar />
        <Notes />
      </section>
    </>
  );
};

export default NotePage;
