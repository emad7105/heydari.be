---
layout: page
title: Customizing Lagmier
permalink: /customization/
read_time: 5 min read
---

Next up, you're probably going to want to customize the theme without overriding a lot of files (not cool if you choose to go with another theme), the following customizations are available:

## Theme.yml

Here is a copy of the current `theme.yml` file, along with comments.  This file should be copied and overridden by your project.  If you switch between themes are are testing themes out, hopefully I've made this easy.

{% highlight markdown %}
# Theme customization - please change from the defaults!

# "Hi, I'm _______"
# Changes are displayed in the sidebar/menu
name: Lagomier User   
email: test@example.com
tagline: "Weak opinions, strongly held"
bio: |
  A brief bio or comment can be updated within theme.yml - removing it 
  completely is also possible.
logo: #http://github.com/username.png - hard coded image URL
favicon: favicon.png

# Social/Follow me text
follow_me: "Follow me:"

# Change disclaimer content - removing/clearing will stop the disclaimer
# from being displayed.  Can be overwritten by adding disclaimer to 
# page/post front matter
disclaimer: |
  The postings on this site are my own and don't necessarily represent my 
  employer’s positions, strategies or opinions.

# Control display and text on the Archive page
archive:
  title: Archive
  description: |
    Please browse through my published articles - comments and corrections are
    always welcome.

# Control display and text on the Categories page
categories:
  title: Categories
  description: |
    Please browse through my published articles - comments and corrections are
    always welcome.    

# Toggle link/icon to view atom feed (/atom.xml) in sidebar
show_atom_feed: true

# Google Analytics key, leave blank to ignore UA-xxxx-x
google_analytics_key: 

# Date format
date_format: "%-d %b %Y"

# Configure Disqus comments
# Site name is configured on your Disqus settings screen.
disqus:
  site_name: 
  title: Discussion & Feedback
{% endhighlight %}

## Social.yml

The original social feature was hard coded, where adding a new social link required adding to `theme.yml` and updating the `social.html` file.  I've removed that requirement and provided the new `social.yml` that can accept any number of social links that you have available.  Here is an example of Github and Instagram:

{% highlight markdown %}
# Social objects require an object to be created
- name: Github 
  display: Github User
  id: github_user
  url: https://github.com/github_user
  icon: fab fa-github
- name: Instagram
  display: Instagram User 
  id: instagram_user
  url: https://www.instagram.com/instagram_user
  icon: fab fa-instagram
{% endhighlight %}

## Logo and Fav Icon

The site logo defaults to the file `/assets/img/logo.png`.  There are a number of ways to override this in your own site:
- Replace `/assets/img/logo.png` in your own repository.
- Adding a replacement image and setting the `logo` entry in `theme.yml`

The fav icon can be updated in much the same ways:
- Replace `/assets/img/favicon.png` in your own repository.
- Adding a replacement image and setting the `favicon` entry in `theme.yml`

## Floating Action Button (Mobile Menu)

When on a smaller device (mobile or tablet) the menu will be accessible through the floating action button.  The button can be customized by `/_includes/fab.html` file.  To just change the image displayed, set the `site.data.theme.fab` setting in `/data/theme.yml`.

The image will default to the `/assets/img/logo.png` if not provided.

## Custom Domain

If you're using this on GitHub Pages with a [custom domain name][cname], you'll want to change this to be the domain you're going to use. All that should be in here is a domain name on the first line and nothing else(like: `example.com`).

## Rouge Highlight

Just as with the original [Lagom][lagom] the Rouge highlight is using the Solarized theme.  This can be overwritten by providing a new `_sass/syntax.scss` or manually applying styles to the `.highlight` selector.

{% highlight java linenos %}
package com.example;

import com.example.UserMapper;

public class UserServiceImpl {

    @Inject
    private UserMapper userMapper;

    @CacheGet
    public User getUserByEmail(String email) {
        return userMapper.getByEmail(email);
    }
}
{% endhighlight %}

[lagom]: https://github.com/swanson/lagom
[cname]: https://help.github.com/en/github/working-with-github-pages/configuring-a-custom-domain-for-your-github-pages-site