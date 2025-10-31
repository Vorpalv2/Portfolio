import React, { useEffect, useRef, useState } from "react";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { useInView } from "framer-motion";
import { PostContext } from "@/utils/PostsContext";

const POST_QUERY = `*[_type == "post"] {
  _id,
  title,
  mainImage,
  body,
  slug,
  "publishedAt": publishedAt,
  "categories": category[]->{
    "id": _id,
    "title": title
  }
} | order(publishedAt desc)`;

const options = { next: { revalidate: 30 } };

export default function DynamicBlogDataFetcher({
  children,
}: {
  children: React.ReactNode;
}) {
  const [posts, setPosts] = useState<SanityDocument[]>([]);

  const [loading, setLoading] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, {
    margin: "-100px",
    once: true,
  });
  useEffect(() => {
    if (inView && !loading) {
      const fetchPosts = async () => {
        setLoading(true);
        try {
          const fetchedPosts = await client.fetch<SanityDocument[]>(
            POST_QUERY,
            [],
            options
          );
          setPosts(fetchedPosts);
        } catch (error) {
          console.error("Error fetching posts:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchPosts();
    }
  }, [inView]);

  return (
    <div ref={ref} className="bg-gray-50 p-4 rounded-2xl">
      {loading ? (
        <>
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-4 py-1">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
            </div>
          </div>
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-4 py-1">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
            </div>
          </div>
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-4 py-1">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
            </div>
          </div>
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-4 py-1">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <PostContext.Provider value={{ posts, setPosts }}>
          {children}
        </PostContext.Provider>
      )}
    </div>
  );
}
