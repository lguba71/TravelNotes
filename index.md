---
layout: page
title: Túrajegyzetek
---

Rövid jegyzetek túrákról, útvonalakról és helyekről.

Nem útikönyv, inkább személyes emlékeztető: merre jártam, mi volt érdekes, mit érdemes megjegyezni, és hova lenne jó visszatérni.

---

## Legutóbbi jegyzetek

<ul>
{% for post in site.posts %}
  <li>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <small>— {{ post.date | date: "%Y-%m-%d" }}</small>
  </li>
{% endfor %}
</ul>
