---
title: Smart Contracts - How do they work?
created_on: 2021-11-26
description: I explain how Smart Contracts work and how you can use them in your applications and what benefits it can give your apps.
tags: ['Web3', 'Blockchain', 'Smart Contracts', 'Solidity', 'getLaika']
authors: ['ganesht049@gmail.com']
---

# Smart Contracts - How do they work?

## Definition

Smart Contracts are blocks of code which are stored and executed on blockchain nodes, and they do they automatically when a certain condition is met. Once deployed they cannot be changed.

The definition of Smart Contracts by several other companies might help you understand it more clearly -


> Smart contracts are simply programs stored on a blockchain that run when predetermined conditions are met. They typically are used to automate the execution of an agreement so that all participants can be immediately certain of the outcome, without any intermediary’s involvement or time loss. They can also automate a workflow, triggering the next action when conditions are met. 
- [IBM Blog](https://www.ibm.com/topics/smart-contracts)


## Languages to create Smart Contracts with.

Now since we have an idea about what a Smart Contract is let's have a look at how it is made. There are several languages with which you can write Smart Contracts and the most used ones are - 



1. Solidity -
It is an object-oriented, high-level programming language tailored for the implementation of smart contracts. If you know about Java/C# then the structure of a solidity file would look like a C# or Java Class. 

2. Vyper -
It is a programming language with a heavy influence of Python tailored particularly for smart contract development. Auditibility, Security and Simplicity are the three fundamental design principles that drive Vyper's development.

3. DAML -
 It is an open-source programming language that is used to write distributed applications in correct, quick, and concise manner. More precisely, DAML is an easy, safe, and efficient smart contract language. DAML is intended for distributed ledgers. It provides high-level and unambiguous specification of business logic in real-time. Daml provides more privacy focused features than you would get from any of the other languages and deals with issues in a more modern way than any other language. 

Now, since you have a broad idea about what Smart Contracts are and in which languages you can write them, let's have a look at a sample Smart Contract in Solidity. 

Since Solidity is the most famous and used one of all the languages and I also have some personal ideas about working with it. We are going to use it as an example. Before we jump into code, I want to highlight why we would use smart contracts rather than any other tool to build web3 applications. 

## Benefits of using and working with Smart Contracts

The reasons according to me are following -

1. They run on blockchain nodes i.e. they are public in nature, decentralised and anyone can participate and work with them. 
2. Since all the data, contracts are public and routinely verified by several nodes it is guaranteed to be tamper proof and data once put on blockchain is a little bit harder to get rid of. (I am still very curious about what implementations it can bring into current judicial systems)
3. Read transactions are free of cost and to write any data you require gas i.e. to change a bunch if things it would cost a lot of money even if someone wanted to do it. 

## Simple Example

A simple example of a smart contract would look like this. 

%[https://gist.github.com/SaifRehman/aa733dec9371c3fadb68dd814404f022]

Here in the above example, you can see that our contract only has one field declared which can be changed i.e. `value` and there is a getter and setter function to change that value. 

Once you deploy this contract on any Blockchain that supports it. Any of the clients can access the smart contract and read data from the getter function and set the value using the setter function and paying some gas fees. 

Although this is a simple example. The main idea behind this example was to display that any class variable is the actual state of the contract. You can have different data types and store them on chain to be verifiable and immutable. 

## Additional Information necessary to get you started.

The best way to write Smart Contracts is using [Remix IDE](https://remix.ethereum.org/). Remix provides you with special tools to write solidity and deploy it to a VM or a local blockchain like  [Ganache](https://www.trufflesuite.com/ganache)  or  [Geth](https://geth.ethereum.org/) . Both Ganache and Geth are nothing but implementations of blockchain that you can run to work with smart contracts and test them locally and they come with a bunch of tooling precluded with them. 

This was enough information about blockchain and I think we should talk about it more in the next blog. 
