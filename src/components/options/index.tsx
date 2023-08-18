import { IOptionProps } from "@/types";

import { options } from "@/utils/data";

const Options: React.FC<IOptionProps> = ({
  title,
  optionCategory,
  inputs,
  setInputs,
}) => {
  const renderedOptions = (
    <select
      name={title}
      value={optionCategory}
      onChange={(e) =>
        setInputs({ ...inputs, [e.target.name]: e.target.value })
      }
      className="select select-bordered w-full"
    >
      <option>Notunuzun Kategorisi</option>
      {options.map((option) => (
        <option key={option.id} value={option.title}>
          {option.title}
        </option>
      ))}
    </select>
  );

  return renderedOptions;
};

export default Options;
