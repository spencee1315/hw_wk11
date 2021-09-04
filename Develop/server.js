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