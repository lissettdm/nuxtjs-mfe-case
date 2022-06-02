const React = require("react");
const path = require("path");
const FilesHandler = require("../handlers/files");
const Template = require("../templates");
const paths = require("../../config/paths");
const { default: App } = require(path.join(paths.appDir, "app.js"));

const manifest = require(path.join(paths.clientDir, "manifest.json"));

const app = React.createElement(App);

class AppRoute {
  constructor() {}

  static register(server) {
    server.get("/", async (_, res) => {
      let html = await Template.create(app);
      res.send({
        html,
        main: manifest["main.js"],
      });
    });

    server.get("/playground", async (_, res) => {
      let appHTML = await Template.create(app);
      let html = await FilesHandler.getFileContent(
        path.join(paths.buildDir, "/client/index.html")
      );

      html = html.toString().replace("APP_CONTENT", `${appHTML}`);
      res.setHeader("Content-Type", "text/html");
      res.send(html);
    });
  }
}

module.exports = AppRoute;
