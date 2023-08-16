const Notes = () => {
  return (
    <section className="mt-12 px-8">
      <div className="bg-[#D64F6F] py-5 px-6 mb-6 max-w-[25rem] rounded-3xl">
        <div className="flex justify-between items-center mb-3">
          <h1 className="font-bold text-white">Client Meeting Review</h1>
          <span className="w-16 py-[0.9em] bg-white rounded-xl text-center text-[#FF7596] font-semibold text-xs uppercase tracking-widest">
            Work
          </span>
        </div>
        <p className="text-white text-xs leading-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid,
          voluptatum. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Aliquid, voluptatum.
        </p>
        <div className="flex justify-between items-center text-[#F5D6DD] font-bold uppercase mt-7 text-sm">
          <span>09:08PM</span>
          <span>07 January 2021</span>
        </div>
      </div>
    </section>
  );
};

export default Notes;
