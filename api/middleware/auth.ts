import jwt from 'jsonwebtoken'
import express from 'express'


export const authenticate = (req: any, res: express.Response, next: express.NextFunction) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }
  try {
    const payload = jwt.verify(token, 'your_secret_key') as jwt.JwtPayload;
    req.userId = payload.userId;
    next();
  } catch (e) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};
