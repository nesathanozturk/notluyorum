import NoteCard from "@/components/note-card";

const Notes = () => {
  return (
    <section className="w-full mt-8 px-8 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-6">
      <NoteCard />
    </section>
  );
};

export default Notes;
