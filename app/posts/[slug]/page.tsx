import { notFound } from "next/navigation";
import Link from "next/link";
import createImageUrlBuilder from "@sanity/image-url";

import Image from "next/image";
import { PortableText } from "next-sanity";
import { sanityFetch } from "@/lib/sanity/live";
import { POST_QUERY } from "@/lib/sanity/queries";
import { client } from "@/lib/sanity/client";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data: post } = await sanityFetch({
    query: POST_QUERY,
    params: await params,
  });

  if (!post) {
    notFound();
  }

  const builder = createImageUrlBuilder(client);
  return (
    <main className="mt-10 container mx-auto grid grid-cols-1 gap-6 p-12 text-white">
      <h1 className="text-4xl font-bold text-balance">{post?.title}</h1>
      <hr />
      <div className="w-fit mx-auto">
        {post?.mainImage ? (
          <Image
            src={builder.image(post.mainImage).width(500).height(500).url()}
            alt={post.mainImage.alt ? post.mainImage.alt : "blog_image"}
            width={300}
            height={400}
          />
        ) : null}
      </div>
      <div className="text-white font-light">
        {post?.body ? (
          <PortableText value={post.body} />
        ) : (
          <p>No details found!</p>
        )}
      </div>
      <Link href="/posts">&larr; Return to index</Link>
    </main>
  );
}
