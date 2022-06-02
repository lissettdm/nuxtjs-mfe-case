const express = require("express");

const Router = require("./routes");
const Middlewares = require("./middlewares");

class Server {
  constructor(port = 5001) {
    this.server = express();
    this.port = port;

    Middlewares.init(this.server);
    Router.init(this.server);
  }

  start() {
    this.server.listen(this.port);
  }
}

module.exports = Server;
