import React from 'react'
import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import Route from './Route'

type Props = {
  posts: Post[]
}

function BlogItem({ posts }: Props) {
  return (
    <div>
      <h2 className="text-2xl mt-5 px-5">Blog Posts:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 gap-5">
        {posts.map(post => (
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

export default BlogItem