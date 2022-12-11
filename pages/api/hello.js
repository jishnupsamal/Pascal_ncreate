// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import React from 'react'

const hello = (req, res) => {
  res.status(200).json(
    {name: req.body.name}
  )
}

export default hello