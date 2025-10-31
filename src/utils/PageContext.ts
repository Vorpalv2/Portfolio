import React, { SetStateAction, useContext } from "react";
import { createContext } from "react";

type PageContextType = {
  currentPage: number;
  setCurrentPage: React.Dispatch<SetStateAction<number>>;
};

export const PageContext = createContext<PageContextType | undefined>(
  undefined
);

export function usePageContext() {
  let context = useContext(PageContext);

  if (context == undefined) {
    throw new Error("must be used within a page provider");
  }

  return context;
}
