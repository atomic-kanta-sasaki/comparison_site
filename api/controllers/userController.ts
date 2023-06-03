import { PrismaClient, User } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UserBaseRequestBody } from '../interfaces/user'
import { CustomErrorHandler } from '../middleware/error'
const prisma = new PrismaClient();



export const registerUser = async (body: UserBaseRequestBody) => {
  const { email, password } = body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user: User | null = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });

  return user;
}

export const login = async (body: UserBaseRequestBody) => {
  const { email, password } = body;
  const user: User | null = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw new CustomErrorHandler("user not found", 404);
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new CustomErrorHandler("Invalid passowrd", 400);
  }
  const token = jwt.sign({ userId: user.id }, 'your_secret_key');

  return token;
}