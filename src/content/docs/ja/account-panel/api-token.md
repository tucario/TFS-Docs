---
title: API トークン
description: 個人用 API トークンの生成、コピー、ローテーション、および無効化。デスクトップアプリや直接の API 呼び出しで使用されます。
---

すべての TranSFlator アカウントには、1 つの **API トークン**（翻訳 API 呼び出しのために TranSFlator バックエンドに対してアカウントを認証する長いランダムな文字列）があります。

通常、これを意識する必要はありません。デスクトップアプリはサインイン時に自動的に使用します。直接操作する必要があるのは、独自のコード（CI/CD パイプラインなど）から翻訳 API を呼び出したい場合のみです。

## 場所

パネル内の **プロフィール → API トークン** にあります。トークンには **コピー** ボタンと **再生成** ボタンが表示されています。

## 再生成（ローテーション）

**再生成** をクリックすると、現在のトークンが無効になり、新しいトークンが発行されます。トークンが漏洩した可能性がある場合（公開リポジトリへのプッシュ、チャットへの投稿、ログファイルへの残存など）、または定期的なローテーションの一環として使用してください。

再生成後、古いトークンですでにサインインしているデスクトップアプリは、次の API 呼び出しで `401 Unauthorized` を受け取り、再サインインを求められます。

## 直接使用する

翻訳 API を呼び出す際、`Authorization` ヘッダーに Bearer トークンとして送信します。

```bash
curl -X POST https://transflator-api.web.app/translate/batch \
  -H "Authorization: Bearer <YOUR_API_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "strings": ["Account name", "Industry", "Annual revenue"],
    "target_language": "pl",
    "engine": "gemini"
  }'
```

レスポンスは、入力と同じ順序の翻訳済み文字列の JSON 配列です。

:::note[TODO]
すべてのエンドポイント（`/translate/batch`、`/me`、`/packages`）、エラーコード、レート制限を含む完全な API リファレンス。これは独自のセクションになります。
:::
