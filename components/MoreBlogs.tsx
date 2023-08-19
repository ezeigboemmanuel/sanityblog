import React from 'react'
import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import Route from './Route'

type Props = {
  posts: Post[];
  post: Post;
}

function MoreBlogs({ posts, post }: Props) {
  const filteredPosts = posts.filter(item => item.title !== post.title)
  return (
    <div>
      <h2 className="text-2xl mt-10 px-5">Read More Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 gap-5">
        {filteredPosts.map(post => (
          <Route route={`/blog/${post.slug.current}`}>
            <div key={post._id} className="flex pb-7 flex-col group cursor-pointer rounded-lg hover:bg-slate-300 border border-gray-400">
              <div className='relative w-full h-80 '>
                <Image
                  fill
                  src={urlForImage(post.mainImage).url()}
                  alt="postImage"
                  className="object-cover"
                />
              </div>

              <div className="px-3 py-5">
                <h1 className="text-2xl md:text-3xl font-bold">{post.title}</h1>
                <p>{post.description}</p>
              </div>
            </div>
          </Route>
        ))}
      </div>
    </div>
  )
}

export default MoreBlogs