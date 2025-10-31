// import { createContext, useContext } from "react";

// type searchContextType = {
//   searchTerm: string;
//   isInputInFocus: boolean;
//   setIsInputInFocus: React.Dispatch<React.SetStateAction<boolean>>;
//   setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
//   searchInputRef: React.RefObject<HTMLInputElement | null>;
// };

// export const SearchContext = createContext<searchContextType | undefined>(
//   undefined
// );

// export function useSearchContext() {
//   const context = useContext(SearchContext);

//   if (context == undefined) {
//     throw new Error("Search Context can only be used inside Fifth Component");
//   }
//   return context;
// }
