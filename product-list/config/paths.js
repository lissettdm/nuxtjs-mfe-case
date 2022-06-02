const path = require("path");

const buildDir = path.join(__dirname, "../dist");
const srcDir = path.join(__dirname, "../src");
const publicDir =path.join(__dirname, "../public");
const serverAppDir =path.join(__dirname, "../server");

module.exports = {
  clientIndex: path.join(srcDir, "index-client.ts"),
  serverIndex: path.join(srcDir, "index-server.ts"),  
  clientDir: path.join(buildDir, "client"),
  serverDir: path.join(buildDir, "server"),
  appDir: path.join(buildDir, "server", ),
  appHtml: path.join(publicDir, "index.html"),
  buildDir,
  publicDir,
  serverAppDir
};
