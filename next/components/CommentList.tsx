import { FunctionComponent } from 'react'
import { CommentType } from '../typings'

interface Props {
  comments: [CommentType]
}

const CommentList: FunctionComponent<Props> = ({ comments }) => {
  if (!comments.length) {
    return (
      <div className="mx-auto mb-10 max-w-2xl p-5">
        <h4 className="text-3xl font-medium">Comments</h4>
        <hr className="mt-2 py-3" />
        <p className="text-lg font-thin">No comments yet :(</p>
      </div>
    )
  }

  return (
    <div className="mx-auto mb-10 max-w-2xl p-5">
      <h4 className="text-3xl font-medium">Comments</h4>
      <hr className="mt-2 py-3" />
      {comments.map((comment) => (
        <div
          key={comment._id}
          className="mb-5 flex flex-col space-y-1 rounded border p-2 hover:bg-gray-50 hover:shadow-sm"
        >
          <p className="text-lg">{comment.comment}</p>
          <p className="text-xs font-light text-gray-500">
            by <span className="font-normal">{comment.name}</span> at
            <span className="font-normal">
              {' ' + new Date(comment._createdAt).toLocaleDateString()}
            </span>
          </p>
        </div>
      ))}
    </div>
  )
}

export default CommentList
