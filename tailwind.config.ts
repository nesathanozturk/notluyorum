import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        allNotes: "#AE54A2",
        "allNotes-light": "#AF54A3",
        wishList: "#A35E11",
        "wishList-light": "#A45F12",
        homework: "#4757A5",
        "homework-light": "#4758A6",
        projects: "#349B90",
        "projects-light": "#349B90",
        work: "#B64963",
        "work-light": "#B74963",
        study: "#B58829",
        "study-light": "#B6892A",
        workCard: "#D64F6F",
        workCategoryColor: "#FF7596",
        wishListCard: "#BE6A0B",
        wishListCategoryColor: "#EDAE68",
        homeworkCard: "#4D61C1",
        homeworkCategoryColor: "#576FE5",
        projectsCard: "#36B4A6",
        projectsCategoryColor: "#414141",
        studyCard: "#D49D29",
        studyCategoryColor: "#FDB827",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
