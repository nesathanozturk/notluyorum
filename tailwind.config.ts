/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        allNotes: {
          DEFAULT: "#F368E0",
          light: "#F368E0",
          dark: "#AE54A2",
        },
        wishList: {
          DEFAULT: "#E27802",
          light: "#A45F12",
          dark: "#A35E11",
        },
        homework: {
          DEFAULT: "#546DE5",
          light: "#4758A6",
          dark: "#4757A5",
        },
        projects: {
          DEFAULT: "#349B90",
        },
        work: {
          DEFAULT: "#FF577F",
          light: "#B74963",
          dark: "#B64963",
        },
        study: {
          DEFAULT: "#FDB827",
          light: "#B6892A",
          dark: "#B58829",
        },
        workCard: "#FFDDE5",
        workCategoryColor: "#FF577F",
        darkWorkCard: "#D64F6F",
        darkWorkCategoryColor: "#FF7596",
        wishListCard: "#F9E4CC",
        wishListCategoryColor: "#E27802",
        darkWishListCard: "#BE6A0B",
        darkWishListCategoryColor: "#EDAE68",
        homeworkCard: "#DDE2FA",
        homeworkCategoryColor: "#546DE5",
        darkHomeworkCard: "#4D61C1",
        darkHomeworkCategoryColor: "#576FE5",
        projectsCard: "#7F8FA6",
        projectsCategoryColor: "#7F8FA6",
        darkProjectsCard: "#36B4A6",
        darkProjectsCategoryColor: "#414141",
        studyCard: "#FFF1D3",
        studyCategoryColor: "#FDB827",
        darkStudyCard: "#D49D29",
        darkStudyCategoryColor: "#FDB827",
      },
    },
  },
  plugins: [require("daisyui")],
};
