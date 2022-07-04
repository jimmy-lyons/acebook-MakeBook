# Acebook

## Contributors

* [Anish Kakaiya](https://github.com/AKCDNG)
* [Jimmy Lyons](https://github.com/jimmy-lyons)
* [Slava Yates](https://github.com/amfibiya17)
* [Tim Graham](https://github.com/timbo-graham)
* [Keiran Carty](https://github.com/K-Carty)
* [George Dainton](https://github.com/GeorgeDainton)

## Description

Makebook is a social media plpatform that allows users to create a profile page, post comments and make friends with other users. A users profile page is customisable with photos and details of themselves. Each post can be commented on by any user.

## Technologies Used

- [Express](https://expressjs.com/) web framework for Node.js.
- [Nodemon](https://nodemon.io/) to reload the server automatically.
- [Handlebars](https://handlebarsjs.com/) to render view templates.
- [Mongoose](https://mongoosejs.com) to model objects in MongoDB.
- [ESLint](https://eslint.org) for linting.
- [Jest](https://jestjs.io/) for testing.
- [Cypress](https://www.cypress.io/) for end-to-end testing.

## Card wall

[Trello Card Wall](https://trello.com/b/97TYztAO/makebook)

## How to run locally

### Install Node.js

## How to Run Locally

1. Fork this repository
2. Rename your fork to `acebook-Makebook-<your name>`
3. Clone your fork to your local machine
4. Install Node.js dependencies
   ```
   npm install
   ```
5. Install an ESLint plugin for your editor. For example: [linter-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for vscode.

### Start

1. Start the server
   ```
   npm start
   ```
2. Browse to [http://localhost:3000](http://localhost:3000)

#### Start test server

The server must be running locally with test configuration for the
integration tests to pass.

```
npm run start:test
```

This starts the server on port `3030` and uses the `acebook_test` MongoDB database,
so that integration tests do not interact with the development server.

### Test

- Run all tests
  ```
  npm test
  ```
- Run a check
  ```bash
  npm run lint              # linter only
  npm run test:unit         # unit tests only
  npm run test:integration  # integration tests only
  ```
