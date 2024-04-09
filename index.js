const { error } = require('console');
const http = require('http');

const PORT = 3032;
const PORTNAME = 'localhost';

const server = http.createServer((req,res) =>{

    //Home page
    //About page
    // Contact page
    // Product page
    // Rest...> Error

    if (req.url == '/'){

        res.statusCode = 200;
        res.setHeader('Content-Type','text/plain');
        res.end('Welcome to Node js server by Dheeraj')
    }else if (req.url == '/about') {
        res.statusCode = 200;
        res.setHeader('Content-Type','text/plain');
        res.end('About page')

    }else if (req.url == '/contact'){

        res.statusCode = 200;
        res.setHeader('Content-Type','text/plain');
        res.end('contact page')

    }else if (req.url == '/product'){
        const options = {
            hostname: 'fakestoreapi.com',
            path: '/products/1',
            method: 'GET'
        
        }
        
        const apiReq = http.request(options, (apiRes) => {
            apiRes.on("data", (data) => {
                res.statusCode = 200;
                res.setHeader('Content-Type','application/json');
                res.end(data.toString());
                
            })
        });
        
        apiReq.on("error",() => {
            console.log(e);
        });
        
        apiReq.end();
        
    }else {

        res.statusCode = 500;
        res.setHeader('Content-Type','text/plain');
        res.end('Server error!')
    }



    
});

server.listen(PORT, () => {
    console.log(`Server running on ${PORTNAME}:${PORT}`)
})
