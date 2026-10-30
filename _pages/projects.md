---
layout: page
title: projects
permalink: /projects/
description:
nav: false
published: false
nav_order: 3
display_categories:
horizontal: false
---

<div class="projects">
  <div class="row row-cols-1 row-cols-md-3">
    {% assign projects = site.projects | sort: 'importance' %}
    {% for project in projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>
