"use client";

import useWindowSize from "@/hooks/use-window-size";

import { IAuthButtonProps } from "@/types";

const AuthButton: React.FC<IAuthButtonProps> = ({
  handleClick,
  authStatus,
  Icon,
}) => {
  const { width } = useWindowSize();

  return (
    <>
      <button
        onClick={handleClick}
        className="btn btn-primary tracking-widest text-xs md:text-sm"
      >
        {width > 480 ? authStatus : <Icon size={23} />}
      </button>
    </>
  );
};

export default AuthButton;
