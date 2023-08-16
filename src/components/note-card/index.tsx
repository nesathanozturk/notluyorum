import { notes } from "@/utils/data";

const NoteCard = () => {
  const renderedNoteCard = notes.map((note) => (
    <div
      key={note.id}
      className={`bg-[${note.cardColor}] py-5 px-6 mb-6 max-w-[25rem] rounded-3xl cursor-pointer`}
    >
      <div className="flex justify-between items-center mb-3">
        <h1 className="font-bold text-white">{note.title}</h1>
        <span
          className={`px-5 py-[0.9em] bg-white rounded-xl text-center text-[${note.categoryTextColor}] font-semibold text-xs uppercase tracking-widest`}
        >
          {note.category}
        </span>
      </div>
      <p className="text-white text-xs leading-6">{note.description}</p>
      <div className="flex justify-between items-center text-[#D9DEF2] font-bold uppercase mt-7 text-sm">
        <span>{note.createdTime}</span>
        <span>{note.createdDate}</span>
      </div>
    </div>
  ));

  return renderedNoteCard;
};

export default NoteCard;
