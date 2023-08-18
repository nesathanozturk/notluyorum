import Category from "@/components/category";

const Sidebar = () => {
  return (
    <aside className="md:w-[19rem] md:min-w-[14rem] border-r-[0.05rem] border-[#e4e4e4] dark:border-[#505050]">
      <Category />
    </aside>
  );
};

export default Sidebar;
