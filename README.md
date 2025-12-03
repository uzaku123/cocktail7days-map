# 🍸 東京カクテル7デイズ マップ

東京カクテル7デイズの参加バーを地図上で確認できるWebアプリケーションです。

[![Vercel](https://img.shields.io/badge/Vercel-Deploy-black?logo=vercel)](https://cocktail7days-map.vercel.app)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue?logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://reactjs.org/)
[![Leaflet](https://img.shields.io/badge/Leaflet-1.9-green?logo=leaflet)](https://leafletjs.com/)

## 🌐 デモ

**Live Demo:** [https://cocktail7days-map.vercel.app](https://cocktail7days-map.vercel.app)

## ✨ 機能

- 📍 **インタラクティブマップ**: 東京の参加バーを地図上で確認
- 🗓️ **年度別フィルター**: 過去の開催年度のデータも閲覧可能（2024年、2025年）
- 📱 **GPS対応**: 現在地からの距離を自動計算
- 🧭 **ルート案内**: Google Mapsと連携してルート案内
- 🎯 **現在地ボタン**: ワンタップで現在地に戻る
- 💾 **PWA対応**: オフラインでも基本情報を閲覧可能
- 📱 **レスポンシブデザイン**: スマホ・タブレット・PC対応

## 🚀 技術スタック

### フロントエンド
- **React** (v18) - UIフレームワーク
- **TypeScript** - 型安全な開発
- **React Leaflet** - インタラクティブマップ
- **Leaflet.js** - マップライブラリ

### デプロイ
- **Vercel** - ホスティング・CI/CD
- **GitHub** - ソースコード管理

### その他
- **Geolocation API** - 位置情報取得
- **PWA** - プログレッシブWebアプリ対応

## 📦 ローカルでの実行方法

### 必要な環境
- Node.js v18 以上
- npm または yarn

### インストール

```bash
# リポジトリをクローン
git clone https://github.com/YOUR_USERNAME/cocktail7days-map.git

# プロジェクトディレクトリに移動
cd cocktail7days-map

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm start



📂 プロジェクト構造

cocktail7days-map/
├── public/              # 静的ファイル
├── src/
│   ├── components/      # Reactコンポーネント
│   │   ├── Map.tsx           # メインマップ
│   │   ├── FilterBar.tsx     # フィルターバー
│   │   ├── LocationMarker.tsx # 現在地マーカー
│   │   └── LocationButton.tsx # 現在地ボタン
│   ├── hooks/           # カスタムフック
│   │   └── useGeolocation.ts  # GPS取得
│   ├── types/           # 型定義
│   │   └── Bar.ts             # バー型定義
│   ├── utils/           # ユーティリティ
│   │   └── distance.ts        # 距離計算
│   ├── data/            # データ
│   │   └── bars.ts            # バー情報
│   ├── App.tsx          # メインアプリ
│   └── index.tsx        # エントリーポイント
├── package.json
└── README.md


🗺️ データ構造

Bar型
Copyinterface Bar {
  id: string;
  name: string;
  address: string;
  location: {
    lat: number;
    lng: number;
  };
  area: string;
  participation_years: {
    year: number;
    theme: string;
    cocktails: {
      id: string;
      name: string;
      description: string;
    }[];
  }[];
  opening_hours?: string;
  phone?: string;
}


🔧 開発
新しいバーを追加
src/data/bars.ts を編集：

Copy{
  id: 'bar006',
  name: 'Your Bar Name',
  address: '東京都〇〇区〇〇',
  location: {
    lat: 35.xxxx,
    lng: 139.xxxx
  },
  area: 'shibuya',
  participation_years: [
    {
      year: 2025,
      theme: 'IF',
      cocktails: [
        {
          id: 'cocktail008',
          name: 'Cocktail Name',
          description: 'Description'
        }
      ]
    }
  ]
}


デプロイ

Copy# 変更をコミット
git add .
git commit -m "feat: 新しい機能を追加"
git push

# Vercelが自動的にデプロイ


🎯 今後の予定
 実際の参加バー約110店舗のデータ追加
 バー詳細ページの実装
 お気に入り機能
 バー一覧サイドバー
 エリア別フィルター強化
 カクテル名での検索機能
 レビュー投稿機能
 ルート最適化機能（複数バーの最短ルート）


📄 ライセンス
MIT License

👤 作成者
yama

GitHub: @uzaku123

🙏 謝辞
東京カクテル7デイズ - イベント情報
OpenStreetMap - 地図データ
Leaflet - マップライブラリ

📮 フィードバック
バグ報告や機能リクエストは、Issuesからお願いします。

⭐ このプロジェクトが役に立ったら、スターをお願いします！
