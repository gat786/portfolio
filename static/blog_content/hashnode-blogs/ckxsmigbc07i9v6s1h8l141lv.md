---
title: Web3 Words Jargon Explained
created_on: 2021-12-30
description: I explain different technical words jargon that you might hear while working with Web3.
tags: ['Web3', 'Blockchain', 'Smart Contracts', 'Solidity', 'Basics', 'Beginners']
authors: ['ganesht049@gmail.com']
---

# Tokens, Smart Contracts, Fungible vs Non-Fungible Tokens, Mining, Address, Blocks and all the different Block-chain jargon explained.

## Preface

I have been learning development with Web3 lately and have come to understand about a lot of topics which were a black box for me before starting in and I felt like writing a blog about writing everything down and explaining everything in a simple way so as to everyone could understand it.

## Introduction

First of all, you should understand why is this even a thing. It all started with the creation of Bitcoin and decentralised finance sector. After the creation of bitcoin and the rise of it everyone was excited about how the decentralised thing solves all the problems that we have currently in our world and was hyped about it. A few years went by and  [Vitalik Buterin](https://en.wikipedia.org/wiki/Vitalik_Buterin) and [Gavin Wood](https://en.wikipedia.org/wiki/Gavin_Wood) created Ethereum. While it also had a currency with it, but it was more than that. It introduced the concepts of Smart Contracts and with it started the journey of dApps. 

## Basics

Well Smart Contracts are nothing but a piece of code similar to a class in Java or C-Sharp and it runs on EVM's. dApps are nothing but a cool nick name of Decentralised Applications or simply saying applications which run on a decentralised network like Ethereum. 

EVM's (nothing but Ethereum Virtual Machine) are the machines on which the ethereum software runs which basically supports all of the things that are necessary for running a ethereum node (server).

Smart Contracts get converted to bytecode once compiled and they run on EVM. eerily similar to how Java works.


![Structure of EVM Node](https://cdn.hashnode.com/res/hashnode/image/upload/v1640783724211/oyR_2nRbe.png)

*Source of this [image](https://medium.com/@dtembe/ethereum-node-evm-application-geth-smart-contract-monitoring-5c9388d1405f)*

Now you can write Smart Contracts in a bunch of languages like  [Vyper](https://vyper.readthedocs.io/en/stable/), [Solidity](https://docs.soliditylang.org/en/v0.8.11/), [Rust](https://docs.near.org/docs/develop/contracts/rust/intro) etc. but the most famous one is Solidity and we are going to keep our focus on Solidity to keep things simple.

So now we know about Ethereum, Smart Contracts and EVM, also discussed about how you can write a smart contract. Next Step talking about Tokens. 

## Why Tokens

Tokens are best described as a state variable inside of a Smart Contract which is used in transactions (function calls) to interact with them and allow their transfer from one person to another to create a sense of ownership. 

An OpenZeppelin description is sometimes better than what I said and it is here 

> A token is a representation of something in the blockchain. This something can be money, time, services, shares in a company, a virtual pet, anything. By representing things as tokens, we can allow smart contracts to interact with them, exchange them, create or destroy them.

[Source](https://docs.openzeppelin.com/contracts/2.x/tokens)

All these tokens and complex Smart Contract behavior needs to be standardized and that's why a number of Standardized ways of creating tokens have been made. These standards are known as Token Standards and there are a number of them. 

> One of the many Ethereum development standards focus on token interfaces. These standards help ensure smart contracts remain composable, so for instance when a new project issues a token, that it remains compatible with existing decentralized exchanges. [Source](https://ethereum.org/en/developers/docs/standards/tokens/#introduction)

## Token Standards

The most common and prevalent Token Standards with their primary use-cases are listed here -

1. ERC-20 - A standard interface for fungible (interchangeable) tokens, like voting tokens, staking tokens or virtual currencies.
2. ERC-721 - A standard interface for non-fungible tokens, like a deed for artwork or a song.
3. ERC-777 - ERC-777 allows people to build extra functionality on top of tokens such as a mixer contract for improved transaction privacy or an emergency recover function to bail you out if you lose your private keys.
4. ERC-1155 - ERC-1155 allows for more efficient trades and bundling of transactions – thus saving costs. This token standard allows for creating both utility tokens (such as $BNB or $BAT) and Non-Fungible Tokens like CryptoPunks.

This brings another complexity into question Fungible vs Non-Fungible tokens. The main difference between Fungible and Non-Fungible tokens is like Fungible tokens are tokens which all represent the same entity. Like each fungible token is representing exactly the same entity anywhere in the smart contract. While Non-Fungible Tokens can each represent a different entity and would have different cost/value. 

Look at it this way, As tokens are something that represent an entity and should have value you can think of Fungible tokens as like a `dollar` that each and every `dollar` of the same type will have similar value. 

While NFT's are generally tokenized representations of different things, they can be anything from an image to a video or an art piece. 

The benefit of a NFT is that you can prove that certain NFT which represents a real world item is owned by a certain person because it is proved by blockchain. It gives a whole new meaning to calculating ownership of certain items and give a lot of freedom for artists to create unique pieces of art and sell them to a particular party and the whole chain would know that it is owned by them. It makes owning things a lot clearer and open.

This image would help you differentiate a little bit more between these two -

![Difference between Fungible and Non-Fungible Tokens](https://cdn.hashnode.com/res/hashnode/image/upload/v1640846729650/-pD5OfsVB.png)

[Source](https://blockchainhub.net/blog/blog/nfts-fungible-tokens-vs-non-fungible-tokens/)

## Blockchain in a gist

If you don't know all of this happens on blockchain and every detail is written in a linked data structure. It is structure in which even if someone tries to forge some entry it will be next to impossible to do so. While this is a very broad topic I recommend seeing this video to give you a gist about everything 

<iframe width="560" height="315" src="https://www.youtube.com/embed/_160oMzblY8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

If you seen that video all the things that I am going to say below will make sense so be sure to watch it. 

All of the data written on chain is stored in a block which is like a bucket or box for storing the data in.

If you have seen the video you would understand there is some calculation that needs to happen whenever something is written on chain, and one cannot forge an entry into any of the blocks which have already been written and the more number of nodes there are the more secure a Blockchain becomes.

This process of verifying data that is already written is altogether known as mining. Because it requires compute as well as energy to do so. Every node that verifies some data already on blockchain gets some reward which is what the profit of mining in blockchain is. 

For making transactions or reading data from a blockchain you need to have an Address, which basically is a account which you can use to work through the whole decentralised networks.

These address are automatically created whenever you use a wallet like metamask or with brave browsers inbuilt wallet. Note - there are bunch of different wallets that you can use and I have only listed the one's I am aware of.

That is all folks, I leave with this much information and I hope to write soon more about the things that I am learning.

Feel free to comment here and let me know if you find any thing which is wrong with whatever I have written.
