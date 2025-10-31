import { createContext, SetStateAction, useContext } from "react";

type PageLayoutType = {
  PageLayout: [
    {
      pageNumber: Number;
      isActive: Boolean;
    }
  ];
  setPageLayout: React.Dispatch<SetStateAction<PageLayoutType>>;
};

export const pageLayoutContext = createContext<PageLayoutType | undefined>(
  undefined
);

export function usePageLayoutContext() {
  let context = useContext(pageLayoutContext);

  if (context === undefined) {
    throw new Error("Layout context is undefined");
  }
  return context;
}
