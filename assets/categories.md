---
layout: default
title: Categories
permalink: /categories/
---

# {{ site.data.theme.categories.title }}

{{ site.data.theme.categories.description }}

{% for cat in site.categories %} 
{:.category-title}
## {{ cat[0] }}

{% for p in cat[1] %} 
{% include archive-post-item.html post=p date_format="%b %-d %Y" tags=true %}
{% endfor %}
{% endfor %}

