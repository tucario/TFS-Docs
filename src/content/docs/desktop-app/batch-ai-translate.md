---
title: Batch AI translation
description: Translate hundreds or thousands of rows in one pass. Pick an engine, pick a region, watch progress, handle failures.
---

Batch AI translation is the feature that makes TranSFlator worth
installing. Select rows, click **AI all**, pick an engine, and the
app streams translations back from the AI provider into the grid as
they come.

## Starting a batch

1. Filter and search the grid until only the rows you want to
   translate are visible.
2. Click **Select all visible** (⌘/Ctrl + Shift + A).
3. Click **AI all** in the toolbar.
4. Pick an engine and a region.
5. Confirm.

## Engine selection

The picker shows every engine you have enabled on your account and
the estimated cost for the selected rows. See
[Engines overview](/ai-engines/overview/) for the comparison.

## Region selection

Where geographically the translation request is processed. Relevant
for data-residency requirements — some AI providers let you pick
between US, EU, Asia, and Australia. TranSFlator forwards your
region choice to the backend, which in turn routes the request to
the correct provider endpoint.

## Live progress

A banner at the bottom shows rows completed / total, current rate,
and estimated time remaining. You can cancel mid-batch — rows that
already came back are kept in the grid (not yet saved to the
workspace; save with ⌘/Ctrl + S).

## Failures

If the AI provider rejects a specific row (too long, unsupported
characters, content-policy block), that row stays empty and the
error is logged in the sidebar. Failed rows can be retried
individually or skipped entirely.

## Cost model

Each batch consumes AI credits from your account balance. Credits
are consumed per-character of the **source** string, not per row —
a 10-character field label costs 10 credits no matter which engine
you use. See [AI credits](/account-panel/ai-credits/) for the full
pricing model.

![A batch translation running to Brazilian Portuguese — 100 out of 273 rows done, 37% complete.](../../../assets/screenshots/05-translating-progress.png)

The progress bar at the top of the grid is live: rows get filled
in as the AI responds, and **Stop** cancels the remaining requests
without losing the rows that already came back.
