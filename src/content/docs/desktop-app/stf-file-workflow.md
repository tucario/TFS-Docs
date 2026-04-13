---
title: STF file workflow
description: Import and export Salesforce Bilingual STF files for the classic Translation Workbench flow.
---

Some orgs lock down the Metadata API. Some consulting customers want
to review translations offline in Excel. For both cases, TranSFlator
supports the classic **Salesforce Bilingual STF** file format:
import an STF file, edit it in the grid, export a new one.

## Importing an STF

1. On the connections sidebar click **Import STF file**.
2. Pick the `.stf` file exported from the **Setup → Translation
   Workbench** screen in Salesforce.
3. Give it a label.

A "pseudo connection" appears with a document icon instead of a
cloud icon — indicating that this connection has no refresh token
and cannot deploy directly. You can translate rows as normal.

## Exporting an STF

With an STF connection selected, click **Export STF file** in the
toolbar. You get back a file that is round-trip compatible with the
Salesforce Translation Workbench import flow: same `Bilingual`
header, same row order, same tab separators.

## When to use this instead of direct deploy

- Your admin has disabled the Metadata API for your profile.
- You want a human reviewer to sign off on the translations in
  Excel before you touch Salesforce.
- You're a consultant and your customer wants the final file for
  their own audit trail.

## What's not preserved

STF files are string-only. Anything non-string that TranSFlator can
normally touch (layout names, record type availability, etc.)
cannot be exported this way. For the full feature set, use a real
connection.

:::note[TODO]
Screenshot of the STF import dialog, screenshot of the pseudo
connection in the sidebar, sample `.stf` file with a few rows.
:::
