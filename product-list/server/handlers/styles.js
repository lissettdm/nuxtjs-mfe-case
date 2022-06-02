const { renderStylesToString } = require("@emotion/server");

class StyleHandler {
  constructor() {}

  static renderStyles(html) {
    return renderStylesToString(html);
  }
}

module.exports = StyleHandler;
