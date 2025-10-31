import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import BackButton from "@/components/BackButton";
import { Metadata } from "next";

const { dataset, projectId } = client.config();

const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = await params;
  const METADATA_QUERY = `*[_type == "post" && slug.current == $slug][0] {
    title,
    "description": body[0].children[0].text // Simple example for description
  }`;

  const post = await client.fetch<SanityDocument & { description: string }>(
    METADATA_QUERY,
    { slug },
    options
  );

  if (!post) {
    return {
      title: "Post Not Found",
      description: `The post with slug ${slug} was not found.`,
    };
  }

  return {
    title: post.title,
    description: post.description || `Read the full article: ${post.title}`,
  };
}

////

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  try {
    const POST_QUERY = `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      author->{name},
      mainImage,
      body,
      publishedAt
    }`;

    const post = await client.fetch<SanityDocument>(
      POST_QUERY,
      { slug },
      options
    );

    if (!post) {
      return <div className="text-red-500">No post found for slug: {slug}</div>;
    }

    const postImageUrl = post.mainImage
      ? urlFor(post.mainImage)?.width(400).height(210).url()
      : null;

    // author is now dereferenced inside the post query as post.author.name

    return (
      <>
        <div className="flex justify-end bg-black w-full">
          <BackButton href="/portfolio" buttonName="Go Back" />
        </div>
        <article className="min-h-screen bg-white text-black">
          <div className="w-full h-96 overflow-hidden">
            <img
              src={postImageUrl || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-full object-cover rounded-b-2xl blur-xs"
            />
          </div>
          <div className="max-w-3xl mx-auto px-6 py-12">
            {/* Header Section */}
            <header className="mb-8">
              <h1 className="text-4xl font-bold mb-4 text-pretty">
                {post.title}
              </h1>

              {/* Meta Information */}
              <div className="flex flex-col gap-2 text-gray-700 border-b border-gray-300 pb-6">
                <div className="flex items-center gap-2">
                  <span className="font-semibold">
                    By {post.author?.name ?? "Unknown"}
                  </span>
                </div>
              </div>
            </header>

            <main className="prose prose-invert max-w-none">
              <div className="text-lg leading-relaxed whitespace-pre-wrap text-black">
                {Array.isArray(post.body) && <PortableText value={post.body} />}
              </div>
            </main>
            <div className="sr-only">Post ID: {post._id}</div>
          </div>
        </article>
      </>
    );
  } catch (error) {
    console.error("Error fetching post:", error);
    return (
      <div className="text-red-500">Error loading post: {String(error)}</div>
    );
  }
}
