import jwt from 'jsonwebtoken'
import express from 'express'


export const authenticate = (req: any, res: express.Response, next: express.NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const payload = jwt.verify(token, 'your_secret_key') as jwt.JwtPayload;
    req.userId = payload.userId;
    next();
  } catch (e) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};
