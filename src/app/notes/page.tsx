import Navbar from "@/components/navbar";
import Notes from "@/layouts/notes";
import Sidebar from "@/layouts/sidebar";

const NotesPage = () => {
  return (
    <main>
      <Navbar />
      <section className="flex">
        <Sidebar />
        <Notes />
      </section>
    </main>
  );
};

export default NotesPage;
