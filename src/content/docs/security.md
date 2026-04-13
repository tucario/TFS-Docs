---
title: Security
description: TranSFlator's security model — PKCE OAuth, AES-256 token storage, zero telemetry, where your data goes and where it doesn't.
---

The short version: **your Salesforce tokens never leave your
machine, and we never phone home with your data**. The desktop app
is local-first by design, the account panel only stores what it
needs to bill you, and nothing anywhere does analytics.

## OAuth 2.0 with PKCE (S256)

When you connect a Salesforce org, the desktop app runs the
standard Salesforce OAuth 2.0 Web Server Flow — **with PKCE,
using the SHA-256 code challenge method**.

What this means in practice:

- The app generates a 32-byte cryptographically random **code
  verifier** per login attempt.
- It computes the SHA-256 hash of that verifier and sends the
  hash as the `code_challenge` parameter.
- Salesforce redirects back to `http://localhost:1717/oauth/callback`
  with an authorization code. The loopback listener never exposes
  anything to the network.
- The app exchanges the code for tokens **directly with Salesforce**,
  sending the original verifier as proof. Our backend is **not**
  in the middle of this exchange.

A stolen authorization code is useless without the matching
verifier, which the app never sends over the wire.

## AES-256-CBC encrypted refresh tokens

Refresh tokens are stored locally, encrypted with **AES-256-CBC**.

- The 256-bit key is generated once per install, from the OS's
  cryptographically secure random source, and stored in a file
  called `.enc_key` in `Application Support`, `chmod 600`.
- A fresh 16-byte IV is generated for each write and prepended to
  the ciphertext.
- The encrypted file is `transflate.db` in the same directory.
- **Access tokens are never written to disk.** They live in
  process memory only. When the app quits, they're gone; the
  next time you click the connection, the app re-exchanges the
  refresh token for a new access token.

## Zero telemetry

The desktop app ships with **no analytics SDK of any kind**. No
PostHog, no Sentry, no Firebase Analytics, no Crashlytics, no
Mixpanel, no Amplitude. Grep the source if you don't believe us.

The only outbound network calls the app makes are:

- To Salesforce (OAuth + Metadata API), on the instance URL you
  yourself chose
- To your chosen AI provider (via the TranSFlator backend)
- To `transflator-api.web.app` for license validation, your
  account info, and the batch translation endpoint — all over
  TLS

Nothing else.

## HTTPS everywhere

Every outbound call except the OAuth loopback uses TLS 1.2 or
higher. The OAuth loopback is plaintext over `127.0.0.1` — that
traffic literally never leaves your machine, so TLS adds nothing.

## Session re-validation on every connect

Every time you click a connection to open it, the app hits
`/services/data/v65.0/` to validate the session. Stale or revoked
tokens are detected immediately and prompt you to re-authorise.
Nothing runs against an invalid session.

## Bring your own AI provider key? No.

TranSFlator handles provider keys on the backend — you don't need
to paste an OpenAI key, a Google key, or anything similar. The
benefit is onboarding time (zero); the trade-off is that all
translation calls go through our backend, which is a trust
boundary you need to be comfortable with. See
[the privacy policy](https://transflator.com/privacy) for what
that means in practice.

## What's in the `transflate.db` file?

- **`connections`** — your saved org labels, instance URLs,
  environment type, last tested timestamp
- **`tokens`** — AES-encrypted refresh tokens, one per connection
- **`workspace`** — cached metadata scan results
- **`deployment_log`** — local history of deploys you initiated

Delete this file to wipe everything except your `.enc_key`.
Delete `.enc_key` too and the next run will generate a fresh one.

:::note[TODO]
Add diagrams of the OAuth flow and the data-residency routing.
Add a section on macOS code signing and notarisation, Windows
SmartScreen, and what happens when Apple/Microsoft revoke a
signing cert.
:::
