---
title: AI credits
description: How credits work, what costs how many credits, and how the monthly renewal cycle works.
---

AI credits are the unit TranSFlator uses to bill you for AI work.
One credit equals one character of source text sent to an AI
engine.

## Why per character, not per engine

Different AI engines have wildly different raw pricing. If we billed
you in the engines' native units you'd never know ahead of time
what a batch would cost. Per-character billing means:

- **Predictable cost** — a 10-character field label is 10 credits
  regardless of which engine you pick.
- **Engine swapping is free** — you can use Gemini for one batch
  and Claude for the next and the balance ticks down the same.
- **Fixed margin** — we absorb the engine price variance so you
  don't have to.

## What's counted

Only the **source** string is metered. The translation that comes
back is free.

A batch's cost is roughly: `sum of source_string.length for each row
in the batch`. Cancelling a batch mid-flight only charges you for
the rows that actually completed.

## Balance and renewal

Your current balance shows on the dashboard and refreshes live.
Free accounts get a starter balance that renews on a 30-day cycle
at the same amount. Paid accounts get a monthly allowance that
renews on the first day of each billing cycle.

At the moment the credit cycle rolls over, two things happen:

1. Your `ai_credits` field is reset to the plan's renewal amount.
2. Your translation history in the `translations` collection is
   purged — see [Delete your account](/account-panel/delete-account/)
   for the GDPR-minimisation rationale.

## Running out

If you run out of credits mid-batch, the batch pauses and the grid
shows a "top up required" message. Finished rows are kept; the
remaining rows wait until you top up.

:::note[TODO]
Pricing table for the paid plans once pricing is finalised. Note
on how characters-per-language translate to approximate field
counts.
:::
