import NoteCard from "@/components/note-card";

const Notes = () => {
  return (
    <section className="mt-8 px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
      <NoteCard />
    </section>
  );
};

export default Notes;
