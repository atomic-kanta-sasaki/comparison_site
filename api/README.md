### 環境構築
ライブラリのインストール
 - npm ci
ビルド
 - npm run build
実行
- npm start

### migrationについて
schemaの定義を`schema.prisma`に記述する
`npx prisma migrate dev`を実行するとmigrationファイルの生成とmigrationを実行することができる

`npx prisma generate dev`でTypescript用の方を生成する