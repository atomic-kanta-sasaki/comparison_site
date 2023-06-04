import express from 'express'
import usersRouter from './routes/users'
import cookieParser from "cookie-parser";
import cors from 'cors';

const app: express.Express = express()
// app.use(session(ses_opt));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());

app.use(cors({
  credentials: true,
  origin: "http://127.0.0.1:5173"
}));

// ルートハンドラの読み込み
app.use('/users', usersRouter)

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack); // エラーの詳細をログに出力
  res.status(err.statusCode || 500).send(err.message); // エラーメッセージをクライアントに送信
});

app.listen(3000, () => {
  console.log("Start on port 3000.")
})
