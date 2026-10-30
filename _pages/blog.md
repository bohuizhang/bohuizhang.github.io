---
layout: page
title: blog
permalink: /blog/
nav: false
published: false
nav_order: 4
---

{% for post in site.posts %}

  <h2><a href="{% if post.redirect %}{{ post.redirect }}{% else %}{{ post.url | relative_url }}{% endif %}">{{ post.title }}</a></h2>
  <p>{{ post.date | date: '%b %d, %Y' }}{% if post.description %} — {{ post.description }}{% endif %}</p>
{% endfor %}
