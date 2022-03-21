import Link from 'next/link'
import { FunctionComponent } from 'react'
import { urlFor } from '../sanity'
import { PostType } from '../typings'

interface Props {
  post: PostType
}

const PostItem: FunctionComponent<Props> = ({ post }) => {
  return (
    <Link href={`/post/${post.slug.current}`}>
      <div className="group cursor-pointer overflow-hidden rounded-lg border transition-shadow duration-300 ease-in hover:shadow-sm">
        <img
          className="h-60 w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
          src={urlFor(post.mainImage).url()!}
          alt={post.title}
        />
        <div className="flex flex-col justify-between bg-white p-5">
          <p className="text-lg font-medium">{post.title}</p>
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm font-light">
              {post.description} by {post.author.name}
            </p>
            <img
              className="ml-2 h-10 w-10 rounded-full"
              src={urlFor(post.author.image).url()!}
              alt={post.author.name}
            />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default PostItem
