---
layout: page
title: Page Assets
permalink: /page-assets/
---

There are a number of constant page assets that are included in the `/assets/` folder.  By placing them in `/assets/` you no longer have to copy them into your own projects:

## 404

The <a href="{{ '/404.html' | relative_url }}">404.html</a> page is provided by the original [Lagom][lagom] theme.

## Atom

The original theme also provided the <a href="{{ '/atom.xml' | relative_url }}">atom.html</a> page.

## Site Json

<a href="{{ '/site.json' | relative_url }}">site.json</a> file is made available for you to include with your own Javascript functionality.  It's not currently used in this implementation of the theme.

## Archive

An <a href="{{ '/archive/' | relative_url }}">archive</a> page is provided which displays a listing of your blog posts by year.  It can be configured using the following entries in the `theme.yml` file:

{% highlight markdown %}
# theme.yml
archive:
  title: Archive
  description: |
    Please browse through my published articles - comments and corrections are always welcome.
{% endhighlight %}

each post entry is displayed using the `_include/archive-post-item.html`.  The template has requires allows for a number of parameters:

{% highlight markdown %}
{% raw %}
{% include archive-post-item.html 
    p=post 
    date_format="%b %-d"
    categories=true|false
    tags=true|false %}
{% endraw %}
{% endhighlight %}

## Categories

A <a href="{{ '/categories/' | relative_url }}">categories</a> page is creating grouping posts by category.  Posts can appear in multiple categories if they've been assigned to both.  Categories have the same configuration of title and description:

{% highlight markdown %}
# theme.yml
categories:
  title: Categories
  description: |
    Please browse through my published articles - comments and corrections are always welcome.
{% endhighlight %}

The same `_include/archive-post-item.html` is used.

[lagom]: https://github.com/swanson/lagom