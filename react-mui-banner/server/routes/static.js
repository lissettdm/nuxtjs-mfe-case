const express = require("express");
const path = require("path");

const buildDir = path.join(__dirname, "../../dist");
const staticFilesDir = path.join(buildDir, "client");

class StaticRoute {
  constructor() {}

  static register(server) {
    server.use("/img", express.static(path.join(staticFilesDir, "img")));
    server.use("/js", express.static(path.join(staticFilesDir, "js")));
    server.use("/css", express.static(path.join(staticFilesDir, "css")));
  }
}

module.exports = StaticRoute;
