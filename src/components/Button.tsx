"use client";

import { PageContext } from "@/utils/PageContext";
import { useContext } from "react";

export default function Button({
  buttonName,
}: {
  buttonName: "Prev" | "Next";
}) {
  const pageContext = useContext(PageContext);

  const currentPage = pageContext?.currentPage;

  function buttonClickHandler(e: React.MouseEvent<HTMLButtonElement>) {
    const buttonName = e.currentTarget.name;
    if (buttonName === "Next" && currentPage! < 5) {
      pageContext?.setCurrentPage(currentPage! + 1);
    }
    if (buttonName === "Prev" && currentPage! > 1) {
      pageContext?.setCurrentPage(currentPage! - 1);
    }
  }

  return buttonName === "Next" ? (
    <button
      className="inline-flex cursor-pointer items-center justify-center gap-2 font-sans font-medium min-w-11 min-h-11 rounded-full transition-[colors,box-shadow,transform] duration-150 ease-out focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none aria-disabled:pointer-events-none select-none will-change-transform bg-black text-white hover:bg-gray-800 focus-visible:ring-gray-400 px-4 py-2 text-sm"
      type="button"
      name="Next"
      onClick={buttonClickHandler}
    >
      <span className="">{buttonName}</span>
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 18L15 12L9 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </button>
  ) : (
    <button
      className="inline-flex cursor-pointer items-center justify-center gap-2 font-sans font-medium min-w-11 min-h-11 rounded-full transition-[colors,box-shadow,transform] duration-150 ease-out focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none aria-disabled:pointer-events-none select-none will-change-transform bg-black text-white hover:bg-gray-800 focus-visible:ring-gray-400 px-4 py-2 text-sm"
      type="button"
      name="Prev"
      onClick={buttonClickHandler}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 18L9 12L15 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
      <span className="">{buttonName}</span>
    </button>
  );
}

// {buttonName === "Prev" && (
//           <path
//             d="M15 18L9 12L15 6"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           ></path>
//         )}
