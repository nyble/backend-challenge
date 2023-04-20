
# Backend Take-Home Coding Challenge 🧑‍💻

We want to create a simple payment routing service (API server) using GraphQL, Node.js (Express) and Typescript.
The payment routing service you will be creating will help optimize payment processing in this fictional scenario.

**Disclaimer:** This is a fictitious assignment designed to mimic problems encountered at Nyble, but is greatly simplified and the code implemented here will **never** be used in any context other than this exercise. That being said, we encourage candidates to write production-style code and design.


## Tech stack & Resources 

As mentioned in the general `README.md` you can use any available resources you find on the internet as long as this challenge is completed **without** any collaboration.

We know that you might of have never worked with this technology stack before, but we believe that being resourceful and finding via (Google, Stack Overflow, etc.) is a crucial skill, especially for an early-stage start-up where you will be asked to be independent on your own.
Therefore, figuring out the tech stack is also part of the challenge! 🚀


## 🚧 Specifications 🚧

_Read these carefully_

### Context

At Unicorn Corp. 🦄 we are trying to optimize our payment processing. We have different payment providers that offer different pricing and support different capabilities. E.g. Provider A can only process mastercard and charges X amount whereas Provider B can process both Visa and Mastercard but charges Y amount per transaction.

Your goal will be to build a service that can optimally route these payments to their corresponding providers. 

### Invariance (Guarantees)
* All payments can be routed to at least one (1) payment provider. In other words, a solution exists.

### Goal 

We want:
1. Every payment routed successfully to a provider
2. Minimize the total processing cost for all payments. (note: the solution is linear, meaning that you will arrive at the global minima by minizing the cost for each payment transaction)

### GraphQL Endpoints

_note:_ If you are unfamiliar with GraphQL, there are plenty of resources on the internet

We want to implement the following `routePayment` query endpoint. Where other services at Unicorn Corp. 🦄 will be able to call it via GraphQL.

The query endpoint will return the provider ID and name as well as the payment processing cost. 

```{gql}
query {
  routePayment(
    data: {
      amount: Int!
      payment_method: {
        type: String!
        network: String!
        brand: String!
        funding_type: String!
      }
    }
  ) {
    provider_id: String
    provider_name: String
    cost: Int!
  }
}

```

You can refer to the `src/endpoints/query/SampleQuery.ts` example to create a query endpoint. 

**GraphQL Playground**

In order to interact with your endpoint you can use any Postman client you want to `http://localhost:3000/api` or you can use the built-in GraphQL playground UI located at `http://localhost:3000/playground`.

### Code Structure and Organization

This is the part where we hand over the torch to you. See below for the basic structure of the boilerplate but most of your business logic will be located inside `src/` folder. 

Note that you might be required to justify your design and implementation choices along with 


### Assignment specifics & explanations

* Payments data: we have included the payments data in the `data/payments.json` file. You can assume that all the data there covers all the cases that you will be evaluated on. 
* Provider data: we have included the data in the `data/providers.json` file. Each provider will describe its pricing structure alongside its capabilities. 
* **Datasheet**: refer to the `data/datasheet.md` for better explanation of the data model and provider pricing. (Read it carefully) [**Read the Datasheet Here**](https://github.com/nyble/take-home-challenge/blob/main/backend/data/datasheet.md)


## Getting started with scaffold/boilerplate

We have created a basic scaffold for you. Since you have decided to attempt the backend challenge, this directory will be the "root" of all of your work.

**Pre-req**
1. Make sure that you are using `Node` version 14. To help you with that you can try to use `nvm` or Node Version Manager
2. Make sure you have `git` and `make` installed
3. Make sure you have `yarn` package manager installed

**Steps**
1. Run `make dev` to install all dependencies 
2. Run `make up` to start the server and 🎉 TADA! It should work! 🎉 The server will be running in hot-reloading mode using nodemon, thus you don't need to restart it every time you make a code change.
3. You can use the GraphQL playground to test your implementation. Simply go to `http://localhost:3000/playground` in your browswer 

*Note:* There might be slight variation depending on your computer's OS and chip. Solving & debugging your setup is also a crucial part of your ability to be resourceful and independent.

**Structure**

```
backend/ Root directory for the challenge
  | - src/ where all the source code lies
  |      | - endpoint/ Where all the endpoint definitions are for the GraphQL API
  |      | - util/
  |      | - (...) To be created by you
  | - test/ where all the unit tests will be (not required)
  | - data/ where you will get the sample data from
  | - config/ where the config file is located
```


### Questions and bugs

If you have any non-challenge related  questions such as a bug in the code or setup problems you can reach out to han@nyble.com