const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.end('Welcome to our home page')
    }

    if (req.url == '/about') {
        res.end('here is our short staory')
    }
    res.end(`
    <h1>oops!</h1>
    <p> We cant seem to find page you are looking for</p>
    <a href="/"> back home</a>
    `)
})

server.listen(5000)