---
layout: page
permalink: /publications/
title: publications
description: 
years: [2024, 2023, 2022]
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->

For full publications, please refer to my <a href='https://scholar.google.com/citations?user=Ryj36iQAAAAJ&hl=en'>Google Scholar</a> page.

<div class="publications">

{%- for y in page.years %}

<h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
