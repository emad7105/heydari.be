---
layout: post
title: Passive Remote Physical Side Channels on PCs
categories: [Side-channel, System Security]
tags: [Side-channel, System Security]
description: Remote abuse of computation via VOIP applications
image: /assets/img/elgmal.png
---

<i class="fa fa-bookmark"></i> Mirror: [this blog post][cosic-blog] at COSIC.

Today at the [Real World Crypto 2022 (RWC'22)][rwc22] conference, a presentation was given with the title of "[Lend Me Your Ear: Passive Remote Physical Side Channels on PCs][paper]" that was so impressive (& scary) that I thought it is worth writing a short blog on it. 

In brief, the talk introduced a new side-channel attack that could take advantage of the CPU computation noise. Unlike regular physical side-channel attacks, this one could be mounted remotely via VOIP applications like Skype, Zoom and so forth. In other words, the way our built-in microphones are wired in our laptops can inadvertently capture electromagnetic information and reflect it to a remote party. Impressively, they showed that frequency fluctuations could enable a smart attacker to infer what is actually being computed by a CPU.

__So what is a side-channel attack in general?__ A side-channel attack is a type of attack based on information available from the implementation and/or environment leaked by our hardware and software systems. Such class of attacks are typically not concerned with protocol algorithm.

The authors had the novel idea to abuse CPU noise while computing something critical _remotely_. They started by plotting all noises (& voices) transmitted via michrophones to remote parties. They noticed that actully if the CPU is busy with a computation, this information can be observed with the naked eye. They also gave demo, and here is a picture from the demo:

<img src="../../../images/rwc-side-channel-rwc22.jpg"
     alt="Photo taken at RWC 2022" style="width:100%" />


__What could go wrong?__ They tested this attack on various laptops, and in most laptops, they noticed that the frequency changes are obvious. Next, they validated the severity of this remote leakage using 3 test cases:

1. an attacker exfiltrates the secret key used in the ECDSA signing scheme of the victim in a voice call;
2. an attacker detects what web page a remote party is browsing; and
3. a gamer attacker detects where the opponent is hiding in the Counter-Strike online game, which was really fun.

__Why is this attack important?__ This work has shown that electromagnetic noises can be abused remotely. It is likely that this is not the only physical side-channel that can be leaked over everyday tools like Zoom. It is worth again stressing that this was a remote physical side-channel attack, and with the new trend of remote working, thanks to pandemics, this class of attacks is very important, and it requires thorough research.

You find the paper [here][paper] which is accepted at USENIX Security 2022.



[rwc22]:https://rwc.iacr.org/2022/program.php
[paper]:https://www.usenix.org/system/files/sec22summer_genkin.pdf
[cosic-blog]: https://www.esat.kuleuven.be/cosic/blog/rwc-2022-passive-remote-physical-side-channels-on-pcs/
