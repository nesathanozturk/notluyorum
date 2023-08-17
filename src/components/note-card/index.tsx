import { notes } from "@/utils/data";

const NoteCard = () => {
  const renderedNoteCard = notes.map((note) => (
    <div
      key={note.id}
      className={`bg-${note.cardColor} dark:bg-${note.darkCardColor} py-5 px-6 mb-6 md:max-w-[26.3rem] rounded-3xl cursor-pointer hover:bg-opacity-90 transition-colors text-[#343334] dark:text-white`}
    >
      <div className="flex justify-between items-center flex-wrap gap-2 mb-3">
        <h1 className="text-center sm:text-left font-bold">{note.title}</h1>
        <span
          className={`px-3 py-[0.7em] sm:px-5 sm:py-[0.9em] bg-${note.categoryTextColor} text-white dark:bg-white rounded-xl text-center dark:text-${note.darkCategoryTextColor} font-semibold text-xs uppercase tracking-widest`}
        >
          <p className="bg-studyCard"></p>
          <p className="bg-studyCategoryColor"></p>
          <p className="bg-darkStudyCard"></p>
          <p className="text-darkStudyCategoryColor"></p>
          {note.category}
        </span>
      </div>
      <p className="text-xs leading-6">{note.description}</p>
    </div>
  ));

  return renderedNoteCard;
};

export default NoteCard;
