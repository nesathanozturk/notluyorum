import { options } from "@/utils/data";

const Options = () => {
  const renderedOptions = (
    <select className="select select-bordered w-full">
      <option disabled selected>
        Notunuzun Kategorisi
      </option>
      {options.map((option) => (
        <option key={option.id}>{option.title}</option>
      ))}
    </select>
  );

  return renderedOptions;
};

export default Options;
