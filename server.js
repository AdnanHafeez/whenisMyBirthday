//Node JS Server
const http = require('http');
const fs = require('fs');

let today = new Date();
let dd = today.getDate();
let mm = today.getMonth();
let yyyy = today.getFullYear();

let calculateDays = (d1,m1,y1,d2,m2,y2) => {

}

const server = http.createServer((req , res) => {
  fs.readFile("./public/index.html",(err,data)=> {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(3001);
