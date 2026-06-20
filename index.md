---
layout: page
title: Túrajegyzetek
---

Rövid jegyzetek túrákról, útvonalakról és helyekről.

Nem útikönyv, inkább személyes emlékeztető: merre jártam, mi volt érdekes, mit érdemes megjegyezni, és hova lenne jó visszatérni.

---

## Legutóbbi jegyzetek

<ul class="note-list latest-note-list">
{% for post in site.posts limit:5 %}
  <li>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
    <small>— {{ post.date | date: "%Y-%m-%d" }}</small>
  </li>
{% endfor %}
</ul>

<details class="year-archive__group">
  <summary>2026</summary>
  <ul class="note-list">
  {% for post in site.posts %}
    {% assign post_year = post.date | date: "%Y" %}
    {% if post_year == "2026" %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <small>— {{ post.date | date: "%Y-%m-%d" }}</small>
      </li>
    {% endif %}
  {% endfor %}
  </ul>
</details>

<details class="year-archive__group">
  <summary>2025</summary>
  <ul class="note-list">
  {% for post in site.posts %}
    {% assign post_year = post.date | date: "%Y" %}
    {% if post_year == "2025" %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <small>— {{ post.date | date: "%Y-%m-%d" }}</small>
      </li>
    {% endif %}
  {% endfor %}
  </ul>
</details>

<details class="year-archive__group">
  <summary>2024</summary>
  <ul class="note-list">
  {% for post in site.posts %}
    {% assign post_year = post.date | date: "%Y" %}
    {% if post_year == "2024" %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <small>— {{ post.date | date: "%Y-%m-%d" }}</small>
      </li>
    {% endif %}
  {% endfor %}
  </ul>
</details>
