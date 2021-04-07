---
id: members
title: Members
---

## Retrieve a Member for a Project

Get information about a member who has joined a Project.

```
curl https://api.queuey.dev/api/projects/:id/members?email=<user_email_address>
```

### Retrieve Member Response

```json
{
  "admitted": false,
  "_id": "5ee622e1c9e3608bdfb06682",
  "name": "karl",
  "email": "karl@queuey.dev",
  "project_id": "5e8f80de50e3da30922f45f1",
  "position": 1,
  "share_url": "karl3519",
  "referral_code": null,
  "__v": 0
}
```

## Add a Member to a Project

```bash
curl https://api.queuey.dev/api/projects/:id/members \
  -H authorization="Bearer <your_auth_token_here>" \
  -d name="Karl" \
  -d email="karl@queuey.dev"
```

### Add Member Response

```json
{
  "admitted": false,
  "_id": "5ee622e1c9e3608bdfb06682",
  "name": "karl",
  "email": "karl@queuey.dev",
  "project_id": "5e8f80de50e3da30922f45f1",
  "position": 1,
  "share_url": "karl3519",
  "referral_code": null,
  "__v": 0
}
```
