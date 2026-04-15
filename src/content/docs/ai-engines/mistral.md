---
title: Mistral
description: Mistral is EU-only — headquartered in France, EU data centers, ideal for data-residency-strict deployments.
---

<img src="/engine-logos/mistral.svg" alt="Mistral logo" width="96" height="96" />

Mistral is the privacy-first option. It's headquartered in France,
runs on EU infrastructure, and is the right pick if your legal
team has told you "nothing leaves the EU".

## Strengths

- **EU data residency by design.** No SCCs needed because nothing
  is transferred outside the EEA.
- **Fast.** Comparable to Gemini on batch throughput.
- **Strong on major EU languages** — French, German, Italian,
  Spanish, Polish, Dutch.

## Weaknesses

- **Smaller language coverage** — around 40 languages vs 100+ for
  Gemini. Some Asian and African languages are missing.
- **Less tuned for long-form tone** than Claude. Fine for field
  labels, weaker for onboarding copy.

## When to pick it

- EU-regulated customers (healthcare, financial services, public
  sector, insurance) with an internal "no non-EU cloud" rule.
- Any time an enterprise DPA conversation starts with "we need
  this to stay in the EU".
- When GDPR data-transfer risk is a hard gate.

:::note[TODO]
Exact Mistral region used by the TranSFlator backend. Note on
Mistral's rate limits on very large batches.
:::
