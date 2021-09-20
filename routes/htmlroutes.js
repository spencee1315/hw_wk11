// DEPENDENCIES
// Need to include the path pakcage to get the correct file path for our html
const path = require('path');

// ROUTING
module.exports = function(app) {
    // HTML GET Requests
    // Below code handles whe users "visit" a page.
    // Each case below shows the user an html page of content.
    app.get('/notes', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    // If no matching route is found default to index
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
};