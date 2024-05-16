# simple-node-server
## Setting up a simple NodeJS Server with the core `node:http` module

Create a simple server using the core ‘node:http’ module that can handle multiple concurrent requests. Each request should respond with a message after a random delay (simulating some asynchronous operation) without blocking the server.
 

 The server should be configured to handle CORS.
 Provide a GET route that when hit, returns information about the user’s CPU and OS (any information you’d like to return).

## Dependency
- nodejs
- nodemon


## Install dependencies
npm install <dependency>

## starting Server
npm start

### Usage 
Get cpu and os information when you make GET request to "/" endpoint
>>>> http://127.0.0.1:3000/
