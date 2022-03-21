import { FunctionComponent } from 'react'
import { PostType } from '../typings'
import PostItem from './PostItem'

interface Props {
  posts: [PostType]
}

const Posts: FunctionComponent<Props> = ({ posts }) => {
  return (
    <div className="md:pd-6 m-auto my-5 grid max-w-6xl grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
      {posts.map((post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </div>
  )
}

export default Posts
