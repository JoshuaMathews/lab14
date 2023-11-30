const express = require('express')
const apiRoutes = require('./roots/api')

const app = express()

app.use(express.json())
app.use('/api', apiRoutes)

// Send 404 if we can't route their request to anything.
app.use(function(req, res, next) {
    res.status(404).send("Sorry, not found.")
})

// Output any errors to server's console and tell user it is a server error.
app.use(function(error, req, res, next) {
    console.log(error.stack)
    res.status(500).send('Server error')
})

// start the Server listening on given port or 3000.
const server = app.listen(process.env.PORT || 3000, function() {
    console.log(`server is running on port ${server.address().port}`);
})