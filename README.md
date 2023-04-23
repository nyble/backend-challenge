# Backend Take-Home Coding Challenge 🧑‍💻


Welcome to the take-home coding challenge part of your journey. We are excited about your interest to join us on our mission to help Canadians build and access credit.
In the spirit of fairness, we ask that **all** of our candidates go through a take-home coding challenge. 

_**Disclaimer:** This is a fictitious assignment designed to mimic problems encountered at Nyble, but is greatly simplified and the code implemented here will **never** be used in any context other than this exercise. That being said, we encourage candidates to write production-style code and design._


## Your Task 🔨

We want to create a simple payment routing service (API server) using GraphQL, Node.js (Express) and Typescript.
The payment routing service you will be creating will help optimize payment processing in this fictional scenario.

## General Instructions

_Follow these instructions carefully_

* From the moment you receive this challenge, you will have exactly __1 week__ to complete it. The challenge should only take a few hours to complete, so plan your time as you see fit.
* You are allowed to use whatever references online __but__ your work must be yours alone, collaboration is not permitted.
* Use this template repo to make a copy into your own **private** repo and add `han@nyble.com` (`hanburger97`) as a collaborator. 
* Create a new branch using the naming format `th-backend-<YOUR FIRST NAME>-<YOUR LAST NAME>` in all lowercase, and write your implementation code on that branch.

**Submission instructions**

* Open a new **Pull Request** from your working branch into `main` and title it `Take-Home Challenge Submission`
* In the PR clearly write the following
  * Your name and email
  * Briefly write in a section about your solution and design
* Add `han@nyble.com` (`hanburger97`) as a reviewer.
* Open the pull request.
* Send an email to `han@nyble.com` notifying that you are ready for review.

_Follow these instructions carefully, wrong or incomplete submissions will be ignored_


## 🚧 Task Specifications & Instructions 🚧

### Context

At Unicorn Corp. 🦄 we are trying to optimize our payment processing. We have different payment providers that offer different pricing and support different capabilities. E.g. Provider A can only process mastercard and charges X amount whereas Provider B can process both Visa and Mastercard but charges Y amount per transaction.

Your goal will be to build a service (graphql endpoint) that can optimally route payments to its optimal provider. 

### Goal 

We want to minimize the total processing cost for all payments. 

(note: the solution is linear, meaning that you will arrive at the global minima by minizing the cost for each payment transaction)

### Main Deliverable: GraphQL Query Endpoint

The main interface to your routing service will be the `routePayment` query endpoint. 

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


### Data Models & Sample Data 

* Payments data: we have included sample payments data in the `data/payments.json` file. These payments are non-exhaustive in terms of cases

* Provider data: we have included the data in the `data/providers.json` file. Each provider will describe its pricing structure alongside its capabilities. 

* **Datasheet**: refer to the `data/datasheet.md` for better explanation of the data model and provider pricing. (Read it carefully) [**Read the Datasheet Here**](https://github.com/nyble/take-home-challenge/blob/main/data/datasheet.md)


## Getting started with scaffold/boilerplate 🚀

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

## How we review 🧐

**READ CAREFULLY**

1. Correctness & handling of **all** relevant edge cases. Please state any assumptions you make in the code comments.

2. Comprehension of complex problem & attention to detail. We evaluate you on your ability to pay attention to details as well as your ability to follow instructions carefully.

3. Resourcefulness. We know that this codebase and some of the stack may be new to you. Your ability to unblock yourself by being resourceful (Google, Stack Overflow, etc.) and your ability to learn/adapt to a new code environment with new informations are strong signals we look for.

4. Design & architecture. We will also take into account your ability to design and write production-ready code that can be scaled. Make sure that you will be able to justify your design and implementation choices during the review call.


## Questions and bugs

If you have any non-challenge related  questions such as a bug in the code or setup problems you can reach out to han@nyble.com
