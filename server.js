const http = require("node:http");


const server = http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
        res.end(JSON.stringify({ message: "API Running" }));

    } else if (req.url === "/jokes" && req.method === "GET") {
        res.end(JSON.stringify([]));

    } else if (req.url === "/jokes" && req.method === "PUT") {
        res.end(JSON.stringify( {message: "putting successful" }));

    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: "Not found" }));
    }
}

);



server.listen(3000, "127.0.0.1", () => {});
console.log("server running");



