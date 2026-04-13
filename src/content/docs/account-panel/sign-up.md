---
title: Sign up & verify email
description: Create a TranSFlator account on the web panel, verify your email, and get your starter credits.
---

The account panel at
[panel.transflator.com](https://panel.transflator.com) is where you
create the account that the desktop app signs in against. It's a
Flutter Web application backed by Firebase.

## Sign up

1. Open [panel.transflator.com](https://panel.transflator.com).
2. Click **Sign up**.
3. Enter your email address and a strong password.
4. Click **Create account**.

Your account is created in Firebase Auth and a corresponding
document is written to the Firestore `users` collection with your
starter AI credit balance and a generated API token.

## Verify your email

Immediately after sign-up, a transactional email goes out to the
address you registered, containing a one-click verification link.
The link is valid for **48 hours**. Until you click it, you cannot
top up credits or run translations that cost credits.

Didn't get the email? Check your spam folder first, then click
**Resend verification** on the panel.

## Starter credits

New accounts are seeded with a free starter AI credit balance so
you can evaluate the product without paying. The amount and
renewal cadence is shown on the dashboard. Paid plans are not
required for the evaluation period.

## Password reset

If you forget your password, click **Forgot password** on the sign
in screen. A reset email goes out via the same transactional
pipeline, with a link valid for 1 hour.

:::note[TODO]
Screenshots of the sign-up screen, verification email, and
dashboard after first login. Note on the free-tier character limit.
:::
