---
id: projects
title: Projects
---

Projects are where you will capture user info for your queue.

## GET Project Information

To get information about a project use the `projects` endpoint.

```
curl https://api.queuey.dev/api/projects/:id
```

Response

```typescript
{
  "_id": string,
  "referral_bump_amount": number,
  "title": string,
  "member_count_total": number,
  "member_count_admitted_total": number,
  "member_count_in_queue_total": number
}
```

### The Project Object

#### \_id (string)

The unique identifier for this Project.

#### referral_bump_amount (number)

The total amount a user is bumped up the queue when they refer a friend and then the friend joins the queue.

#### title (string)

The title of this Project.

#### member_count_total (number)

The total amount of members in the queue, admitted and not admitted.

#### member_count_admitted_total (number)

The total amount of admitted members in the queue.

#### member_count_in_queue_total (number)

The total amount of members waiting in the queue currently.
