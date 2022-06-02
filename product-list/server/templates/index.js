const { renderToString } = require("@vue/server-renderer");
const StyleHandler = require("../handlers/styles");

class Template {
  constructor() {}

  static async create(app) {
    let appContent = await renderToString(app);
    appContent = StyleHandler.renderStyles(appContent);
    return appContent;
  }
}

module.exports = Template;
