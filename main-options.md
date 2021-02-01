---
layout: page
title: Menu Options
permalink: /main-options/
---

One of the main additions to the **Lagomier** theme is the navigation which is available on desktop (in the sidebar) and mobile (as a tab bar).  The original [Lagom][lagom] only provided the home link as well as a home icon link on each post page.  I felt that it was important to provide more options.

This isn't a perfect implementation, as it currently only works well (looks good on mobile) with three to four menu items.  On mobile there is a more (ellipsis) added to the end which is used to display the sidebar.

## Configuration

Menu options are added to `_data/menu.yml` in the format:

{% highlight markdown %}
- name: customization
  title: Customization
  icon: fas fa-edit
- name: main-options
  title: Menu Options
  icon: fas fa-bars
- name: page-assets
  title: Page Assets
  icon: fas fa-file-alt  
{% endhighlight %}

where `site.data.menu[].name` must match the page `page[].name` front matter, this ensures the page permalink is used and dynamic, instead of having to update both the page and the menu.

Example `customization.md`:

{% highlight markdown %}
---
layout: default
title: Customization
permalink: /customization/
---

# Customizing Lagomier

The next thing to do is start customizing and adding content to your site.  The following options are available when doing so:

...
{% endhighlight %}


[lagom]: https://github.com/swanson/lagom