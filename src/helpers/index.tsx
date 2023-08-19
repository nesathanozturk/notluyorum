import toast from "react-hot-toast";

export const showToast = (desc: string, type: "success" | "error") => {
  toast[type](desc, {
    position: "top-right",
  });
};
