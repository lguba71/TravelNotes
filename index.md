---
layout: page
title: Travel Notes
---

Short notes from routes, places, and trips.

This space collects concise observations from cycling, motorcycle, train, and occasional family travel.

---

## Latest notes

<ul>
{% for post in site.posts %}
  <li>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <small>— {{ post.date | date: "%Y-%m-%d" }}</small>
  </li>
{% endfor %}
</ul>
