import { FunctionComponent, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

interface IFormInput {
  _id: string
  name: string
  email: string
  comment: string
}

interface Props {
  postId: string
}

const CommentForm: FunctionComponent<Props> = ({ postId }) => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>()

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      const res = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify(data),
      })
      setIsSubmitted(true)
      console.log(res)
    } catch (err) {
      setIsSubmitted(false)
      console.log(err)
    }
  }

  if (isSubmitted) {
    return (
      <div className="mx-auto mb-10 max-w-2xl rounded bg-yellow-500 py-10 px-5 ">
        <h3 className="text-3xl font-bold text-white">
          Thank you for your comment!
        </h3>
        <p className="text-lg font-light text-white">
          Once your comment is approved, it will appear below.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto mb-10 flex max-w-2xl flex-col p-5"
    >
      <h3 className="text-sm text-yellow-500">Enjoyed this article?</h3>
      <h4 className="text-3xl font-medium">Leave a comment below!</h4>
      <hr className="mt-2 py-3" />
      <input {...register('_id')} type="hidden" name="_id" value={postId} />
      <label className="mb-5 block">
        <span className="text-gray-700">Name</span>
        {errors.name && (
          <span className="block text-sm font-thin text-red-600">
            Name is required
          </span>
        )}
        <input
          {...register('name', { required: true })}
          className="form-input mt-1 block w-full rounded border py-2 px-3 shadow outline-none ring-yellow-500 focus:ring"
          placeholder="John Doe"
          type="text"
        />
      </label>
      <label className="mb-5 block">
        <span className="text-gray-700">Email</span>
        {errors.email && (
          <span className="block text-sm font-thin text-red-600">
            Email is required
          </span>
        )}
        <input
          {...register('email', { required: true })}
          className="form-input mt-1 block w-full rounded border py-2 px-3 shadow outline-none ring-yellow-500 focus:ring"
          placeholder="john@mail.com"
          type="email"
        />
      </label>
      <label className="mb-5 block">
        <span className="text-gray-700">Comment</span>
        {errors.comment && (
          <span className="block text-sm font-thin text-red-600">
            Comment is required
          </span>
        )}
        <textarea
          {...register('comment', { required: true })}
          className="form-input mt-1 block w-full rounded border py-2 px-3 shadow outline-none ring-yellow-500 focus:ring"
          placeholder="Thank you for sharing this post!"
          rows={8}
        />
      </label>
      <input
        type="submit"
        className="cursor-pointer rounded bg-yellow-500 py-2 px-4 font-bold text-white shadow transition-colors duration-200 hover:bg-yellow-400 focus:shadow-md focus:outline-none"
      />
    </form>
  )
}

export default CommentForm
