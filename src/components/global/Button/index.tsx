import { ReactNode } from "react";

interface IButton {
  children: ReactNode;
  size?: "small" | "large"
}

export default function Button({ children, size = "large" }: IButton) {
  const sizeClass = {
    small: "py-3 px-5 text-[18px] bg-white text-black font-lg",
    large: "py-4 px-6 text-[28px] bg-black text-white"
  };

  return (
    <button className={`capitalize ${sizeClass[size]} inline-block max-w-[fit-content]`}>
      {children}
    </button>
  );
}