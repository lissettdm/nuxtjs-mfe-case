const path = require("path");
const FilesHandler = require("../handlers/files");
const Template = require("../templates");
const paths = require("../../config/paths");

const jsFilesDir = path.join(paths.clientDir, "js");
const appPath = path.join(paths.serverDir, "app.js");
const createApp = require(appPath).default;
const manifest = require(path.join(paths.clientDir, "manifest.json"));

class AppRoute {
  constructor() {}

  static register(server) {
    server.get("/", async (_, res) => {
      const app = await createApp();
      let html = await Template.create(app);
      res.send({
        html,
        main: manifest["main.js"],
      });
    });

    server.get("/playground", async (_, res) => {
      const app = await createApp();
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
