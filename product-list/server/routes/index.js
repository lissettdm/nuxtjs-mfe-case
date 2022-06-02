const AppRoute = require("./app");
const StaticRoute = require("./static");

class Router {
  constructor() {}

  static init(server) {
    StaticRoute.register(server);
    AppRoute.register(server);
  }
}

module.exports = Router;
