---
title: Profile
description: Your account details, preferred AI engine, password and email changes, and the delete-account entry point.
---

The **Profile** screen is the last entry in the panel sidebar.
Everything that isn't billing or translation history lives here.

![The Profile screen — an account header with the user's email, member-since date, and a Verified badge, a Preferred AI Engine card showing Mistral AI (Europe) with a Change AI Engine button, a Security card with Password and Email address rows each with a Change button, and a red Danger Zone card with a Delete account row and a Delete button.](../../../assets/screenshots/panel/profile.png)

## Account header

Shows your sign-in email (masked in screenshots), your
member-since date, and a **Verified** badge once you've confirmed
the email. If the badge is missing, go back and finish
[email verification](/account-panel/sign-up/#verify-your-email).

## Preferred AI engine

A summary of the engine currently set as your default, with a
**Change AI Engine** button. Clicking it reopens the same
engine-picker you saw during onboarding (see
[Dashboard — first-run onboarding](/account-panel/dashboard/#first-run-onboarding)).

Changing the engine here updates the `preferred_ai_model` field
on your user document; new translations (panel, desktop, API
without an explicit `engine`) pick it up immediately.

## Security

Two standalone actions:

- **Password — Change** — opens a dialog that re-asks for your
  current password, then takes the new one twice. Updating
  succeeds atomically in Firebase Auth; no other sessions are
  signed out, so if you changed because of a suspected leak,
  rotate your [API token](/account-panel/api-token/) too.
- **Email address — Change** — sends a verification link to the
  new address. The change only takes effect once you click that
  link; until then, sign-in still works with the old address.

## Danger Zone

A red-bordered card at the bottom of the screen. The only action
is **Delete account**, and it's deliberately set apart so it
can't be clicked by mistake. Clicking **Delete** starts the
cascade described in [Delete your account](/account-panel/delete-account/).

Deletion is **irreversible** and removes your user document,
purchase history, translation history, and Firebase Auth record.
Read the linked page before clicking.
