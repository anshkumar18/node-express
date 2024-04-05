// const http = require('http')
// // create a local server to recieve data
// const server = http.createServer((req, res) =>{
//     res.write('welcome to mycode home page')
//     res.end()
// })

// server.listen(5000)



const http = require('http')
// create a local server to recieve data
const server = http.createServer((req, res) =>{
    if(req.url === '/'){
    res.end('welcome to mycode home page')
    }
    if(req.ul === '/about'){
        res.end('Here is our  short history')
    }
//     // res.end('
//     // <h1>Oops!</h1>
//     // <><p>We con't seem to find the page your are looking for</p><a href="/">back home</a></>
//     // ')
// })

// server.listen(5000)