---
title: What TranSFlator is
description: A one-page tour of what the product does, who it's for, and how the desktop app, account panel, and AI engines fit together.
---

TranSFlator translates your entire Salesforce org with AI, without
spreadsheets, without Workbench, without writing a line of Apex.

It's built for Salesforce administrators, architects, and consultancy
teams who need to localise custom fields, picklist values, record
types, help text, layouts, web links, validation rules, and custom
labels across many languages, and who have run out of patience with
manual STF file shuffling.

## How the pieces fit together

TranSFlator has three components. You'll meet all of them over the
next few pages:

1. **The desktop app** (macOS and Windows) — the thing you actually
   use to work on your translations. It scans your org, holds your
   connection, runs the AI, and pushes metadata back to Salesforce.
   It's fully local; nothing you don't explicitly translate ever
   leaves your machine.

2. **The account panel** at
   [panel.transflator.com](https://panel.transflator.com) — where
   you sign up, top up AI credits, generate your API token, and
   manage billing.

3. **The AI engines** — Google Gemini, Anthropic Claude, Mistral, or
   DeepSeek. You pick which one runs each batch. Prices, speed, and
   language strengths differ; the desktop app lets you switch per
   batch.

## Who this is for

- **Admins running multi-region Salesforce orgs** who need to ship
  localisation faster than their translation agency can quote for.
- **Consultants** rolling out the same managed-package to multiple
  customers in different languages.
- **ISVs** with a managed package whose help text needs to live in
  five languages on day one.

## Who this is *not* for

- Anyone translating fewer than 100 strings per year. It works, but
  the setup cost isn't worth it — just use the native Translation
  Workbench.
- Anyone who needs human-grade literary translation. AI engines are
  excellent for UI copy and business terminology; they are not a
  replacement for a professional translator on a marketing campaign.

## Next

Head to [Install the desktop app](/getting-started/install/) to get
running.
