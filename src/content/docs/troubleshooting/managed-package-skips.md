---
title: Managed package skips
description: Why TranSFlator marks some fields as untranslatable, what a "managed package" actually is, and how to translate help text on managed packages you own.
---

TranSFlator automatically marks fields and elements owned by
**managed packages** as read-only in the grid. If you're wondering
why your favourite field is greyed out, this page is for you.

## What "managed package" means

A managed package is an app installed into your Salesforce org
from AppExchange (or from your own ISV development org). Fields,
objects, labels, and layouts that came in with a managed package
have a namespace prefix like `ns__FieldName__c`.

Salesforce locks the metadata of these components. **Even a
System Administrator cannot edit a managed-package field's
translation from a consuming org** — only the managed package's
developer can, and only from the developer org.

TranSFlator detects the namespace prefix at scan time and greys
out every component with one. It's not a bug — it's protecting
you from deploys that would fail with
"Managed package component cannot be modified".

## "But I own the managed package"

Then you need to translate it **from your development org**, not
from the customer org that installed it. Here's the flow:

1. Open TranSFlator and connect to your **managed package
   development org** (the one you cut releases from).
2. Scan. Fields in your namespace will now appear as editable.
3. Translate and deploy normally.
4. Cut a new version of the managed package.
5. Customer orgs pick up the new translations on their next
   package upgrade.

## Unmanaged and first-generation-managed packages

Unmanaged packages have no namespace and are fully editable
everywhere. Treat them like any other component — TranSFlator
won't skip them.

First-generation-managed package components installed as
**beta** (not released) are also editable for the developer, but
not for consumers.

## Custom Labels

Custom Labels behave slightly differently: `Protected` custom
labels in a managed package are locked the same way fields are.
`Public` custom labels *can* be overridden per language in the
consuming org, and TranSFlator does allow this — but the
override is only visible in the consuming org, not in the
upstream package.

:::note[TODO]
Concrete screenshots of the read-only grey-out in the grid and
the managed-package flag in the metadata panel. Document the
exact API version TranSFlator uses to detect namespace.
:::
