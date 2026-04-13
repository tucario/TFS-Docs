---
title: Buying credits
description: Top up your AI credit balance via Stripe. How checkout works, where receipts go, and how to manage invoices.
---

When you want to translate more than your plan's monthly allowance,
you can top up with additional credits at any time. Payments are
processed by **Stripe**.

## Top up flow

1. On the panel dashboard click **Buy credits**.
2. Pick a package size from the list.
3. Click **Checkout** — this opens Stripe Checkout, hosted on
   Stripe's domain. Card details are entered on Stripe's servers,
   not ours.
4. Complete payment.
5. Stripe redirects you back to the panel. A Stripe webhook fires
   on our backend, which writes a `purchases` document to
   Firestore and bumps your `ai_credits` balance atomically.
6. The new balance is visible on the dashboard within a few
   seconds.

## What we store

Every completed purchase creates a document in the Firestore
`purchases` collection with: your `uid`, the Stripe session ID,
the Stripe payment intent, amount paid, currency, and characters
purchased. We do **not** store card numbers, CVV, or any other
cardholder data.

## Receipts

Stripe sends an email receipt to the address on your TranSFlator
account at the moment the payment clears. That's the official
receipt for your records.

## Failed payments

If a payment is declined, the Stripe webhook never fires, so no
purchase is recorded and no credits are added. Nothing changes on
our side. Try again with another card.

## VAT / invoices for EU customers

Stripe issues VAT-compliant invoices through the Customer Portal.
Self-service invoice history is a planned feature on the panel;
until then, email
[hello@tucario.com](mailto:hello@tucario.com) with your account
email and we will send the PDFs.

:::note[TODO]
Screenshot of the checkout flow, example invoice. Table of
available credit packs once pricing is finalised.
:::
