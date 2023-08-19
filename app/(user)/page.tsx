import BlogItem from "@/components/BlogItem";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";


const query = groq
`
*[_type == "post"] {
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;
export default async function Home() {
  const posts = await client.fetch(query);
  return (
    <div>
      <BlogItem posts={posts} />
    </div>
  )
}
