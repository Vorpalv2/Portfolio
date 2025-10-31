// import { SearchContext } from "@/utils/searchContext";
// import React, { useState, useRef } from "react";

// export default function SearchContextWrapper({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [searchTerm, setSearchTerm] = useState<string>("");
//   const searchInputRef = useRef<HTMLInputElement>(null);
//   const [inFocus, isInFocus] = useState(false);

//   return (
//     <>
//       <SearchContext.Provider
//         value={{
//           searchTerm,
//           setSearchTerm,
//           searchInputRef,
//           isInputInFocus: inFocus,
//           setIsInputInFocus: isInFocus,
//         }}
//       >
//         {children}
//       </SearchContext.Provider>
//     </>
//   );
// }
