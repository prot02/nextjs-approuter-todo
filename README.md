# アプリケーション説明
## ログイン画面
![login](https://github.com/user-attachments/assets/2f2992c2-dcb7-41e7-a7a5-f3264dea3239)


## TODO一覧
![board](https://github.com/user-attachments/assets/a9d703db-1614-48e5-9bf5-d74e3c77c536)


## プロフィール編集
![profile_edit](https://github.com/user-attachments/assets/2b36a346-9871-48cd-9ab3-1b1e7b554473)


# 技術的メモ
## 作成理由
- NextJsのAppRouterが登場したため、その機能を触りたかった
- Supabaseがよさそうだったので使ってみたい
- フォルダ構成など昔に決めたものをずっと使用していたためこのタイミングで変えたかった

## 使用技術
- NextJs(AppRouter)
- supabase

## やったこと
- Googleログイン
- supabaseを使ってみる
- AppRouterを使ってみる

## 今回変えた部分
- 認証をmiddlewareで実装
- serveractionを使ってみた
- axiosではなくfetchを拡張して使用
- zodによるバリデーション
- storybookを軽く触ってみる
- recoil→zustandへ移行
- フォルダ構成の大幅な変更
- Suspenseをなるべく使用して簡単にローディング画面を出すようにした

## 課題
- supabaseのRLS(Row Level Security)をONにするとデータが全く取れなかったため調査が必要
- 今回はすべてCSRのため他のプロジェクトでSSR, ISRなどを活用してみる
