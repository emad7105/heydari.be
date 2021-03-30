---
layout: post
title: Computation on Encrypted Data (Industry day)
categories: [Cryptography, Security, Events, COED]
tags: [Cryptography, Security, Events, COED]
---

On Friday, [COSIC][cosic] research group of KU Leuven organized an [event][coed] arranged by [Nigel Smart][nigel] in Leuven about computation on encrypted data. More specifically, it was about secure multi-party computation (MPC) and fully homomorphic encryption (FHE).

I learnt a lot about the concepts, the existing and potential use cases of these practical data protection tactics. As a researcher interested in __middleware__, cloud computing, and applied cryptography, it was a fruitful day for me!

These are a series of Industry Day events with the purpose of transferring knowledge from academia to (Flemish) industry in Belgium.

![Photo by Abdel Aly]()

<img src="https://www.heydari.be/wp-content/uploads/2018/12/coed.jpg"
     alt="Photo by Abdel Aly" style="width:100%" />

[Nigel Smart][nigel] started the session with a well-known example: [the millionaire problem][yao]. A group of bankers received bonuses from their employers. They gather together around a table in a fancy restaurant to have dinner, and they know nothing about the amount of each other's bonuses, but they have a deal: the person who has the highest bonus should pay the restaurant bill. How can they know who has the highest bonus without actually revealing their bonus to each other?

That's where the magic begins!

>  Anyway, to cut a long story short, MPC is about executing a function by a set of mutually distrustful parties in a way that each party has his own private input. The only requirement is to have only one honest party!

He also presented a bunch of use cases (see this [awesome paper][mpccases]). In the meantime, we briefly reviewed the fully homomorphic encryption and how terrible the performance is. By the way, the price you pay in terms of performance in MPC is the communication among parties.

Later on, a couple of companies, such as [Unbound][unbound] and [Cybernetica][cybernetica], presented their products and how they try (are trying) to use MPC in practice. The highlight for me was the virtual HSM (vHSM) from Unbound. In a nutshell, software providers no longer need to employ expensive hardware such as HSM to protect their keys in the cloud or on-premise, as well as being forced to use legacy [](link)crypto. What they do basically is to break the key into smaller pieces and spread the key in between parties and work like how a regular HSM does (see [here][mpcblockchain]). The performance is relatively acceptable for most applications (if I recall correctly, the latency is ~20ms).  


Later on, [Pascal Paillier][paillier] presented their recent work about [Fast Homomorphic Evaluation of Deep Discretized Neural Networks][fastfhe]. I'm not an expert in the domain of homomorphic schemes and I was always told what Gentry did was truly a breakthrough in this line of research, but the outcome is absolutely inefficient. Fully homomorphic schemes typically produce noise, especially after multiplicative operations. Therefore these constructions should regularly clean up the noise, and this process is called bootstrapping. On the one hand, the problem is if the noise gets larger than a certain degree, the ciphertext becomes literally a piece of garbage; on the other hand, the bootstrapping process is not a very fast operation.

Their work uses a fast FHE (see [CGGI'16][CGGI]) with remarkably high-speed bootstrapping around 0.1 seconds.

>  Pascal Paillier said that they used an already-trained machine learning model, but the next research step would be training a model homomorphically and of course efficiently!

These advanced contributions to cryptographic constructions for computing on encrypted data are not just academic achievements anymore. There are startups and very practical results. I truly think it's time for other communities to explore the (emerging) outcome of decades of cryptography research and build green-field systems and add extra security by design to their applications.

Baldur Kubo from Cybernetica tweeted something interesting today regarding the recent case of [Marroitt hotels data breach][marriot]. The Guardian says, "500 million guests may have been exposed. Although credit card information was encrypted, Marriott has not been able to rule out the possibility that the encryption keys were also stolen.". __What would have happened if they had used an MPC flavored key management protocol?__

__Nothing! Keys wouldn't have been there to be stolen.__

[coed]: https://www.cosic.esat.kuleuven.be/events/industryday2018/
[cosic]: https://www.esat.kuleuven.be/cosic/
[nigel]: https://en.wikipedia.org/wiki/Nigel_Smart_(cryptographer)
[abdel]: https://www.esat.kuleuven.be/cosic/people/abdelrahaman-aly/
[CGGI]: https://eprint.iacr.org/2016/870
[yao]: https://en.wikipedia.org/wiki/Yao%27s_Millionaires%27_problem 
[mpccases]: https://eprint.iacr.org/2018/450.pdf 
[unbound]: https://www.unboundtech.com/
[cybernetica]: https://cyber.ee/
[paillier]: https://scholar.google.com/citations?user=xwzhjfoAAAAJ&hl=en
[fastfhe]: https://eprint.iacr.org/2017/1114.pdf 
[marriot]: https://www.theguardian.com/world/2018/nov/30/marriott-hotels-data-of-500m-guests-may-have-been-exposed
[mpcblockchain]: https://github.com/unbound-tech/blockchain-crypto-mpc