# Makebook

```
                                                                               
         *#(((((((((((((#.                               
     #((((((((((((((((((((((                            
   (((((((((((((#*     .(((((#                          
 (((((((((((((/         (((((((*                        
(((((((((((((#     ,((((((((((((*                       
(((((((((((((#     #(((((((((((((                       
,(((((((((,              (((((((((                       
 (((((((((,             #((((((((#                       
/((((((((#####     ####(((((((((.                       
 ((((((((((((#     #(((((((((((.                        
   #(((((((((#     #((((((((((                          
     ((((((((#     #(((((((*                            
         ((((#     #((#/                                          
```

This project is a clone of Facebook.
It uses:

- [Express](https://expressjs.com/) web framework for Node.js.
- [Nodemon](https://nodemon.io/) to reload the server automatically.
- [Handlebars](https://handlebarsjs.com/) to render view templates.
- [Mongoose](https://mongoosejs.com) to model objects in MongoDB.
- [ESLint](https://eslint.org) for linting.
- [Jest](https://jestjs.io/) for testing.
- [Cypress](https://www.cypress.io/) for end-to-end testing.

## Card wall

REPLACE THIS TEXT WITH A LINK TO YOUR CARD WALL

## MakeBook Link To The Website
[Click here to use MakeBook](https://make-book.herokuapp.com/)

## Quickstart For Developers

### Install Node.js

1. Install Node Version Manager (NVM)
   ```
   brew install nvm
   ```
   Then follow the instructions to update your `~/.bash_profile`.
2. Open a new terminal
3. Install the latest version of [Node.js](https://nodejs.org/en/), currently `18.1.0`.
   ```
   nvm install 18
   ```

### Set up your project

1. Fork this repository
3. Clone your fork to your local machine
4. Install Node.js dependencies
   ```
   npm install
   ```
5. Install an ESLint plugin for your editor. For example: [linter-eslint](https://github.com/AtomLinter/linter-eslint) for Atom.
6. Install MongoDB
   ```
   brew tap mongodb/brew
   brew install mongodb-community@5.0
   ```
   *Note:* If you see a message that says `If you need to have mongodb-community@5.0 first in your PATH, run:`, follow the instruction. Restart your terminal after this.
7. Start MongoDB
   ```
   brew services start mongodb-community@5.0
   ```

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