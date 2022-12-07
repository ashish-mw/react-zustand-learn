// this is a standalone server
// node contrib/server.js

import http from "http";

const books = [
  { id: 1670409726606, name: "Dune" },
  { id: 1670409926513, name: "Harry Potter" },
];

const requestHandler = (req, res) => {
  // res.writeHead(200);
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(books));
};

const server = http.createServer(requestHandler);

server.listen(9898, "0.0.0.0", () => {
  console.log("Server is running on http://0.0.0.0:9898");
});
