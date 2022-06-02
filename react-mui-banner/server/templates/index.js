const ReactDOMServer = require("react-dom/server");
const StyleHandler = require("../handlers/styles");

class Template {
  constructor() {}

  static async create(app) {
    let appContent = ReactDOMServer.renderToString(app);
    appContent = StyleHandler.renderStyles(appContent);
    return appContent;
  }
}

module.exports = Template;
