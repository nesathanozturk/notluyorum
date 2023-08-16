import { categories } from "@/utils/data";

const Category = () => {
  const renderedCategories = categories.map((category) => (
    <div
      key={category.id}
      className="flex justify-between items-center flex-wrap p-4 px-6 border-b-[0.05rem] border-[#393939] cursor-pointer hover:bg-[#393939] hover:bg-opacity-50 transition-all"
    >
      <div className="flex items-center space-x-4">
        <div className={`w-5 h-5 bg-[${category.color}] rounded-full`}></div>
        <span className="font-bold">{category.category}</span>
      </div>
      <span
        className={`w-10 py-[0.3em] bg-[${category.lengthColor}] rounded-xl text-center text-white font-semibold text-sm`}
      >
        {category.length}
      </span>
    </div>
  ));

  return renderedCategories;
};

export default Category;
