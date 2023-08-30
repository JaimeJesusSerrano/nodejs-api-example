import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

// JWT valid example
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.iUCROHt6JHANdtzT6aOuUgOqVFRalOW20SbzRsn5SkI

const authentication = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)
  
  const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET
  if (!accessTokenSecret) {
    return res.sendStatus(403)
  }

  try {
    jwt.verify(token, accessTokenSecret)
    next()
  } catch(err) {
    return res.sendStatus(403)
  }
}

export default authentication
