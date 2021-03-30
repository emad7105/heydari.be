---
layout: page
title: Blog Posts
permalink: /blog/
---

<div id="home">
  <h2><i class="fa fa-bookmark"></i> Blog Posts</h2>
  <ul id="blog-posts" class="posts">
    {% for post in site.posts %}
      <li><span>{{ post.date | date_to_string }} &raquo; </span><a href="{{ post.url | relative_url}}">{{ post.title }}</a></li>
    {% endfor %}
  </ul>
</div>

[lagom]: https://github.com/swanson/lagom