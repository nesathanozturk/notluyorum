import { IOptionProps } from "@/types";

import { options } from "@/utils/data";

const Options: React.FC<IOptionProps> = ({ category, setCategory }) => {
  const renderedOptions = (
    <select
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      className="select select-bordered w-full"
    >
      <option>Notunuzun Kategorisi</option>
      {options.map((option) => (
        <option key={option.id}>{option.title}</option>
      ))}
    </select>
  );

  return renderedOptions;
};

export default Options;
