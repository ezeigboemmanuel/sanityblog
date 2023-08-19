// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '@/sanity/lib/client';

export default async function createComment(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const {_id, name, email, comment} = JSON.parse(req.body);

    try {
        await client.create({
            _type: "comment",
            post: {
                _type: "reference",
                _ref: _id
            },
            name,
            email,
            comment
        });
    } catch (err){
        return res.status(500).json({message: "Couldn't submit comment!", err})
    }

    console.log("comment submitted")
    return res.status(200).json({ message: 'Comment submited' })
}