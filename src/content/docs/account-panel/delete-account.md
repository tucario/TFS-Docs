---
title: Delete your account
description: How to permanently delete your TranSFlator account and everything we hold about you. Covers GDPR Art. 17 (right to erasure).
---

You can delete your TranSFlator account at any time. Deletion is
irreversible, cascades across every piece of data we hold, and
completes within 30 days.

## Self-service deletion

1. Sign in to [panel.transflator.com](https://panel.transflator.com).
2. Open **Settings → Account**.
3. Click **Delete my account**.
4. Confirm by re-typing your email.
5. Click **Permanently delete**.

## What happens next

A Cloud Function fires and, in a single transaction:

- Deletes your document from the `users` collection.
- Deletes every row in the `purchases` collection where
  `uid == your_uid`.
- Deletes every row in the `translations` collection where
  `user_id == your_uid`.
- Deletes your Firebase Auth record, invalidating any active
  sessions.
- Writes an audit log entry with the deletion timestamp and
  user hash.

Your API token is invalidated immediately. The desktop app, if
running, will fail its next call with `401 Unauthorized`.

## What stays

Two things are retained after account deletion, for reasons
outside our control:

- **Stripe purchase records** — Stripe keeps payment records for
  their own PCI and financial-regulation reasons. You can request
  deletion directly from Stripe if needed.
- **Billing data needed for Polish accounting law** — invoices
  issued against your account are retained for 5 years under
  Art. 74 of the Polish Accounting Act. These contain your name
  and payment details but nothing about your translation work.

## GDPR Article 20 — data export

If you want a machine-readable copy of your data **before**
deletion, email
[hello@tucario.com](mailto:hello@tucario.com) and we will send you
a JSON export within 30 days. A self-service export button is
planned for the profile screen.

:::note[TODO]
Screenshot of the delete dialog. Link to privacy policy once
published at transflator.com/privacy.
:::
