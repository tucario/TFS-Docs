---
title: OAuth errors
description: Fix the common OAuth errors you can hit when connecting a Salesforce org — redirect mismatches, expired sessions, revoked tokens.
---

Most OAuth errors are boring and fall into one of four buckets.
Here's how to tell them apart and fix them.

## "redirect_uri mismatch"

**Symptom:** Salesforce shows a generic error page instead of the
"Allow" screen, with `error=redirect_uri_mismatch` in the URL.

**Cause:** the TranSFlator Connected App in Salesforce is
configured with a callback URL that doesn't match what the app
actually uses (`http://localhost:1717/oauth/callback`).

**Fix:** this should never happen for customers — it would mean
our Connected App metadata got corrupted. If you hit it, email
[hello@tucario.com](mailto:hello@tucario.com) with the URL from
your browser.

## "invalid_grant" on token exchange

**Symptom:** the browser redirects back correctly, but the app
shows "authentication failed".

**Cause:** the authorization code expired before the app could
exchange it. Happens if you took longer than a minute on the
Salesforce permission screen.

**Fix:** click **Add Connection** again and go through the flow
without pausing.

## "session expired or invalid"

**Symptom:** the connection was working yesterday, today clicking
it shows a red dot and "Session expired".

**Cause:** your refresh token was revoked. This happens when:

- An admin clicked **Revoke** on the TranSFlator Connected App in
  Salesforce's Connected Apps OAuth Usage screen.
- Your Salesforce user's password was reset (Salesforce revokes
  all refresh tokens on password change).
- Your org has a "refresh token validity" policy that just ticked
  over.

**Fix:** click the connection, the app will prompt you to
re-authorise. Step through the OAuth flow and you're back in.

## "IP address not allowed"

**Symptom:** Salesforce rejects the OAuth request with
`restricted_access` or similar.

**Cause:** your org has **Login IP Ranges** set on the profile you
authenticated as, and your current IP isn't in the range.

**Fix:** connect from an allowed IP (office VPN, etc.), or ask
your admin to relax the profile's IP range for your user.

:::note[TODO]
Add concrete error screenshots. Document the specific audit-log
entries to look for in Salesforce Setup when debugging.
:::
