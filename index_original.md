---
layout: page
title: Welcome to Lagomier
---

Lovingly based off [Matt Swanson][mds]'s [Lagom][lagom] jekyll theme.

>  *Lagom* is a Swedish word with no direct English equivalent, meaning "just the right amount"

I first started with Jekyll and Github pages for the reason of wanting to get away from Go Daddy, while looking for themes I came across [Lagom][lagom] and loved it.  After starting to work on my own site, I started to see things that I wanted to change.   

* Originally I had modified this to use the SCSS version of Skeleton  CSS, but recently I've changed to Bootstrap 4.
* [Font Awesome][font-awesome] for icons
* Open Sans from [Google web fonts][gfonts]
* Built-in Atom feed

The number of these items started to build up until eventually (as well as Mr. Swanson archiving the original) I felt it time to break off.

## Screenshots

// Todo

## Installation

There are a couple of ways to get going with the project:

### Forking

Forking will allow you to make changes as you see fit - if they're changes you think are spectacular then feel free to pull request them:

- [Fork this repository][fork]
- Clone it: `git clone https://github.com/USERNAME/lagom`
- Install the [GitHub Pages gem][pages] (includes Jekyll): `bundle install`
- Run the jekyll server: `bundle exec jekyll serve`
- Modify to your hearts content

You should have a server up and running locally at <{{ 'http://localhost:4000'}}{{'' | relative_url }}>.

### Remote Theme

If you're not interested in making any changes to the theme directly, you can update the `_config.yml`.  For more information check out the [Remote Theme][remotetheme]:

{% highlight markdown %}
remote_theme: kenjdavidson/lagomier
{% endhighlight %}

### Combination

You can also do both - fork the project to make your own custom changes, then use `remote_theme` with your own repository.  I found this was the best choice (and ultimately how this theme was born).

## Deployment

You should deploy with [GitHub Pages][pages] - it's just easier.

All you should have to do is rename your repository on GitHub to be `username.github.io`.  Lagomier was updated to run off the `master` branch, although based on your configuration you must just make sure that the repository setting is configured to match.

## Licensing

[MIT](LICENSE) with no added caveats, so feel free to use this on your site without linking back to me or using a disclaimer or anything silly like that.

## Contact

Feel free to open issues if you run into trouble or have suggestions. Pull Requests always welcome.

[j]: http://jekyllrb.com/
[mds]: http://mdswanson.com
[lagom]: https://github.com/swanson/lagom
[skeleton]: http://www.getskeleton.com/
[font-awesome]: http://fortawesome.github.io/Font-Awesome/
[gfonts]: http://www.google.com/fonts/specimen/Open+Sans
[fork]: https://github.com/swanson/lagom/fork
[config]: https://github.com/swanson/lagom/blob/master/_data/theme.yml
[cname]: https://github.com/swanson/lagom/blob/master/CNAME
[favicon]: https://github.com/swanson/lagom/blob/master/favicon.png
[logo]: https://github.com/swanson/lagom/blob/master/logo.png
[pages]: http://pages.github.com
[twitter]: https://twitter.com/_swanson
[pages]: https://github.com/github/pages-gem
[remotetheme]: https://github.com/benbalter/jekyll-remote-theme