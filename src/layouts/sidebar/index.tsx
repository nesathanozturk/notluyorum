import Category from "@/components/category";

const Sidebar = () => {
  return (
    <aside className="sm:w-[19rem] sm:min-w-[14rem] border-r-[0.05rem] border-[#e4e4e4] dark:border-[#505050]">
      <Category />
    </aside>
  );
};

export default Sidebar;
