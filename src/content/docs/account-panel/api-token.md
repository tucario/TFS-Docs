---
title: API token
description: Generate, copy, rotate, and revoke your personal API token. Used by the desktop app and for direct API calls.
---

Every TranSFlator account has a single **API token** — a long random
string that authenticates your account against the TranSFlator
backend for translation API calls.

You don't normally need to think about it. The desktop app uses it
automatically when you sign in. The only time you interact with it
directly is when you want to call the translation API from your
own code (e.g. a CI/CD pipeline).

## Where it lives

On the panel → **Profile → API token**. The token is shown with a
**Copy** button and a **Regenerate** button.

## Regenerate (rotate)

Click **Regenerate** to invalidate the current token and issue a
new one. Use this if you think the token has leaked — pushed to a
public repo, posted in chat, left in a log file — or simply as
part of a regular rotation schedule.

After regeneration, any desktop app already signed in with the
old token will get a `401 Unauthorized` on its next API call and
will prompt you to sign back in.

## Using it directly

Send it as a Bearer token in the `Authorization` header when
calling our translation API:

```bash
curl -X POST https://transflator-api.web.app/translate/batch \
  -H "Authorization: Bearer <YOUR_API_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{
    "strings": ["Account name", "Industry", "Annual revenue"],
    "target_language": "pl",
    "engine": "gemini"
  }'
```

The response is a JSON array of translated strings in the same
order as the input.

:::note[TODO]
Full API reference with every endpoint (`/translate/batch`, `/me`,
`/packages`), error codes, rate limits. This will become its own
section.
:::
