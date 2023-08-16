import Notes from "@/layouts/notes";
import Sidebar from "@/layouts/sidebar";

import Navbar from "@/components/navbar";

const NotesPage = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <section className="block sm:flex">
        <Sidebar />
        <Notes />
      </section>
    </main>
  );
};

export default NotesPage;
