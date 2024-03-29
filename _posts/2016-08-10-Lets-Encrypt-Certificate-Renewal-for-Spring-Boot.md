---
layout: post
title: Let's Encrypt Certificate Renewal for Spring Boot
categories: [Spring, TLS, Tutorials]
tags: [Spring, TLS, Tutorials]
---

In the previous post, we discussed how to fetch a valid certificate using Let's Encrypt client. In this post, we see how we can renew our certificates and use them with Spring Boot.

<i class="fa fa-bookmark"></i> An extended version of this post on DZONE [[here][dzone]]

## Introduction

Let's Encrypt certificates are only valid for 90 days. Some may say 3 months is too short comparing to validity period of certificates offered by other providers. They have two motivations for this strict decision: (1) limiting damage from key compromise or mis-issuance; (2) encouraging automation.

## Renewal process
1. Open your Let's Encrypt client directory, I mean the certbot.
__Remarks__:
On the same machine that certificates and keys are located. Please read all of the remarks from the previous post, such as having python installed, having port 80 open, etc.
2. Run the renew command as follows.
{% highlight markdown %}
$ sudo ./certbot-auto renew
{% endhighlight %}

This command checks the expiry date of certificates located in this machine (managed by Let's Encrypt), and renew the ones that are either expired or about to expire.




__We have new certificates, as simple as that!__
As discussed in the previous post:  

>  Spring-Boot does not support PEM files generated by Let’s Encrypt. Spring Boot supports PKCS12 extension. Using OpenSSL, we convert our certificate and private key to PKCS12.



## Preparation for Spring Boot

__Let's create a PKCS#12 key store!__

1. Go to `/etc/letsencrypt/live/example.com`
2. We convert the keys to PKCS12 using OpenSSL in the terminal as follows.
{% highlight markdown %}
$ openssl pkcs12 -export -in fullchain.pem \ 
                 -inkey privkey.pem \ 
                 -out keystore.p12 
                 -name tomcat \
                 -CAfile chain.pem \
                 -caname root
{% endhighlight %}

The file `keystore.p12` with PKCS12 is now generated in `/etc/letsencrypt/live/example.com`.

But wait!

I assume the machine that you're woking on is the one with running Spring Boot. It means that we're not done yet! The previous `keystore.p12` is still in the memory, meaning that you need to __restart your application__! 

It's not always viable to simply restart a running application. There might be other ways to update it without restarting but it's not in the scope of this post.

#### The take-home message

In this post, we saw how to renew an existing, about-to-expire certificate. Afterwards, we created a PKCS#12 keystore to make Spring Boot happy. If you really don't unnecessarily play with configurations, it takes less than 5 minutes to have all things ready.

The main takeaway message for me is that Let's Encrypt makes (re-)issuing certificates incredibly faster, easier, cheaper for everyone. And today we must enable our services to use HTTPS.


[dzone]: https://dzone.com/articles/spring-boot-secured-by-lets-encrypt