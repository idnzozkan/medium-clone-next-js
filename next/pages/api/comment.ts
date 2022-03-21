import type { NextApiRequest, NextApiResponse } from 'next'
import sanityClient from '@sanity/client'

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.SANITY_API_TOKEN,
}

const client = sanityClient(config)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { _id, name, email, comment } = JSON.parse(req.body)

    await client.create({
      _type: 'comment',
      post: {
        _type: 'reference',
        _ref: _id,
      },
      name,
      email,
      comment,
    })
  } catch (err) {
    console.log(err)
    return res
      .status(500)
      .json({ error: 'Error while submitting the comment', err })
  }

  console.log('Comment successfully submitted')
  return res.status(200).json({ message: 'Comment successfully submitted' })
}
