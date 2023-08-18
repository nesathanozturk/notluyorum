import NoteCard from "@/components/note-card";

const Notes = () => {
  return (
    <section className="mt-12 px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
      <NoteCard />
    </section>
  );
};

export default Notes;
