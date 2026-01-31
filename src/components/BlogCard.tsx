import { usePostContext } from "@/utils/PostsContext";
import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";

const builder = imageUrlBuilder(client);
const urlFor = (source: any) => builder.image(source);

function Flag({ FlagName }: { FlagName: string }) {
  return (
    <span className="px-2 py-1 bg-white border border-gray-200 rounded-full text-xs text-black">
      {FlagName}
    </span>
  );
}

export default function BlogCard() {
  const { posts } = usePostContext();
  return posts.map((post) => (
    <div
      key={post._id}
      // <--- Add this
      className="selection:bg-black my-4 transit selection:text-white bg-gray-50 border border-gray-200 rounded-3xl p-4 max-w-[450px]"
    >
      <div className="flex gap-4">
        <img
          className="w-24 h-24 rounded-2xl object-cover shrink-0 transit-image"
          style={{ viewTransitionName: `image-${post._id}` }}
          src={
            post.mainImage
              ? urlFor(post.mainImage).width(96).height(96).url()
              : "/placeholder.svg"
          }
          alt={post.title}
        />

        <div className="space-y-3 flex-1">
          <div className="flex items-center gap-2">
            <h2
              className="text-sm font-medium text-black"
              style={{ viewTransitionName: `desc-${post.title}` }}
            >
              {post.title}
            </h2>
            <span className="text-sm font-medium text-black">•</span>
            <span className="text-sm text-gray-600">
              {post.publishedAt
                ? new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })
                : "No date"}
            </span>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed">
            {post.body?.[0]?.children?.[0]?.text?.slice(0, 150)}...
          </p>
          <div className="flex justify-between items-center">
            <div className="gap-2 flex-wrap flex">
              {Array.isArray(post.categories) && post.categories.length > 0 ? (
                post.categories.map((cat: any) => (
                  <Flag key={cat.id || cat.title} FlagName={cat.title} />
                ))
              ) : (
                <Flag FlagName="Uncategorized" />
              )}
            </div>
            <Link
              className="text-xs cursor-pointer text-blue-900 hover:underline transition-colors"
              href={`/blogs/${post.slug.current}`}
            >
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  ));
}
