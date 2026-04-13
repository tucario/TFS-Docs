---
title: Deploy failures
description: How to read deploy-failure dialogs, what the common causes are, and what to do when a deploy rolls back.
---

When a deploy fails, TranSFlator rolls the whole thing back (see
[Deploying to Salesforce](/desktop-app/deploying/)) and shows you
a dialog with every failing component. The verbatim text comes
from Salesforce — we don't editorialise it. This page is the guide
to the most common error messages.

## "INVALID_CROSS_REFERENCE_KEY"

The target of the translation doesn't exist in the org anymore
(e.g. a custom field that was deleted since the last scan).

**Fix:** re-scan the org with **Refresh metadata** and retry. The
stale row will disappear from the grid.

## "Managed package component cannot be modified"

You tried to translate a field owned by a managed package, and
Salesforce doesn't allow that even for admin users.

**Fix:** TranSFlator should have marked these read-only before
you got here. If you're seeing it mid-deploy, it means the scan
didn't pick up the managed-package flag — click **Skip and retry**
to exclude the component and continue. Let us know if this
repeats: it's a bug on our side.

## "Required field missing"

Salesforce expected the translation file to include a field the
grid didn't send. Happens when you partially translate a Record
Type and leave the picklist values behind.

**Fix:** open the Record Type in the grid, complete the missing
rows, and retry.

## "Insufficient access rights on cross-reference id"

Your connected user doesn't have the permission to modify the
object this translation belongs to.

**Fix:** either permission-set your user, or authenticate with a
user who has the access. Safest move: create a dedicated
"translation admin" user with permission on every object you
want to translate.

## Everything else

Copy the exact error text from the dialog and paste it into
[hello@tucario.com](mailto:hello@tucario.com). Include the
Salesforce `componentType`, the metadata key, and the line the
error mentions. We will either tell you how to fix it or add the
case to this page.

:::note[TODO]
Start a table of specific error codes with links to Salesforce
documentation. Script that exports the deploy log to a sharable
text file for support.
:::
