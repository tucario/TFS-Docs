---
title: Deploying to Salesforce
description: Push translations back to your Salesforce org via the Metadata API. Atomic with rollback, component-level error reporting.
---

Deploying takes the translated rows from your grid and pushes them
back to Salesforce using the Metadata API. It is the last step of
the normal workflow.

## What gets deployed

Only rows that are (a) non-empty in the target language column, and
(b) changed since the last successful deploy for this connection.
Unchanged rows are skipped. Rows you haven't touched remain
untouched.

## Atomic with rollback

Deploys are submitted as a single Metadata API transaction. If any
component fails validation on Salesforce's side, the **whole
deploy is rolled back** and you see a dialog listing every
component that failed and why. Your org is never left in a
half-applied state.

![The deploy dialog while TranSFlator is pushing 273 modified translations to the DQS Playground org.](../../../assets/screenshots/06-deploying-to-salesforce.png)

## Component-level errors

The error view shows:

- The Salesforce metadata key that failed (e.g.
  `Account.Industry__c.Label.fr`)
- The verbatim error message from Salesforce
- A **Skip and retry** button that excludes the failing row and
  reattempts the deploy

## Managed packages

Salesforce does not allow modifying metadata of fields owned by a
managed package you haven't built yourself. TranSFlator detects
these at scan time and marks them read-only in the grid, so you
don't waste time trying to translate something that will never
deploy.

## Log

Every deploy is recorded in the local `deployment_log` table with
timestamp, connection, number of components, and the final status.
Nothing is sent to our backend.

When the deploy finishes you get a summary showing how many
components were actually applied and how many were skipped because
Salesforce's API refuses to touch them (for example standard
picklists whose values are owned by the platform):

![The "Deploy Complete" summary with 243 translations deployed and 30 standard picklists skipped.](../../../assets/screenshots/07-deploy-complete.png)

Skipped entries can be exported via **Generate STF** and imported
with the Salesforce Translation Workbench, which is the only tool
allowed to touch those records.
