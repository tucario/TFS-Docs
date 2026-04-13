---
title: Install the desktop app
description: Download TranSFlator for macOS or Windows and run it for the first time.
---

TranSFlator is a native desktop app. There is no browser version of
the translation workspace — the grid, the OAuth flow, and the local
encrypted token store all live in the app on your machine.

## Download

Grab the latest build from the download page on
[transflator.com](https://transflator.com/download):

- **macOS** — universal `.dmg`, signed and notarized, runs on both
  Apple Silicon and Intel machines from macOS 12 and up.
- **Windows** — `.msi` installer, 64-bit, Windows 10 and up.

## First run

On macOS the app will prompt for permission to store a key file in
`~/Library/Application Support/TranSFlator`. That file is the
per-machine AES-256 encryption key used to secure Salesforce refresh
tokens on disk. It is chmod 600 and never leaves your machine.
See [Security](/security/) for the full threat model.

On Windows the equivalent path is
`%APPDATA%\TranSFlator`.

## Sign in

The first thing the app asks for is your TranSFlator account email
and password. If you don't have an account yet, open
[panel.transflator.com](https://panel.transflator.com), sign up
(free), verify your email, and come back. See
[Sign up & verify email](/account-panel/sign-up/) for details.

After sign-in, the app exchanges your credentials for an API token
with the TranSFlator backend and caches it locally. From now on the
token — not your password — is used for translation API calls.

## Next

Once you're signed in, go to
[Connect your Salesforce org](/getting-started/connect-your-org/).

:::note[TODO]
Add screenshots for macOS and Windows first-run dialogs.
:::
