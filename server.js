const http = require("node:http");
const os = require('os');


function sysDetail(){
    const cpuInfo = os.cpus();
    const osInfo = {
       release: os.release(),
       machine: os.machine(),
       type: os.type(),
       userInfo: os.userInfo(),
       memory: os.totalmem(),
       freeMemory: os.freemem(),

   };

   const details = {
       cpuInfo: cpuInfo,
       osInfo: osInfo
   };
   return details;
};


const server = http.createServer((req, res) => {
    // res.setHeader('Access-control-Allow-Origin', "*");
    res.setHeader("Access-control-Allow-methods", "GET");
    res.setHeader("Access-control-Allow-Headers", "Content-Type");

    


    if (req.url === "/" && req.method === "GET") {
       // res.end(JSON.stringify({ message: "API Running" }));

        const systemDetail = sysDetail();
        res.writeHead(200,  {"content-Type": 'text/json' });
        res.end(JSON.stringify(systemDetail));




    } else if (req.url === "/jokes" && req.method === "GET") {
        res.end(JSON.stringify([]));

    } else if (req.url === "/jokes" && req.method === "PUT") {
        res.end(JSON.stringify({message: "putting successful" }));

    } else if (req.url === "/" && req.method === "POST") {
        res.end(JSON.stringify({message: "Done"}));
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: "Not found" }));
    }
}

);



server.listen(3000, "127.0.0.1", () => {});
console.log("server running");



