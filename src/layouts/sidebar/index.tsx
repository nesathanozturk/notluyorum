import Category from "@/components/category";

const Sidebar = () => {
  return (
    <aside className="sm:w-[19rem] sm:min-w-[14rem] border-r-[0.05rem] border-[#F0F0F0] dark:border-[#393939]">
      <Category />
    </aside>
  );
};

export default Sidebar;
