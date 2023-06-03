import express from 'express'
import { authenticate } from '../middleware/auth';
import { registerUser, login } from '../controllers/userController';

const router = express.Router()

type User = {
  id: number
  name: string
  email: string
}

const users: User[] = [
  { id: 1, name: "User1", email: "user1@test.local" },
  { id: 2, name: "User2", email: "user2@test.local" },
  { id: 3, name: "User3", email: "user3@test.local" }
]

// 一覧取得
router.get('/', (req: express.Request, res: express.Response) => {
  console.log("--------------------------------")
  res.send(JSON.stringify(users))
})

router.post('/register', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const user = registerUser(req.body)
    res.status(200).json(user);
  } catch (e) {
    next(e)
  }

});

router.post('/login', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    const token = await login(req.body)
    res.json({ token });
  } catch (e) {
    next(e)
  }
});

router.get('/protected', authenticate, (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    res.json({ message: 'This is a protected route' });
  } catch (e) {
    next(e)
  }
});
export default router