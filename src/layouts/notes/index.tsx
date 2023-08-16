import NoteCard from "@/components/note-card";

const Notes = () => {
  return (
    <section className="mt-12 px-8">
      <div className="flex flex-wrap space-x-4">
        <NoteCard />
      </div>
    </section>
  );
};

export default Notes;
