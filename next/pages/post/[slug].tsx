import { GetStaticProps } from 'next'
import { FunctionComponent } from 'react'
import Header from '../../components/Header'
import { sanityClient, urlFor } from '../../sanity'
import { PostType } from '../../typings'
import PortableText from 'react-portable-text'
import CommentForm from '../../components/CommentForm'
import CommentList from '../../components/CommentList'

interface Props {
  post: PostType
}

const Post: FunctionComponent<Props> = ({ post }) => {
  return (
    <main>
      <Header />
      <img
        className="h-80 w-full object-cover"
        src={urlFor(post.mainImage).url()!}
        alt={post.title}
      />
      <article className="mx-auto max-w-3xl p-5">
        <h1 className="mt-10 mb-3 text-3xl">{post.title}</h1>
        <h2 className="mb-2 text-xl font-light text-gray-500">
          {post.description}
        </h2>
        <div className="flex items-center space-x-2">
          <img
            className="h-10 w-10 rounded-full"
            src={urlFor(post.author.image).url()!}
            alt={post.author.name}
          />
          <p className="text-sm font-extralight">
            Blog post by{' '}
            <span className="font-light text-green-800">
              {post.author.name}
            </span>{' '}
            - Published at {new Date(post._createdAt).toLocaleString()}
          </p>
        </div>
        <div className="mt-10">
          <PortableText
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
            content={post.body}
            serializers={{
              h1: (props: any) => (
                <h1 className="my-5 text-2xl font-bold" {...props} />
              ),
              h2: (props: any) => (
                <h2 className="my-5 text-xl font-bold" {...props} />
              ),
              li: ({ children }: any) => (
                <li className="ml-4 list-disc">{children}</li>
              ),
              link: ({ href, children }: any) => (
                <a href={href} className="text-blue-500 hover:underline">
                  {children}
                </a>
              ),
            }}
          />
        </div>
      </article>
      <hr className="my-12 mx-auto max-w-3xl border border-yellow-500" />
      <CommentForm postId={post._id} />
      <CommentList comments={post.comments} />
    </main>
  )
}

export default Post

export const getStaticPaths = async () => {
  const query = `*[_type == 'post'] {
        _id,
        slug {
          current
        }
      }`

  const posts = await sanityClient.fetch(query)

  const paths = posts.map((post: PostType) => ({
    params: {
      slug: post.slug.current,
    },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == 'post' && slug.current == $slug][0] {
        _id,
        _createdAt,
        title,
        author -> {
          name,
          image
        },
        'comments': *[
           _type == 'comment' &&
           post._ref == ^._id &&
           approved == true],
        description,
        mainImage,
        slug,
        body     
      }`

  const post = await sanityClient.fetch(query, { slug: params?.slug })

  if (!post) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post,
    },
    revalidate: 60,
  }
}
