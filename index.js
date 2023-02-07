const functions = require('@google-cloud/functions-framework');

functions.http('myFunction', (req, res) => {
    res.send('Hello, World');
});