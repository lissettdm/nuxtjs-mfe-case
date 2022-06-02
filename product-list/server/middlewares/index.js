const cors = require("cors");

class Middlewares {
  constructor() {}

  static init(server) {
    server.use(cors());
  }
}

module.exports = Middlewares;
