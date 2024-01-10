// package imports
const http = require("http");

// custom imports
const app = require("./app");
const { connectToMongo } = require("./services/mongo.js");
// global variables
const PORT = process.env.PORT || 5000;

// server init
const server = http.createServer(app);

// server spin
async function startServer() {
  await connectToMongo();
  server.listen(8000, () => console.log(`Node server listening on ${PORT}`));
}

startServer();
