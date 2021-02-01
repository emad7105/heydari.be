---
layout: default
title: Archive
permalink: /archive/
---

# {{ site.data.theme.archive.title }}

{{ site.data.theme.archive.description }}

{% for p in site.posts %}
    {% capture this_year %}{{ p.date | date: "%Y" }}{% endcapture %}
    {% capture prev_year %}{{ p.previous.date | date: "%Y" }}{% endcapture %}
    {% if forloop.first %}
{:.archive-year}
## {{ this_year }}
    {% endif %}
{% include archive-post-item.html post=p date_format="%b %-d" categories=true %}
    {% if forloop.last %}
    {% else %}
{:.archive-year}
## {{ prev_year }}
    {% endif %}    

{% endfor %}
