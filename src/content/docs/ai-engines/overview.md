---
title: Engines overview
description: How the four AI translation engines compare on speed, language coverage, cost shape, and data residency.
---

TranSFlator supports four AI translation engines out of the box.
All four are accessed through the same **TranSFlator backend**,
which means:

- **You don't need provider API keys.** Credits on your account
  cover any engine.
- **You don't talk to the provider directly** from the desktop
  app — the backend does, over TLS, with appropriate regional
  endpoints based on your choice.
- **You can switch engines between batches.** There is no
  per-engine setup overhead.

## Quick comparison

| Engine | Best for | Speed | Language coverage | Data residency options |
| --- | --- | --- | --- | --- |
| **Google Gemini** | Everyday business copy, broad language reach | Fast | 100+ | US, EU, Asia, Australia |
| **Anthropic Claude** | Nuanced copy, long strings, brand-voice work | Medium | 95+ | US, EU |
| **Mistral** | Privacy-sensitive EU deployments | Fast | 40+ (strong on EU languages) | EU-only |
| **DeepSeek** | Asian languages (CJK, Vietnamese, Thai, Indonesian) | Very fast | 80+, strong on Asian | non-EEA |

All costs are billed to you in TranSFlator credits at a flat
per-character rate regardless of which engine you pick. Behind the
scenes the backend absorbs the price difference between engines.

## Picking one

- **Doesn't matter / just want results?** Use Gemini. It's the
  default and it's very good.
- **Sensitive content, brand-voice work, legal text?** Claude. The
  extra care is worth it.
- **Must stay in the EU?** Mistral.
- **Translating into Chinese, Japanese, Korean, or other Asian
  languages?** DeepSeek — it's trained with a much heavier Asian
  language weighting than the others.

## Per-engine pages

- [Google Gemini](/ai-engines/gemini/)
- [Anthropic Claude](/ai-engines/claude/)
- [Mistral](/ai-engines/mistral/)
- [DeepSeek](/ai-engines/deepseek/)

:::note[TODO]
Real benchmark data: accuracy scores per engine on a fixed corpus
of 1000 Salesforce field labels in 5 target languages, with
evaluator notes.
:::
