# Express.js: Note Taker - Homework 11, UW Coding Bootcamp

![Github licence](http://img.shields.io/badge/license-MIT-blue.svg)

## Description

For week 11 of the UW Coding Bootcamp my homework invited me to build an application called Note Taker that can be used to write and save notes. This application uses an Express.js back-end and it saves and retrieves note data from a JSON file.

This assignment started with a front-end foor the application, I built the back end, connected the two and have deployed the application to Heroku.  

## Built With

* [JavaScript](https://www.javascript.com/)
* [Express.js](https://expressjs.com/)
* [Node.js](https://nodejs.org/en/)
* [npm modules](https://www.npmjs.com/package/module)
* [Heroku](https://id.heroku.com/)
* [Developer Mozilla](https://developer.mozilla.org)

## Link to Site GitHub Repo

* [Deployed Site via Heroku]()
* [See Github Repo](https://github.com/spencee1315/hw_11)

Screenshot of live site:
<img src="">

## Installation 

Clone or download repo via Github and install dependencies. <br> Or visit the deployed site via Heroku with the link provided above.

## Usage 

Deployed via Heroku (see link above)

## Tests

Not applicable.

## Snippet
This a code snippet from the server.js file..

```javascript
// DEPENDENCIES - npm packages that will give our server useful functionality
const express = require('express');

// EXPRESS CONFIG - sets up basic properties for our express server
// Tell node we are creating "express" server
const app = express();
// Setting a port - will be used later in our listener
const PORT = process.env.PORT || 3000;

// Sets up the Express app for data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

// ROUTER - points our server to a series of "route" files
// These routes give our server a "map" of how to respond when users visit or request data from URLs.
require('./routes/apiroutes')(app);
require('./routes/htmlroutes')(app);

// LISTENER
// Effectively starts our server
app.listen(PORT, function() {
    console.log(`Server is listening on PORT: ${PORT}`);
});
```

## License 
This project is licensed under MIT

## Contributing 
Contributors should read the installation section. 

### Authors

* **Elliott Spencer**

### Contact Information

* [Link to Portfolio Site](https://spencee1315.github.io/hw_wk2/)

* [Link to Github](https://github.com/spencee1315)

* [Link to LinkedIn](https://www.linkedin.com/in/elliott-spencer-886a9818/)
