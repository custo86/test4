"use strict";

const http = require("http"),
    util = require("util");
let count = 0;

function handler (req, res, next) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    if (req.url == "/index.html"){
        res.end("Привіт світ!");
        count++;
    } else if (req.url == "/count.html"){
        res.end("Cторiнкa /index.html запрошувалась: " +count + " разiв");
    } else if (req.url != "/index.html" && req.url != "/count.html" ){
        res.end("404 Page not found!");
    }
}

let server = http.createServer(handler);
server.listen(3003);