---
title: デスクトップアプリのインストール
description: macOSまたはWindows用のTranSFlatorをダウンロードし、初めて実行します。
---

TranSFlatorはネイティブデスクトップアプリです。翻訳ワークスペースのブラウザ版はありません。グリッド、OAuthフロー、およびローカルの暗号化トークンストアはすべて、お客様のマシンのアプリ内に存在します。

## ダウンロード

[transflator.com](https://transflator.com/download)のダウンロードページから最新のビルドを入手してください。

- **macOS** — ユニバーサル `.dmg`。署名および公証済みで、macOS 12以降のAppleシリコンおよびIntelマシンの両方で動作します。
- **Windows** — `.msi` インストーラー。64ビット。Windows 10以降。

## 初回実行

macOSでは、`~/Library/Application Support/TranSFlator`にキーファイルを保存するための許可を求められます。このファイルは、ディスク上のSalesforceリフレッシュトークンを保護するために使用される、マシンごとのAES-256暗号化キーです。このファイルは `chmod 600` であり、お客様のマシン外に出ることはありません。詳細な脅威モデルについては、[セキュリティ](/ja/security/)を参照してください。

Windowsでの同等のパスは `%APPDATA%\TranSFlator` です。

## サインイン

アプリが最初に求めるのは、TranSFlatorアカウントのメールアドレスとパスワードです。まだアカウントをお持ちでない場合は、[panel.transflator.com](https://panel.transflator.com)を開いて新規登録（無料）し、メールアドレスを検証してから戻ってきてください。詳細については、[新規登録とメール検証](/ja/account-panel/sign-up/)を参照してください。

サインイン後、アプリは認証情報をTranSFlatorバックエンドと通信するためのAPIトークンに交換し、ローカルにキャッシュします。以降、翻訳APIの呼び出しにはパスワードではなく、このトークンが使用されます。

## 次のステップ

サインインが完了したら、[Salesforce組織の接続](/ja/getting-started/connect-your-org/)に進んでください。

:::note[TODO]
macOSとWindowsの初回実行ダイアログのスクリーンショットを追加。
:::
