# 株式会社（仮） - コーポレートサイト

WEBマーケティングデザインとオンラインスクールの企画・制作・運営を行う企業のコーポレートサイトです。

## 🚀 クイックスタート

### Netlifyで手動デプロイ（最も簡単）

1. このプロジェクト全体をZIPでダウンロード
2. https://app.netlify.com/drop にアクセス
3. ZIPファイルまたは解凍したフォルダをドラッグ&ドロップ
4. 完了！

### GitHubと連携してデプロイ

1. このプロジェクトをGitHubリポジトリにプッシュ
2. Netlifyにログイン
3. 「Add new site」→「Import an existing project」
4. GitHubリポジトリを選択
5. ビルド設定は自動検出されます（netlify.toml使用）
6. 「Deploy site」をクリック

## 🛠️ ローカル開発

### 必要な環境

- Node.js 18以上
- npm または yarn

### セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバー起動
npm run dev

# ビルド（本番用）
npm run build

# ビルドのプレビュー
npm run preview
```

開発サーバーは http://localhost:5173 で起動します。

## 📁 プロジェクト構成

```
/
├── index.html              # エントリーポイント
├── package.json            # 依存関係とスクリプト
├── vite.config.ts          # Vite設定
├── tsconfig.json           # TypeScript設定
├── tailwind.config.js      # Tailwind CSS設定
├── netlify.toml            # Netlify設定
├── src/
│   ├── main.tsx            # Reactエントリーポイント
│   ├── App.tsx             # メインアプリケーション
│   ├── components/         # Reactコンポーネント
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Company.tsx
│   │   ├── CaseStudies.tsx
│   │   ├── Recruitment.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── styles/
│       └── globals.css     # グローバルスタイル
└── dist/                   # ビルド出力（自動生成）
```

## ✏️ コンテンツの編集

### 会社情報の変更

`src/components/Company.tsx` と `src/components/Contact.tsx` を編集してください。

### サービス内容の変更

`src/components/Services.tsx` を編集してください。

### カラーテーマの変更

`src/styles/globals.css` の CSS変数を編集するか、各コンポーネント内のグラデーション設定を変更してください。

## 🌐 デプロイ

### Netlify（推奨）

- 自動デプロイ: GitHubにプッシュすると自動的にデプロイ
- 手動デプロイ: https://app.netlify.com/drop

### Vercel

```bash
npm install -g vercel
vercel
```

### その他のホスティング

`npm run build` で生成される `dist` フォルダの中身を任意のホスティングサービスにアップロードしてください。

## 🔧 技術スタック

- **React** 18 - UIフレームワーク
- **TypeScript** - 型安全性
- **Tailwind CSS** - スタイリング
- **Motion (Framer Motion)** - アニメーション
- **Vite** - ビルドツール
- **Lucide React** - アイコン

## 📝 ライセンス

このプロジェクトは株式会社（仮）の所有物です。

## 💬 サポート

質問や問題がある場合は、お気軽にお問い合わせください。
