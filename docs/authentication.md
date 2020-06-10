---
id: authentication
title: Authentication
sidebar_label: Authentication
---

The Queuey API uses API Keys to authenticate requests. You can view and manage your API keys in the Queuey Dashboard.

When interacting with the Queuey REST API you have to pass an API key to the Authentication header. If you don't, the request will fail.

Throughout the documentation our examples are all shown using the cURL command and [Axios](https://github.com/axios/axios).

## Base URL

```
https://queuey.dev/api
```

## Authentication

When making requests, ensure you pass in the `authorization` header with your `authToken`

<!-- https://oauth.net/getting-started/ -->

```bash
curl https://queuey.dev/api \\
  -H authorization="Bearer <authToken>"
```
