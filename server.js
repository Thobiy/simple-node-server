const http = require("node:http");


const server = http.createServer((req, res) => {
    console.log({
        url: req.url,
        method: req.method
});

});



server.listen(3000, "localhost", () => {});
console.log("server running");



