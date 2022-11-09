---
layout: post
title: Where Is the Research on Cryptographic Transition and Agility
categories: [Cryptography, crypto-agility, Security]
tags: [Cryptography, crypto-agility, Security]
description: Where Is the Research on Cryptographic Transition and Agility
image: /assets/img/elgmal.png
---

<i class="fa fa-bookmark"></i> Mirror: [this blog post][cosic-blog] at COSIC.

Cryptographic agility has been an underrated subject in academia. Cryptoanalysis is getting more sophisticated every single day. Whenever a flaw is discovered, one might say, we just need to replace a cipher, use a larger key, and so forth. However, in real-world settings, this is _not_ that simple. In particular, if we someday build large-enough quantum computers (QC), our Internet Security will be thrown out the window.  

- What is the plan for all ciphers securing our assets based on the integer factorization or discrete logarithm problems such as RSA, ECDSA, ECDH, and more? 
- The real question is how to adapt our software systems to cope with this cryptographic evolution (and/or future evolutions)?

Today at [RWC'22][rwc22], David Ott gave a talk with the title: 

> "Where Is the Research on Cryptographic Transition and Agility?"

I cannot agree more with David in that regard; there is even a dedicated subsection in my [thesis][thesis] about cryptographic agility (see Section 5.2.2).

This is not an easy problem. For example, previously at [RWC'20][rwc20], ABN AMRO Bank [reported][abn-ambro] that it took the organization almost more than a year to discover and replace their obsolete certificates based on SHA-1 (which is of course a no-go today). The process was painful, but it was just SHA-1. Quantum computers can potentially break almost many of today's public-key cryptography deployments. How will we get there? 


__Quantum computers break today's public-key crypto.__ Will we have sufficiently powerful quantum computers? That's a different story. It is important to know that many of today's cipher suites are going to be broken, thanks to Peter Shor and many other people after him. We also know that there are many scientists working days and nights on quantum physics, etc. to make quantum computers a thing. The whole quantum computers be a conspiracy or not, if we can have new ciphers capable of withstanding post-quantum threats, then just why not? 


While looking into [one of David Ott's papers][david-otts-paper] after his talk, I stumbled upon a table published by NIST. In summary:  

- algorithms like AES, SHA-{2,3} require larger key sizes and outputs respectively, and
- RSA, EC cryptography (ECDSA, ECDH, etc.), DSA, and others will be no longer secure.

__NIST competition.__ NIST has taken these threats seriously and has announced a call for post-quantum cryptography (PQC) algorithm proposals for standardization in a 6-year-long selection process.

__Urgency to many organizations.__ Companies and organizations also consider these threats significant. As David explained, the timeline for having quantum computers is unclear; we do not have a certain date. History has shown that full cryptographic migrations, such as the 3DES-to-AES upgrade, take a decade. Therefore, the PQC migration is a complex process. Lastly, there is a possibility that a malicious party performs _record-now-exploit-later_ attacks.  


The PQC algorithms come with various properties:  
- key sizes,
- ciphertext sizes,
- signature sizes,
- communication requirements, and
- computational requirements.

This might initially seem to be unimportant; however, these schemes have been used in various settings varying from high-end systems to __embedded systems in IoT__. Therefore, a change in each of these aspects might have a ripple effect throughout the entire system stack.

__(My) concluding remarks.__ This is an extremely complicated challenge for the corporations with complicated and distributed software and networking stack, and in general for the entire Internet. Security architecture should be as modular as possible, and there should be guidelines, policies, and the right toolings for graceful upgrades. It is easy to outline some remarks; however, execution and realization of these requirements require a ton of research by practitioners and academics from various communities (software engineering, systems, security, cryptography, etc.), otherwise, we will end up using completely broken/outdated primitives forever such as 3DES as cipher and COBOL as a programming language.

I recommend reading [this paper][david-otts-paper] by David Ott and his co-authors.




[cosic-blog]:https://www.esat.kuleuven.be/cosic/blog/rwc-2022-where-is-the-research-on-cryptographic-transition-and-agility/
[thesis]:https://www.heydari.be/papers/2021.Emad-thesis.pdf
[rwc22]:https://rwc.iacr.org/2022/program.php
[rwc20]: https://rwc.iacr.org/2020/program.php
[abn-ambro]:https://rwc.iacr.org/2020/slides/Peters-Teles.pdf
[david-otts-paper]:https://arxiv.org/ftp/arxiv/papers/1909/1909.07353.pdf
