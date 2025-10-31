import { createContext, useContext, SetStateAction } from "react";
import { type SanityDocument } from "next-sanity";

type postContextType = {
  posts: SanityDocument[];
  setPosts: React.Dispatch<SetStateAction<SanityDocument[]>>;
};

export const PostContext = createContext<postContextType | undefined>(
  undefined
);

export function usePostContext() {
  let context = useContext(PostContext);

  if (context === undefined) {
    throw new Error(
      "Post context must be used within DynamicBlogDataFetch Component"
    );
  }
  return context;
}
