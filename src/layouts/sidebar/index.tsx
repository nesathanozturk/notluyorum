import Category from "@/components/category";

const Sidebar = () => {
  return (
    <aside className="lg:w-[18rem] lg:min-w-[16rem] border-r-[0.05rem] border-[#e4e4e4] dark:border-[#505050]">
      <Category />
    </aside>
  );
};

export default Sidebar;
