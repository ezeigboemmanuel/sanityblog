import Comments from "@/components/Comments";
import MoreBlogs from "@/components/MoreBlogs";
import Text from "@/components/Text";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { groq } from "next-sanity";
import Image from "next/image";

export default async function Page({ params }: { params: { slug: string } }) {
    const query = groq`
    *[_type == "post" && slug.current == $slug][0] {
          ...,
          author->,
          categories[]->,
          'comments': *[
            _type == 'comment' &&
            post._ref == ^._id &&
            approved == true],
      }`;
    const allPosts = groq`
    *[_type == "post"] {
      ...,
      author->,
      categories[]
    } | order(_createdAt desc)
    `;
    const post: Post = await client.fetch(query, params);
    const posts = await client.fetch(allPosts);
    return (
        <article className="mt-10 max-w-6xl mx-auto">
            <h1 className="text-6xl text-center font-bold">{post.title}</h1>
            <div className="flex flex-row gap-9 items-center justify-center my-5">
                <p>Posted By: {post.author.name}</p>
                <p>
                    Published at: {new Date(post._createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                    })}
                </p>


            </div>
            <div className='relative w-full h-96 '>
                <Image
                    fill
                    src={urlForImage(post.mainImage).url()}
                    alt="postImage"
                    className="object-cover"
                />
            </div>

            <PortableText
                value={post.body}
                components={Text}
            />

            <MoreBlogs posts={posts} post={post} />
            <Comments post={post} />
        </article>
    )
}